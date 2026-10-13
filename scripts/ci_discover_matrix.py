#!/usr/bin/env python3
"""Emit a GitHub Actions matrix for the HTML practice folders.

CI_DISCOVER_SCOPE:
  root            — one row per presentation and mode (practice, solutions).
  presentation    — one row per exercise. Requires CI_PRESENTATION_DIR and CI_MODE.

Writes the matrix to $GITHUB_OUTPUT, or prints it when that variable is unset.
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path

PRESENTATION_RE = re.compile(r"^(\d{2})-")
CHAPTER_RE = re.compile(r"^(\d{2})-")
EXERCISE_RE = re.compile(r"^(\d{2})-")

PRESENTATION_TITLES = {
    "01-setting-up-html-development-environment": "Setting up HTML",
    "02-introduction-to-html": "Introduction to HTML",
}

MODES = ("practice", "solutions")


def repo_root() -> Path:
    for key in ("GITHUB_WORKSPACE", "CI_REPO_ROOT"):
        raw = os.environ.get(key)
        if raw:
            return Path(raw).resolve()
    return Path(__file__).resolve().parents[1]


def humanize(slug: str) -> str:
    name = re.sub(r"^\d+-", "", slug).replace("-", " ").strip()
    if not name:
        return slug
    return name[:1].upper() + name[1:]


def presentation_title(folder: str) -> str:
    return PRESENTATION_TITLES.get(folder, humanize(folder))


def emit_matrix(include: list[dict[str, str]]) -> None:
    payload = json.dumps({"include": include}, ensure_ascii=False)
    out_file = os.environ.get("GITHUB_OUTPUT")
    if out_file:
        with open(out_file, "a", encoding="utf-8") as fh:
            fh.write("matrix<<MATRIX_JSON_EOF\n")
            fh.write(payload)
            fh.write("\nMATRIX_JSON_EOF\n")
    else:
        print(payload)


def presentations(root: Path) -> list[Path]:
    found = []
    for path in sorted(root.iterdir()):
        if path.is_dir() and PRESENTATION_RE.match(path.name) and (path / "README.md").is_file():
            found.append(path)
    return found


def scope_root(root: Path) -> list[dict[str, str]]:
    include: list[dict[str, str]] = []
    for presentation in presentations(root):
        number = PRESENTATION_RE.match(presentation.name).group(1)
        title = presentation_title(presentation.name)
        for mode in MODES:
            include.append(
                {
                    "key": f"{number}__{mode}",
                    "presentation_dir": presentation.name,
                    "mode": mode,
                    "job_title": f"{number} · {title} · {mode}",
                }
            )
    if not include:
        raise SystemExit("No presentation folders found.")
    return include


def scope_presentation(root: Path, presentation_dir: str, mode: str) -> list[dict[str, str]]:
    if mode not in MODES:
        raise SystemExit(f"CI_MODE must be practice or solutions, got {mode!r}")
    presentation = root / presentation_dir
    if not presentation.is_dir():
        raise SystemExit(f"Presentation folder not found: {presentation_dir}")
    number = PRESENTATION_RE.match(presentation_dir)
    if not number:
        raise SystemExit(f"Presentation folder must start with NN-: {presentation_dir}")
    presentation_number = number.group(1)
    presentation_label = presentation_title(presentation_dir)
    include: list[dict[str, str]] = []
    for chapter in sorted(p for p in presentation.iterdir() if p.is_dir()):
        chapter_match = CHAPTER_RE.match(chapter.name)
        if not chapter_match:
            continue
        for exercise in sorted(p for p in chapter.iterdir() if p.is_dir()):
            exercise_match = EXERCISE_RE.match(exercise.name)
            test_file = exercise / "test.js"
            if not exercise_match or not test_file.is_file():
                continue
            exercise_dir = f"{presentation_dir}/{chapter.name}/{exercise.name}"
            include.append(
                {
                    "key": f"{presentation_number}__{chapter.name}__{exercise.name}__{mode}",
                    "presentation_dir": presentation_dir,
                    "presentation_number": presentation_number,
                    "presentation_title": presentation_label,
                    "chapter_dir": chapter.name,
                    "chapter_number": chapter_match.group(1),
                    "chapter_title": humanize(chapter.name),
                    "exercise_slug": exercise.name,
                    "exercise_number": exercise_match.group(1),
                    "exercise_dir": exercise_dir,
                    "solution_dir": f"solutions/{exercise_dir}",
                    "test_file": f"{exercise_dir}/test.js",
                    "mode": mode,
                    "job_title": (
                        f"{presentation_number} › {humanize(chapter.name)} › {humanize(exercise.name)}"
                    ),
                }
            )
    if not include:
        raise SystemExit(f"No exercises found in {presentation_dir}")
    return include


def main() -> None:
    scope = os.environ.get("CI_DISCOVER_SCOPE", "root").strip().lower()
    root = repo_root()
    if scope == "root":
        include = scope_root(root)
    elif scope == "presentation":
        presentation_dir = os.environ.get("CI_PRESENTATION_DIR", "").strip()
        mode = os.environ.get("CI_MODE", "").strip()
        if not presentation_dir or not mode:
            raise SystemExit("presentation scope requires CI_PRESENTATION_DIR and CI_MODE")
        include = scope_presentation(root, presentation_dir, mode)
    else:
        raise SystemExit(f"Invalid CI_DISCOVER_SCOPE={scope!r}")
    emit_matrix(include)


if __name__ == "__main__":
    main()
