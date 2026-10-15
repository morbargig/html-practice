#!/usr/bin/env python3
"""Emit a GitHub Actions matrix for the HTML practice folders.

CI_DISCOVER_SCOPE:
  root            — one row per presentation folder.
  presentation    — one row per chapter folder. Requires CI_PRESENTATION_DIR.

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
        include.append(
            {
                "key": f"{number}__presentation",
                "presentation_dir": presentation.name,
                "job_title": f"{number} · {title}",
            }
        )
    if not include:
        raise SystemExit("No presentation folders found.")
    return include


def scope_presentation(root: Path, presentation_dir: str) -> list[dict[str, str]]:
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
                "job_title": humanize(chapter.name),
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
