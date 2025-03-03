#!/bin/bash

set -e

cd /app

# 如果不存在dist包，则执行build
if [ ! -d "/app/dist" ]; then
  pnpm build
fi

npm run deploy


pm2 logs --timestamp --lines 100