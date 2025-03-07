#!/bin/sh
# 启动 MinIO 服务器
echo "Starting MinIO server...${MINIO_WEBUI_PORT:-9001}"


 # 配置别名
mc alias set ${MINIO_ALIAS:-workminio} http://localhost:${MINIO_WEBUI_PORT:-9001}
echo "MinIO set alias ${MINIO_ALIAS:-workminio} http://localhost:${MINIO_WEBUI_PORT:-9001}"
# 设置 REGION
mc admin config set ${MINIO_ALIAS:-workminio} server region ${MINIO_REGION:-ap-southeast-1}}
echo "MinIO set region ${MINIO_REGION:-ap-southeast-1}"

# 应用 S3 策略
# 这里以创建一个新的策略为例，实际应用中可以根据需要修改策略内容
# minio policy add workPolicy /minio/workPolicy.json
 
# echo "MinIO add policy ${MINIO_POLICY:-workPolicy}"

mc mb ${MINIO_ALIAS:-workminio}/work; 
# mc policy  ${MINIO_POLICY:-workPolicy} ${MINIO_ALIAS:-workminio}/${MINIO_BUCKET_NAME:-work}
# mc policy set  /minio/workPolicy.json ${MINIO_ALIAS:-workminio}/${MINIO_BUCKET_NAME:-work} user=${MINIO_ROOT_USER:-minioadmin}
mc admin policy create ${MINIO_ALIAS:-workminio} ${MINIO_POLICY:-workPolicy} /work-minio/work-policy.json
mc admin policy attach ${MINIO_ALIAS:-workminio} ${MINIO_POLICY:-workPolicy} --user ${MINIO_ROOT_USER:-minioadmin}

await "MinIO bucket created and policy attached." 10s

minio server /minio_data --console-address ":${MINIO_WEBUI_PORT:-9001}"
# 等待 MinIO 服务器启动
sleep 5

echo "MinIO server started."