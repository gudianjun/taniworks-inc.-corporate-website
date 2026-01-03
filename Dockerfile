# 多阶段构建 - 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package 文件
COPY package.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 构建生产版本
RUN npm run build

# 生产阶段 - 使用 Nginx + Python
FROM nginx:alpine

# 安装 Python 和 pip
RUN apk add --no-cache python3 py3-pip && \
    python3 -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

# 复制后端代码和依赖
COPY backend/requirements.txt /app/backend/
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

COPY backend /app/backend

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 从构建阶段复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 创建数据目录
RUN mkdir -p /app/data

# 复制启动脚本
COPY start.sh /start.sh
RUN chmod +x /start.sh

# 暴露端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

# 启动脚本
CMD ["/start.sh"]
