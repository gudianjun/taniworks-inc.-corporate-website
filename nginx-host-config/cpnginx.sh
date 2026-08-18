#!/usr/bin/env bash
set -e
sudo cp ./tanilinks.com.conf /etc/nginx/sites-available/
sudo cp ./n8n.tanilinks.com.conf /etc/nginx/sites-available/
sudo cp ./nikkei.tanilinks.com.conf /etc/nginx/sites-available/
sudo cp ./zipurl.taniworks.jp.conf /etc/nginx/sites-available/
sudo cp ./18hotgate.com.conf /etc/nginx/sites-available/
sudo cp ./tuangou.taniworks.jp.conf /etc/nginx/sites-available/
sudo cp ./daily.taniworks.jp.conf /etc/nginx/sites-available/


sudo ln -sf /etc/nginx/sites-available/tanilinks.com.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/n8n.tanilinks.com.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/nikkei.tanilinks.com.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/zipurl.taniworks.jp.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/18hotgate.com.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/tuangou.taniworks.jp.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/daily.taniworks.jp.conf /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl reload nginx
echo "nginx 配置已更新并重新加载。"