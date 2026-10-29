#!/usr/bin/env python3
"""Emit a GitHub Actions matrix for the HTML practice folders.

CI_DISCOVER_SCOPE:
  root            — one row per practices/lesson-NN folder.
  presentation    — one row per chapter folder. Requires CI_PRESENTATION_DIR.

Writes the matrix to $GITHUB_OUTPUT, or prints it when that variable is unset.
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path

LESSON_RE = re.compile(r"^lesson-(\d{2})$")
CHAPTER_RE = re.compile(r"^(\d{2})-")
EXERCISE_RE = re.compile(r"^(\d{2})-")

LESSON_TITLES = {
    "lesson-01": "Setting up HTML",
    "lesson-02": "Introduction to HTML",
}

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


def lesson_title(folder: str) -> str:
    if folder in LESSON_TITLES:
        return LESSON_TITLES[folder]
    match = LESSON_RE.match(folder)
    if match:
        return f"Lesson {match.group(1)}"
    return humanize(folder)


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


def lessons(root: Path) -> list[Path]:
    practices = root / "practices"
    if not practices.is_dir():
        return []
    found = []
    for path in sorted(practices.iterdir()):
        if path.is_dir() and LESSON_RE.match(path.name) and (path / "README.md").is_file():
            found.append(path)
    return found


def scope_root(root: Path) -> list[dict[str, str]]:
    include: list[dict[str, str]] = []
    for lesson in lessons(root):
        number = LESSON_RE.match(lesson.name).group(1)
        title = lesson_title(lesson.name)
        include.append(
            {
                "key": f"{number}__presentation",
                "presentation_dir": f"practices/{lesson.name}",
                "job_title": f"{number} · {title}",
            }
        )
    if not include:
        raise SystemExit("No lesson folders found in practices/.")
    return include


def scope_presentation(root: Path, presentation_dir: str) -> list[dict[str, str]]:
    presentation = root / presentation_dir
    if not presentation.is_dir():
        raise SystemExit(f"Lesson folder not found: {presentation_dir}")
    number = LESSON_RE.match(presentation.name)
    if not number:
        raise SystemExit(f"Lesson folder must be named lesson-NN: {presentation_dir}")
    presentation_number = number.group(1)
    presentation_label = lesson_title(presentation.name)
    include: list[dict[str, str]] = []
    for chapter in sorted(p for p in presentation.iterdir() if p.is_dir()):
        chapter_match = CHAPTER_RE.match(chapter.name)
        if not chapter_match:
            continue
        has_exercise = any(
            EXERCISE_RE.match(exercise.name) and (exercise / "test.js").is_file()
            for exercise in chapter.iterdir()
            if exercise.is_dir()
        )
        if not has_exercise:
            continue
        include.append(
            {
                "key": f"{presentation_number}__{chapter.name}",
                "presentation_dir": presentation_dir,
                "presentation_number": presentation_number,
                "presentation_title": presentation_label,
                "chapter_dir": chapter.name,
                "chapter_number": chapter_match.group(1),
                "chapter_title": humanize(chapter.name),
                "chapter_path": f"{presentation_dir}/{chapter.name}",
                "solution_path": f"solutions/{presentation_dir}/{chapter.name}",
                "job_title": f"{chapter_match.group(1)} · {humanize(chapter.name)}",
            }
        )
    if not include:
        raise SystemExit(f"No chapters with exercises found in {presentation_dir}")
    return include


def main() -> None:
    scope = os.environ.get("CI_DISCOVER_SCOPE", "root").strip().lower()
    root = repo_root()
    if scope == "root":
        include = scope_root(root)
    elif scope == "presentation":
        presentation_dir = os.environ.get("CI_PRESENTATION_DIR", "").strip()
        if not presentation_dir:
            raise SystemExit("presentation scope requires CI_PRESENTATION_DIR")
        include = scope_presentation(root, presentation_dir)
    else:
        raise SystemExit(f"Invalid CI_DISCOVER_SCOPE={scope!r}")
    emit_matrix(include)


if __name__ == "__main__":
    main()
