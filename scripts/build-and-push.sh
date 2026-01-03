#!/bin/bash

# 本地构建并推送 Docker 镜像到 Docker Hub
# 使用方法: ./scripts/build-and-push.sh

set -e

DOCKER_IMAGE="gudianjun/taniworks-website"

echo "🔐 登录 Docker Hub..."
docker login

echo "🏗️  构建 Docker 镜像..."
# 使用传统的 docker build，避免 buildx 权限问题
DOCKER_BUILDKIT=0 docker build -t ${DOCKER_IMAGE}:latest .

echo "📤 推送镜像到 Docker Hub..."
docker push ${DOCKER_IMAGE}:latest

echo "✅ 完成！镜像已推送到 Docker Hub"
echo ""
echo "🌐 镜像地址: https://hub.docker.com/r/${DOCKER_IMAGE}"
echo ""
echo "现在可以在远程服务器上运行:"
echo "  sudo docker-compose pull && sudo docker-compose up -d"
