import { Client } from "minio";
import minioConfig from "@/config/minio.conf"
import { ObjectMetaData } from "minio/dist/main/internal/type";
import mimeTypes from "mime-types";
import { Context } from "koa";

const minioClient = new Client({
  endPoint: minioConfig.endpoint,
  port: minioConfig.port,
  accessKey: minioConfig.accessKey,
  secretKey: minioConfig.secretKey,
  region: minioConfig.region,
  useSSL: minioConfig.useSSL,
});


console.log("minio连接成功:", minioConfig.endpoint, minioConfig.port);

const createMinoClient = (
  url: string | undefined | null
) => {
  // 获取endpoint和port
  const hostObj = {
    endpoint: minioConfig.endpoint,
    port: Number(minioConfig.port) || undefined
  }

  if (minioConfig.publicUrl) {
    try {
      const publicURL = new URL(minioConfig.publicUrl)
      if (publicURL) {
        hostObj.endpoint = publicURL.hostname;
        hostObj.port = Number(publicURL?.port) || undefined
      }
    } catch (error) {
      console.error("Invalid public URL:", minioConfig.publicUrl);
    }
  }
  if (!minioConfig.publicUrl && url) {
    try {
      const publicURL = new URL(url)
      if (publicURL) {
        // 使用传入的url来设置endpoint
        hostObj.endpoint = publicURL.hostname;
        // 使用默认端口设置port
        hostObj.port = Number(minioConfig?.port) || undefined
      }
    } catch (error) {
      console.error("Invalid URL:", url);
    }
  }
  console.log(hostObj)
  return new Client({
    endPoint: hostObj?.endpoint,
    port: hostObj?.port,
    accessKey: minioConfig.accessKey,
    secretKey: minioConfig.secretKey,
    region: minioConfig.region,
    useSSL: minioConfig.useSSL,
  })
};


export const bucketName = minioConfig.bucketName;

export const getObjectStream = async (objectName: string) => {
  try {
    if (!objectName) {
      throw new Error("objectName不能为空");
    }
    const stream = await minioClient.getObject(bucketName, objectName);
    return stream;
  } catch (error) {
    console.error("获取对象流失败:", error);
    throw error;
  }
};


export const getObjectData = async (objectName: string, type = "base64", addFileType: boolean = false) => {
  try {
    if (!objectName) {
      throw new Error("objectName不能为空");
    }

    const stream = await minioClient.getObject(bucketName, objectName);
    if (!stream) {
      throw new Error("object数据为空");
    }

    // 将流内容读取到内存中
    let dataBuffer = Buffer.alloc(0);
    // 将流内容读取到字符串中
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => {
        dataBuffer = Buffer.concat([dataBuffer, chunk]);
      });

      stream.on('end', async () => {
        // 从dataBuffer读取到文件类型
        if (type === "buffer") {
          resolve(dataBuffer);
          return;
        }
        let dataStr = dataBuffer.toString('base64')
        // 添加文件类型到base64字符串中
        if (addFileType) {
          // 如果图片有扩展名，添加到base64字符串中
          const mimeType = mimeTypes.lookup(objectName); // 使用mime-types库自动查找
          if (mimeType) {
            dataStr = `data:${mimeType};base64,${dataStr}`;
          } else {
            dataStr = `data:application/octet-stream;base64,${dataStr}`; // 默认使用二进制流类型
          }
        }

        resolve(dataStr);
      });

      stream.on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error("获取对象数据失败:", error);
    throw error;
  }
};

export const fPutObject = async (objectName: string, filePath: string, metaData?: ObjectMetaData) => {
  try {
    const uploadedObjectInfo = await minioClient.fPutObject(bucketName, objectName, filePath, metaData);
    console.log("对象上传成功:", objectName);
    return uploadedObjectInfo;
  } catch (error) {
    console.error("对象上传失败:", error);
    throw error;
  }
};

export const putObjectStream = async (objectName: string, stream: any) => {
  try {
    const uploadedObjectInfo = await minioClient.putObject(bucketName, objectName, stream);
    console.log("对象上传成功:", objectName);
    return uploadedObjectInfo;
  } catch (error) {
    console.error("对象上传失败:", error);
    throw error;
  }
};

export const deleteObject = async (objectName: string) => {
  try {
    await minioClient.removeObject(bucketName, objectName);
    console.log("对象删除成功:", objectName);
  } catch (error) {
    console.error("对象删除失败:", error);
    throw error;
  }
};


export const presignedGetObject = async (
  params: {
    objectName: string,
    expires?: number,
  },
  ctx?: Context
) => {
  try {
    let cilent = minioClient;
    if (ctx && ctx.request?.header?.referer) {
      cilent = createMinoClient(ctx.request?.header?.referer)
    }
    const { objectName, expires = 1 * 60 * 60 } = params;

    const url = await cilent.presignedGetObject(bucketName, objectName, expires);
    console.log("预签名URL:", url);

    return url;
  } catch (error) {
    console.error("生成预签名URL失败:", error);
    throw error;
  }
};


export const presignedPutObject = async (
  params: {
    objectName: string,
    expires?: number,
  },
  ctx?: Context
) => {
  try {
    let cilent = minioClient;
    if (ctx) {
      cilent = createMinoClient(ctx.request?.header?.referer)
    }
    const { objectName, expires = 1 * 60 * 60 } = params;

    const url = await cilent.presignedPutObject(bucketName, objectName, expires);
    console.log("预签名URL:", url);

    return url;
  } catch (error) {
    console.error("生成预签名URL失败:", error);
    throw error;
  }
};


export const presignedDeleteObject = async (
  params: {
    objectName: string,
    expires?: number,
  },
  ctx?: Context
) => {
  try {
    let cilent = minioClient;
    if (ctx) {
      cilent = createMinoClient(ctx.request?.header?.referer)
    }
    const { objectName, expires = 1 * 60 * 60 } = params;

    const url = await cilent.presignedUrl("DELETE", bucketName, objectName, expires);
    console.log("预签名URL:", url);

    return url;
  } catch (error) {
    console.error("生成预签名URL失败:", error);
    throw error;
  }
};

export default minioClient;

