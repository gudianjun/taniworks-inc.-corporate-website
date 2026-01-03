<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# TaniWorks Inc. - Corporate Website

TaniWorks株式会社のコーポレートウェブサイト - テクノロジーと金融の融合

[![Docker](https://img.shields.io/badge/docker-automated-blue)](https://hub.docker.com/r/your-username/taniworks-website)
[![Build Status](https://github.com/your-username/taniworks-website/workflows/Build%20and%20Push%20Docker%20Image/badge.svg)](https://github.com/your-username/taniworks-website/actions)

---

## 📋 目次

- [本地开发](#-本地开发)
- [Docker 部署](#-docker-部署)
- [技术栈](#-技术栈)
- [项目结构](#-项目结构)

---

## 🚀 本地开发

### 前置要求

- Node.js 18+
- npm 或 yarn

### 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/your-username/taniworks-website.git
cd taniworks-website

# 2. 安装依赖
npm install

# 3. 配置环境变量（可选）
cp .env.local.example .env.local
# 编辑 .env.local 设置 GEMINI_API_KEY

# 4. 启动开发服务器
npm run dev

# 5. 访问网站
# 打开浏览器访问 http://localhost:3000
```

### 构建生产版本

```bash
npm run build
npm run preview
```

---

## 🐳 Docker 部署

本项目支持完全自动化的 Docker 部署流程。

### 快速部署（远程服务器）

```bash
# 下载 docker-compose.yml
wget https://raw.githubusercontent.com/your-username/taniworks-website/main/docker-compose.yml

# 启动服务
docker-compose up -d

# 查看状态
docker-compose ps
```

### 更新部署

```bash
# 拉取最新镜像并重启
docker-compose pull && docker-compose up -d
```

### 详细部署文档

查看 [DEPLOYMENT.md](DEPLOYMENT.md) 了解完整的部署指南，包括：
- GitHub Actions 自动化构建配置
- Docker Hub 设置
- 远程服务器部署步骤
- 域名和 HTTPS 配置
- 故障排查

---

## 🛠️ 技术栈

- **前端框架**: React 19
- **构建工具**: Vite 6
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **容器化**: Docker + Nginx
- **CI/CD**: GitHub Actions

---

## 📁 项目结构

```
taniworks-website/
├── components/          # React 组件
├── .github/
│   └── workflows/      # GitHub Actions 工作流
├── App.tsx             # 主应用组件
├── index.tsx           # 应用入口
├── translations.ts     # 国际化翻译
├── Dockerfile          # Docker 镜像构建文件
├── docker-compose.yml  # Docker Compose 配置
├── vite.config.ts      # Vite 配置
└── DEPLOYMENT.md       # 部署文档
```

---

## 📚 相关链接

- **AI Studio**: https://ai.studio/apps/drive/1ib9LsM-ugY8Wlgb95q_70J4qAjPDGQkl
- **部署文档**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Docker Hub**: https://hub.docker.com/r/your-username/taniworks-website

---

## 📄 License

Copyright © 2024 TaniWorks Inc. All rights reserved.



wget https://github.com/gudianjun/taniworks-inc.-corporate-website/blob/main/docker-compose.yml
     https://github.com/gudianjun/taniworks-inc.-corporate-website.git