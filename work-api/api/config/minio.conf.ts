// minio配置文件
export default {
    publicUrl: process.env.MINIO_PUBLIC_URL || "",
    endpoint: process.env.MINIO_ENDPOINT || "",
    port: Number(process.env.MINIO_PORT || 9000),
    accessKey: process.env.MINIO_ACCESS_KEY || "",
    secretKey: process.env.MINIO_SECRET_KEY || "",
    bucketName: process.env.MINIO_BUCKET_NAME || "work-demo",
    region: process.env.MINIO_REGION || "‌ap-southeast-1‌",
    useSSL: process.env.MINIO_USE_SSL === "true" || false,
};
