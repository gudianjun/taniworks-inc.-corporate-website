#!/bin/sh

# 启动 FastAPI 后端（后台运行）
cd /app/backend
uvicorn app.main:app --host 127.0.0.1 --port 8000 &

# 等待后端启动
sleep 2

# 启动 Nginx（前台运行）
nginx -g "daemon off;"
