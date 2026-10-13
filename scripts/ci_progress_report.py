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


def group_rows(records: list[dict]) -> list[dict]:
    groups: dict[tuple, list] = defaultdict(list)
    for row in records:
        key = (
            row.get("mode", ""),
            row.get("presentation_number", ""),
            row.get("presentation_title", ""),
            row.get("chapter_number", ""),
            row.get("chapter_title", ""),
        )
        groups[key].append(row)
    ordered = []
    for key in sorted(groups):
        mode, presentation_number, presentation_title, chapter_number, chapter_title = key
        exercises = sorted(groups[key], key=lambda row: (row.get("exercise_number", ""), row.get("exercise_slug", "")))
        ordered.append(
            {
                "mode": mode,
                "presentation_number": presentation_number,
                "presentation_title": presentation_title,
                "chapter_number": chapter_number,
                "chapter_title": chapter_title,
                "exercises": exercises,
            }
        )
    return ordered


def markdown_table(records: list[dict]) -> str:
    lines = [
        "# HTML exercise progress",
        "",
        "| Mode | Passed | Failed | Cached | Ran now | Progress |",
        "| --- | ---: | ---: | ---: | ---: | ---: |",
    ]
    for mode in ("practice", "solutions"):
        summary = summarize(records, mode)
        lines.append(
            f"| {mode} | {summary['passed']} | {summary['failed']} | {summary['cached']} | {summary['ran']} | **{summary['percent']}%** |"
        )
    lines.append("")
    for group in group_rows(records):
        lines.append(
            f"## {group['presentation_number']} · {group['presentation_title']} — {group['mode']} — {group['chapter_title']}"
        )
        lines.append("")
        lines.append("| # | Exercise | Status | How | Notes |")
        lines.append("| ---: | --- | --- | --- | --- |")
        for exercise in group["exercises"]:
            note = (exercise.get("message") or "").replace("|", "\\|")
            lines.append(
                f"| {exercise.get('exercise_number', '')} | `{exercise.get('exercise_slug', '')}` | **{exercise.get('status', '')}** | {exercise.get('source', '')} | {note} |"
            )
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def job_summary(records: list[dict]) -> str:
    lines = ["### HTML exercise results", ""]
    for mode in ("practice", "solutions"):
        summary = summarize(records, mode)
        label = "Practice pages" if mode == "practice" else "Reference solutions"
        lines.append(f"**{label}** `{bar(summary['percent'])}` **{summary['percent']}%**")
        lines.append("")
        lines.append(
            f"{summary['passed']} passed · {summary['failed']} failed · {summary['cached']} from cache · {summary['ran']} ran now"
        )
        lines.append("")
    for group in group_rows(records):
        lines.append(
            f"#### {group['presentation_number']} · {group['presentation_title']} — {group['chapter_title']} ({group['mode']})"
        )
        lines.append("")
        lines.append("| | Exercise | Status | How |")
        lines.append("| --- | --- | --- | --- |")
        for exercise in group["exercises"]:
            lines.append(
                f"| {exercise.get('exercise_number', '')} | `{exercise.get('exercise_slug', '')}` | {icon(exercise.get('status', ''))} **{exercise.get('status', '')}** | {exercise.get('source', '')} |"
            )
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
        "groups": group_rows(records),
    }
    (output / "progress.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    (output / "progress-report.md").write_text(markdown_table(records), encoding="utf-8")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as fh:
            fh.write(job_summary(records))


if __name__ == "__main__":
    main()
