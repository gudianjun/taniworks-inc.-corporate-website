#!/bin/bash
set -e

COMPOSE_FILE="$(dirname "$0")/docker-compose.yml"

echo "==> Pulling latest image..."
docker compose -f "$COMPOSE_FILE" pull

echo "==> Stopping and removing existing container..."
docker compose -f "$COMPOSE_FILE" down --remove-orphans

echo "==> Starting container..."
docker compose -f "$COMPOSE_FILE" up -d

echo "==> Waiting for health check..."
sleep 5

STATUS=$(docker inspect --format='{{.State.Health.Status}}' taniworks-website 2>/dev/null || echo "unknown")
echo "==> Container status: $STATUS"

docker compose -f "$COMPOSE_FILE" ps
echo "==> Done. Site running at http://localhost:8011"
