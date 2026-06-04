#!/bin/bash
set -e

cd "$(dirname "$0")"

# 兼容 docker compose (v2) 和 docker-compose (v1)
if docker compose version &>/dev/null; then
  DC="docker compose"
else
  DC="docker-compose"
fi

echo "==> Using: $DC"

echo "==> Pulling latest image..."
$DC pull

echo "==> Stopping and removing existing container..."
$DC down --remove-orphans

echo "==> Starting container..."
$DC up -d

echo "==> Waiting for health check..."
sleep 5

STATUS=$(docker inspect --format='{{.State.Health.Status}}' taniworks-website 2>/dev/null || echo "unknown")
echo "==> Container status: $STATUS"

$DC ps
echo "==> Done. Site running at http://localhost:8011"
