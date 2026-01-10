# 宿主机 Nginx 配置说明

## 配置文件

此目录包含用于宿主机Nginx的配置文件：

1. `tanilinks.com.conf` - 主网站配置
2. `n8n.tanilinks.com.conf` - n8n服务配置

## 安装步骤

### 1. 复制配置文件到宿主机Nginx

```bash
# 复制配置文件到 Nginx 配置目录
sudo cp nginx-host-config/tanilinks.com.conf /etc/nginx/sites-available/
sudo cp nginx-host-config/n8n.tanilinks.com.conf /etc/nginx/sites-available/

# 创建符号链接启用配置
sudo ln -s /etc/nginx/sites-available/tanilinks.com.conf /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/n8n.tanilinks.com.conf /etc/nginx/sites-enabled/
```

### 2. 测试配置

```bash
sudo nginx -t
```

### 3. 重启Nginx

```bash
sudo systemctl reload nginx
# 或
sudo systemctl restart nginx
```

## 端口配置说明

当前配置：

- **宿主机 Nginx**: 监听 80 端口（对外）
- **TaniWorks 容器**: 内部使用 80 端口（通过 docker-compose 映射）
- **n8n 容器**: 内部使用 5678 端口，映射到宿主机 8010 端口

## 需要修改 docker-compose.yml

由于宿主机Nginx已经占用80端口，需要修改TaniWorks容器的端口映射：

```yaml
services:
  taniworks-website:
    ports:
      - "8080:80"  # 改为映射到宿主机的8080端口
```

然后在 `tanilinks.com.conf` 中：

```nginx
location / {
    proxy_pass http://127.0.0.1:8080;  # 代理到容器的8080端口
    ...
}
```

## Cloudflare SSL 设置

如果使用 Cloudflare：

1. 在 Cloudflare 仪表板中，设置 SSL/TLS 模式为 **Flexible**
2. 这样 Cloudflare 会使用 HTTPS 连接到客户端，使用 HTTP 连接到您的服务器

## 防火墙设置

确保服务器防火墙允许以下端口：

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

## 故障排查

### 检查 Nginx 状态
```bash
sudo systemctl status nginx
```

### 查看 Nginx 日志
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### 检查端口占用
```bash
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :8080
sudo netstat -tlnp | grep :8010
```

### 检查容器状态
```bash
docker ps
docker logs taniworks-website
docker logs n8nio/n8n
```
