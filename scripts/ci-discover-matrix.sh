#!/usr/bin/env bash
# Emit the GitHub Actions matrix for presentation and exercise jobs.
#
# CI_DISCOVER_SCOPE:
#   root          — one row per presentation folder.
#   presentation  — one row per exercise. Requires CI_PRESENTATION_DIR.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export CI_REPO_ROOT="$ROOT"

exec python3 "$ROOT/scripts/ci_discover_matrix.py"
