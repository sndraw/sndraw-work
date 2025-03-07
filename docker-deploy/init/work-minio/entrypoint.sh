#!/bin/sh
 
# 启动 MinIO 服务器
echo "Starting MinIO server...${MINIO_WEBUI_PORT:-9001}"
minio server /minio_data --console-address ":${MINIO_WEBUI_PORT:-9001}"
# 等待 MinIO 服务器启动
sleep 5

echo "MinIO server started."
 
# 设置 REGION
mc admin config set minio server region ${MINIO_REGION:-ap-southeast-1}}
echo "MinIO set region ${MINIO_REGION:-ap-southeast-1}"

# 应用 S3 策略
# 这里以创建一个新的策略为例，实际应用中可以根据需要修改策略内容
minio policy add work-policy /minio/work-policy.json
 
echo "MinIO add policy work-policy"
 
# 让脚本保持运行，等待 MinIO 服务器运行
wait