# 使用 Node.js 官方基础镜像进行构建
FROM  node:22 AS builder
WORKDIR /app


# 复制项目文件到工作目录
COPY package.json ./package.json

RUN npm install -g pnpm

RUN npm install ts-node -g

RUN npm install pm2 -g

RUN pnpm install

# 复制项目文件到工作目录
COPY . .

COPY ./docker/entrypoint.sh /entrypoint.sh


ENTRYPOINT [ "/bin/bash","/entrypoint.sh" ]
# 声明运行时容器提供服务的端口
EXPOSE 80