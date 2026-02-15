#!/usr/bin/env bash
set -euo pipefail

# Deployment script for the static Global Festivals Calendar app.
# Usage examples:
#   ./deploy.sh --target-dir /var/www/festival-calendar
#   ./deploy.sh --host user@example.com --remote-dir /var/www/festival-calendar

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$PROJECT_ROOT/dist"

TARGET_DIR=""
REMOTE_HOST=""
REMOTE_DIR=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --target-dir)
      TARGET_DIR="${2:-}"
      shift 2
      ;;
    --host)
      REMOTE_HOST="${2:-}"
      shift 2
      ;;
    --remote-dir)
      REMOTE_DIR="${2:-}"
      shift 2
      ;;
    -h|--help)
      sed -n '1,25p' "$0"
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

mkdir -p "$BUILD_DIR"
cp "$PROJECT_ROOT/index.html" "$PROJECT_ROOT/styles.css" "$PROJECT_ROOT/app.js" "$BUILD_DIR/"

echo "Build artifacts prepared in $BUILD_DIR"

if [[ -n "$TARGET_DIR" ]]; then
  mkdir -p "$TARGET_DIR"
  cp -f "$BUILD_DIR"/* "$TARGET_DIR"/
  echo "Deployed locally to $TARGET_DIR"
fi

if [[ -n "$REMOTE_HOST" || -n "$REMOTE_DIR" ]]; then
  if [[ -z "$REMOTE_HOST" || -z "$REMOTE_DIR" ]]; then
    echo "Both --host and --remote-dir are required for remote deployment." >&2
    exit 1
  fi

  if ! command -v rsync >/dev/null 2>&1; then
    echo "rsync is required for remote deployment." >&2
    exit 1
  fi

  rsync -av --delete "$BUILD_DIR/" "$REMOTE_HOST:$REMOTE_DIR/"
  echo "Deployed remotely to $REMOTE_HOST:$REMOTE_DIR"
fi

if [[ -z "$TARGET_DIR" && -z "$REMOTE_HOST" ]]; then
  echo "No deployment target provided. Build only completed."
fi
