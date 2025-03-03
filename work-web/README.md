# 部署文档

## 开发环境

### 1. 配置.env.local
**示例文件**：`.env.expample`

```
UMI_APP_PROXY_API=http://localhost:5001
```

### 2.安装全局依赖
```
npm config set registry https://registry.npmmirror.com

npm install pnpm -g
```

### 3.进入项目根目录，安装项目依赖

```
pnpm install
```

### 4.执行命令

```
pnpm dev
```

## 生产环境

### 1. 配置.env

```
UMI_APP_PROXY_API=
```

### 2. 执行命令

```
pnpm build
```

# Docker打包
### 1.登录镜像仓库（可选）
```
docker login -u username <IP:port>/<repository>
```
### 2.构建镜像

#### make命令（参数可选）
注：Makefile中定义了build-push-all目标，可以一次性构建并推送镜像

```
make build-push-all REGISTRY_URL=<IP:port>/<repository> IMAGE_NAME=work-api IMAGE_VERISON=1.0.0

```


# 开发文档

[Umi Max 简介](https://umijs.org/docs/max/introduce)
