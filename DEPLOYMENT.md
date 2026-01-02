# 🚀 Docker 自动化部署指南

## 📋 概述

本项目采用完全自动化的 Docker 部署流程：
- 推送代码到 GitHub → 自动构建 Docker 镜像 → 推送到 Docker Hub → 远程服务器一键更新

---

## 🔧 前置准备

### 1. 创建 Docker Hub 账号
访问 [Docker Hub](https://hub.docker.com/) 注册账号

### 2. 配置 GitHub Secrets

在你的 GitHub 仓库中设置以下 Secrets：

1. 进入仓库的 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret** 添加：

| Secret 名称 | 说明 | 示例值 |
|------------|------|--------|
| `DOCKER_USERNAME` | Docker Hub 用户名 | `your-username` |
| `DOCKER_PASSWORD` | Docker Hub 密码或 Access Token | `dckr_pat_xxx...` |

**推荐使用 Access Token（更安全）：**
- 登录 Docker Hub → Account Settings → Security → New Access Token
- 权限选择：Read, Write, Delete
- 复制生成的 token 作为 `DOCKER_PASSWORD`

### 3. 修改镜像名称

编辑 [.github/workflows/docker-publish.yml](.github/workflows/docker-publish.yml)：

```yaml
env:
  DOCKER_IMAGE: your-dockerhub-username/taniworks-website  # 修改为你的用户名
```

同时修改 [docker-compose.yml](docker-compose.yml)：

```yaml
services:
  taniworks-website:
    image: your-dockerhub-username/taniworks-website:latest  # 修改为你的用户名
```

---

## 🎯 自动化发布流程

### 触发构建

提交代码到 `main` 或 `master` 分支会自动触发构建：

```bash
git add .
git commit -m "Update website"
git push origin main
```

### 查看构建状态

1. 进入 GitHub 仓库的 **Actions** 标签
2. 查看最新的 workflow 运行状态
3. 构建成功后，镜像会自动推送到 Docker Hub

### 镜像标签说明

| 标签 | 说明 | 示例 |
|------|------|------|
| `latest` | 最新的 main/master 分支版本 | `latest` |
| `main` | main 分支最新构建 | `main` |
| `v1.0.0` | 版本标签（需打 git tag） | `v1.0.0` |
| `main-abc1234` | 带 commit SHA 的标签 | `main-abc1234` |

---

## 🖥️ 远程服务器部署

### 首次部署

在你的远程服务器上执行：

```bash
# 1. 安装 Docker 和 Docker Compose（如果还没安装）
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 2. 创建项目目录
mkdir -p ~/taniworks-website
cd ~/taniworks-website

# 3. 下载 docker-compose.yml（或手动创建）
wget https://raw.githubusercontent.com/your-repo/taniworks-website/main/docker-compose.yml
# 或者手动创建并粘贴内容

# 4. 启动服务
docker-compose up -d

# 5. 查看运行状态
docker-compose ps
docker-compose logs -f
```

### 更新部署（推荐方式）

每次 GitHub Actions 构建完成后，在服务器上执行：

```bash
cd ~/taniworks-website

# 拉取最新镜像并重启
docker-compose pull && docker-compose up -d

# 查看日志确认更新成功
docker-compose logs -f --tail=50
```

### 一键更新脚本

创建更新脚本 `update.sh`：

```bash
#!/bin/bash
cd ~/taniworks-website
echo "📥 拉取最新镜像..."
docker-compose pull
echo "🔄 重启容器..."
docker-compose up -d
echo "✅ 更新完成！"
docker-compose ps
```

使用方法：

```bash
chmod +x update.sh
./update.sh
```

---

## 🔍 常用命令

### 查看运行状态

```bash
# 查看容器状态
docker-compose ps

# 查看实时日志
docker-compose logs -f

# 查看最近 100 行日志
docker-compose logs --tail=100

# 查看容器资源使用情况
docker stats
```

### 容器管理

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 完全清理并重新部署
docker-compose down
docker system prune -a  # 清理所有未使用的镜像
docker-compose up -d
```

### 健康检查

```bash
# 检查网站是否正常
curl http://localhost/health

# 或访问网站
curl http://localhost
```

---

## 🌐 域名配置

### 使用 Nginx 反向代理（推荐）

如果要使用域名访问，可以在服务器上配置 Nginx 反向代理：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 配置 HTTPS（使用 Let's Encrypt）

```bash
# 安装 certbot
sudo apt install certbot python3-certbot-nginx

# 获取 SSL 证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

---

## 🐛 故障排查

### 构建失败

1. 检查 GitHub Actions 日志
2. 确认 Docker Hub Secrets 配置正确
3. 验证 Dockerfile 语法

### 容器无法启动

```bash
# 查看详细错误日志
docker-compose logs

# 检查端口占用
sudo lsof -i :80

# 检查镜像是否拉取成功
docker images | grep taniworks
```

### 网站无法访问

```bash
# 检查容器是否运行
docker-compose ps

# 检查健康检查状态
docker inspect taniworks-website | grep -A 10 Health

# 检查防火墙
sudo ufw status
sudo ufw allow 80/tcp
```

---

## 📊 监控建议

### 设置自动更新检查（可选）

在服务器上创建定时任务，每天自动检查并更新：

```bash
# 编辑 crontab
crontab -e

# 添加以下行（每天凌晨 2 点执行）
0 2 * * * cd ~/taniworks-website && docker-compose pull && docker-compose up -d >> ~/update.log 2>&1
```

### 监控工具推荐

- **Portainer**: Docker 可视化管理界面
- **Watchtower**: 自动监控并更新 Docker 容器
- **Uptime Kuma**: 网站监控和告警

---

## 🔐 安全建议

1. **不要在镜像中包含敏感信息**（API Keys 等）
2. **定期更新基础镜像**
3. **使用非 root 用户运行容器**（如需要可修改 Dockerfile）
4. **启用 HTTPS**
5. **限制容器资源使用**

在 docker-compose.yml 中添加资源限制：

```yaml
services:
  taniworks-website:
    # ... 其他配置
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          memory: 256M
```

---

## 📚 相关链接

- [Docker Hub Repository](https://hub.docker.com/r/your-username/taniworks-website)
- [GitHub Repository](https://github.com/your-username/taniworks-website)
- [Docker 官方文档](https://docs.docker.com/)
- [GitHub Actions 文档](https://docs.github.com/actions)

---

## 💡 高级功能

### 多环境部署

如需要 staging 和 production 环境：

1. 修改 workflow 添加环境变量
2. 使用不同的镜像标签
3. 在服务器上使用不同的 docker-compose 文件

### 自动回滚

如果新版本有问题，快速回滚到上一个版本：

```bash
# 查看可用的镜像标签
docker images your-username/taniworks-website

# 修改 docker-compose.yml 指定旧版本
# image: your-username/taniworks-website:v1.0.0

# 重新部署
docker-compose up -d
```

---

**🎉 完成！现在你只需要推送代码，一切都会自动完成！**
