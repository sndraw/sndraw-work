
# 使用说明

## 1.主系统
### 1.1.新建.env文件，用于主系统启动
> 在项目根目录下创建一个名为`.env`的文件，并根据`.env.example`中的示例进行配置。
> `.env`文件中包含了一些环境变量，用于配置数据库、Redis、MinIO等服务。

### 1.2.Minio配置
> Minio是一个分布式对象存储系统，可以用来存储静态资源、备份数据等。
> 在`.env`文件中，需要配置MinIO的相关信息，例如上传URL、存储桶名称等。

> 配置说明：[MinIO配置说明](./MINIO.md)

> 参考文档：[MinIO官方文档](https://docs.min.io/)


### 1.3.启动主系统
> 在项目根目录下运行以下命令来启动服务：
> ```
> docker-compose up -d
> ```

### 2.附属系统（如不需要可以忽略）
### 2.1.新建.env.middleware文件，用于附属系统启动
> 在项目根目录下创建一个名为`.env.middleware`的文件，并根据`.env.middleware.example`中的示例进行配置。
> `.env.middleware`文件中包含了一些环境变量，用于配置附属系统的服务，如Ollama、LightRAG等。

### 2.2.启动附属系统
> 在项目根目录下运行以下命令来启动服务：
> ```
> docker compose -f docker-compose.middleware.yaml --env-file .env.middleware up -d
> ```
