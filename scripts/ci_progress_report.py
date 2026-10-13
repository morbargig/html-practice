#!/usr/bin/env python3
"""Merge exercise NDJSON shards into a progress report and a job summary."""

from __future__ import annotations

import json
import os
import sys
from collections import defaultdict
from pathlib import Path


def load_records(source: Path) -> list[dict]:
    files = [source] if source.is_file() else sorted(source.rglob("*.ndjson"))
    records = []
    for path in files:
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line:
                records.append(json.loads(line))
    return records


def bar(percent: float) -> str:
    filled = round(percent / 5)
    return "█" * filled + "░" * (20 - filled)


def icon(status: str) -> str:
    return "✅" if status == "pass" else "❌"


def summarize(records: list[dict], mode: str) -> dict:
    rows = [row for row in records if row.get("mode") == mode]
    passed = sum(1 for row in rows if row.get("status") == "pass")
    failed = sum(1 for row in rows if row.get("status") == "fail")
    graded = passed + failed
    cached = sum(1 for row in rows if row.get("source") == "cache")
    percent = round((passed / graded) * 100, 2) if graded else 0
    return {
        "passed": passed,
        "failed": failed,
        "graded_total": graded,
        "cached": cached,
        "ran": graded - cached,
        "percent": percent,
    }


def cell(row) -> str:
    if not row:
        return "—"
    how = "cache" if row.get("source") == "cache" else "ran"
    return f"{icon(row.get('status', ''))} **{row.get('status', '')}** · {how}"


def chapters(records: list[dict]) -> list[dict]:
    """One entry per presentation chapter, with practice and solutions on the same exercise."""
    grouped: dict[tuple, dict] = defaultdict(dict)
    meta: dict[tuple, dict] = {}
    for row in records:
        chapter_key = (
            row.get("presentation_number", ""),
            row.get("presentation_title", ""),
            row.get("chapter_number", ""),
            row.get("chapter_title", ""),
        )
        exercise_key = (row.get("exercise_number", ""), row.get("exercise_slug", ""))
        grouped[chapter_key].setdefault(exercise_key, {})[row.get("mode", "")] = row
        meta[chapter_key] = {
            "presentation_number": chapter_key[0],
            "presentation_title": chapter_key[1],
            "chapter_number": chapter_key[2],
            "chapter_title": chapter_key[3],
        }
    ordered = []
    for chapter_key in sorted(meta):
        exercises = []
        for exercise_key in sorted(grouped[chapter_key]):
            modes = grouped[chapter_key][exercise_key]
            sample = next(iter(modes.values()))
            exercises.append(
                {
                    "exercise_number": sample.get("exercise_number", ""),
                    "exercise_slug": sample.get("exercise_slug", ""),
                    "practice": modes.get("practice"),
                    "solutions": modes.get("solutions"),
                }
            )
        ordered.append({**meta[chapter_key], "exercises": exercises})
    return ordered


def presentations(chapter_rows: list[dict]) -> list[dict]:
    grouped: dict[tuple, list] = defaultdict(list)
    for chapter in chapter_rows:
        grouped[(chapter["presentation_number"], chapter["presentation_title"])].append(chapter)
    return [
        {"presentation_number": key[0], "presentation_title": key[1], "chapters": grouped[key]}
        for key in sorted(grouped)
    ]


def markdown_table(records: list[dict]) -> str:
    lines = [
        "# HTML exercise progress",
        "",
        "| | Passed | Failed | Cached | Ran now | Progress |",
        "| --- | ---: | ---: | ---: | ---: | ---: |",
    ]
    for mode, label in (("practice", "Practice"), ("solutions", "Solutions")):
        summary = summarize(records, mode)
        lines.append(
            f"| {label} | {summary['passed']} | {summary['failed']} | {summary['cached']} | {summary['ran']} | **{summary['percent']}%** |"
        )
    lines.append("")
    for chapter in chapters(records):
        lines.append(
            f"## {chapter['presentation_number']} · {chapter['presentation_title']} — {chapter['chapter_title']}"
        )
        lines.append("")
        lines.append("| # | Exercise | Practice | Solutions |")
        lines.append("| ---: | --- | --- | --- |")
        for exercise in chapter["exercises"]:
            lines.append(
                f"| {exercise['exercise_number']} | `{exercise['exercise_slug']}` | {cell(exercise['practice'])} | {cell(exercise['solutions'])} |"
            )
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def job_summary(records: list[dict]) -> str:
    lines = ["### HTML exercise results", ""]
    for mode, label in (("practice", "Practice"), ("solutions", "Solutions")):
        summary = summarize(records, mode)
        lines.append(f"**{label}** `{bar(summary['percent'])}` **{summary['percent']}%**")
        lines.append("")
        lines.append(
            f"{summary['passed']} passed · {summary['failed']} failed · {summary['cached']} from cache · {summary['ran']} ran now"
        )
        lines.append("")
    for presentation in presentations(chapters(records)):
        exercise_count = sum(len(chapter["exercises"]) for chapter in presentation["chapters"])
        lines.append("<details>")
        lines.append(
            f"<summary><strong>{presentation['presentation_number']} · {presentation['presentation_title']}</strong> — {exercise_count} exercises</summary>"
        )
        lines.append("")
        for chapter in presentation["chapters"]:
            lines.append(f"**{chapter['chapter_title']}**")
            lines.append("")
            lines.append("| | Exercise | Practice | Solutions |")
            lines.append("| --- | --- | --- | --- |")
            for exercise in chapter["exercises"]:
                lines.append(
                    f"| {exercise['exercise_number']} | `{exercise['exercise_slug']}` | {cell(exercise['practice'])} | {cell(exercise['solutions'])} |"
                )
            lines.append("")
        lines.append("</details>")
        lines.append("")
    lines.append("Download the **progress-reports** artifact for the full Markdown and JSON report.")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: ci_progress_report.py <ndjson-dir> <output-dir>")
    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    records = load_records(source)
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY", "")
    if not records:
        if summary_path:
            with open(summary_path, "a", encoding="utf-8") as fh:
                fh.write("### HTML exercise results\n\nNo exercise results were uploaded.\n")
        return
    output.mkdir(parents=True, exist_ok=True)
    report = {
        "summary": {mode: summarize(records, mode) for mode in ("practice", "solutions")},
        "chapters": chapters(records),
    }
    (output / "progress.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    (output / "progress-report.md").write_text(markdown_table(records), encoding="utf-8")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as fh:
            fh.write(job_summary(records))


if __name__ == "__main__":
    main()
