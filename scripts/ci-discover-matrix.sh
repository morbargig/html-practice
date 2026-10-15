#!/usr/bin/env bash
# Emit the GitHub Actions matrix for presentation and exercise jobs.
#
# CI_DISCOVER_SCOPE:
#   root          — one row per practices/lesson-NN folder.
#   presentation  — one row per chapter folder. Requires CI_PRESENTATION_DIR.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export CI_REPO_ROOT="$ROOT"

exec python3 "$ROOT/scripts/ci_discover_matrix.py"
