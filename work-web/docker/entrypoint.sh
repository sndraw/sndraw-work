#!/bin/bash

set -e

cd /app

# 如果不存在dist包，则执行build
if [ ! -d "/app/dist" ]; then
  npm run build
  cp -r /app/dist/* /usr/share/nginx/html/
fi

# 启动nginx
nginx -g 'daemon off;'