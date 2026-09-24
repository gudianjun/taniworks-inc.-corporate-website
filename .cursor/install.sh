#!/usr/bin/env bash
set -euo pipefail

# Idempotent Cloud Agent bootstrap for the TaniWorks corporate website.
# Frontend: React 19 + Vite 6 (dev server on port 3000)
# Backend:  FastAPI + Uvicorn + SQLite (port 8000)

cd "$(dirname "$0")/.."

# System dependency required to create Python virtual environments.
# The default image ships Python 3.12 but not the venv module.
if ! dpkg -s python3.12-venv >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo apt-get install -y -qq python3.12-venv
fi

# Frontend dependencies.
npm install

# Backend virtual environment + dependencies.
if [ ! -d backend/.venv ]; then
  python3 -m venv backend/.venv
fi
backend/.venv/bin/pip install --upgrade pip -q
backend/.venv/bin/pip install -r backend/requirements.txt

echo "Environment bootstrap complete."
