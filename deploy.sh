#!/bin/sh
set -e

cd "$(dirname "$0")"

# 检测可用的 compose 命令，封装为函数 dc
if command -v docker-compose >/dev/null 2>&1; then
  echo "==> Using: docker-compose (v1)"
  dc() { docker-compose "$@"; }
elif docker compose version >/dev/null 2>&1; then
  echo "==> Using: docker compose (v2)"
  dc() { docker compose "$@"; }
else
  echo "ERROR: docker-compose / docker compose not found"
  exit 1
fi

echo "==> Pulling latest image..."
dc pull

echo "==> Stopping and removing existing container..."
dc down --remove-orphans

echo "==> Starting container..."
dc up -d

echo "==> Waiting for health check..."
sleep 5

STATUS=$(docker inspect --format='{{.State.Health.Status}}' taniworks-website 2>/dev/null || echo "unknown")
echo "==> Container status: $STATUS"

dc ps
echo "==> Done. Site running at http://localhost:8011"
