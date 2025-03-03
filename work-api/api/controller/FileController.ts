import BaseController from "./BaseController";
import { resultError, resultSuccess } from "../common/resultFormat";
import { Context } from "koa";
import fs from "fs";
import { UPLOAD_FILE_TYPE } from "@/common/ai";
import { bucketName, fPutObject, getObjectStream, presignedGetObject, presignedPutObject } from "@/common/file";
import FileLogService from "@/service/FileLogService";
import { StatusEnum } from "@/constants/DataMap";
/**
 * 文件-接口
 **/
class FileController extends BaseController {

    // 获取上传URL
    static async getUploadUrl(ctx: Context) {
        const { object_id } = ctx.params;
        const { name, size, mimetype } = ctx.request.query;
        let uploadUrl = "";
        try {
            if (!object_id) {
                throw new Error("缺少对象ID参数");
            }
            // 获取上传地址
            uploadUrl = await presignedPutObject({ objectName: object_id }, ctx);
            ctx.status = 200;
            // 返回上传地址
            ctx.body = {
                url: uploadUrl,
            };

        } catch (e) {
            // 异常处理，返回错误信息
            ctx.logger.error("获取上传地失败", e); // 记录错误日志
            ctx.status = 500;
            const error: any = e;
            ctx.body = resultError({
                code: error?.code,
                message: error?.message || error,
            });
        } finally {
            // 关闭连接
            ctx.res.once('close', () => {
                try {
                    // 记录文件日志
                    FileLogService.addFileLog({
                        name: name,
                        objectId: object_id,
                        path: bucketName,
                        size: size,
                        mimetype: mimetype,
                        userId: ctx.userId,
                        status: uploadUrl ? StatusEnum.ENABLE : StatusEnum.DISABLE
                    })
                } catch (e) {
                    ctx.logger.error("记录文件日志失败", e); // 记录错误日志
                }
            })
        }
    }

    // 上传
    static async upload(ctx: Context) {
        // 确保 file 是单个文件对象而不是数组
        let files: any;
        if (!ctx.request?.files) {
            throw new Error("文件列表为空");
        }
        // 返回上传文件的列表
        const resultList = [];
        try {
            const fileField = ctx.request?.files?.file || ctx.request?.files?.files;
            if (fileField) {
                if (Array.isArray(fileField)) {
                    files = fileField;
                } else {
                    files = [fileField];
                }
            }

            if (files?.length < 1) {
                throw new Error("文件为空");
            }

            // 循环判定是否支持文件类型、文件是否存在
            for (const file of files) {
                if (!file) {
                    throw new Error("文件为空");
                }

                if (!UPLOAD_FILE_TYPE?.includes(file?.mimetype)) {
                    throw new Error(`不支持的文件类型: ${file?.originalFilename}`);
                }
                // 检查文件是否存在
                if (!file?.filepath || !fs.existsSync(file?.filepath)) {
                    throw new Error("上传的文件不存在");
                }
                const objectId = crypto.randomUUID();
                try {
                    const result = await fPutObject(objectId, file.filepath, {
                        'Content-Type': file.mimetype
                    });
                    if (result) {
                        FileLogService.addFileLog({
                            name: file.originalFilename,
                            objectId: objectId,
                            path: bucketName,
                            size: file.size,
                            mimetype: file.mimetype,
                            userId: ctx.userId
                        })

                        const downloadUrl = await presignedGetObject({ objectName: objectId }, ctx);

                        const previewUrl = await presignedGetObject({ objectName: objectId }, ctx);
                        resultList.push({
                            filename: file.originalFilename,
                            objectId: objectId,
                            downloadUrl,
                            previewUrl
                        });
                    }
                } catch (error) {
                    console.error('Error uploading  file:', error);
                }

            }
            ctx.status = 200;
            ctx.body = resultSuccess({
                data: resultList
            });

        } catch (e) {
            // 异常处理，返回错误信息
            ctx.logger.error("上传文件异常", e); // 记录错误日志
            ctx.status = 500;
            const error: any = e;
            ctx.body = resultError({
                code: error?.code,
                message: error?.message || error,
            });
        } finally {
            // 监听接口结束，删除文件
            ctx.res.once("close", () => {
                try {
                    if (files?.length > 0) {
                        const filePaths = files?.map((file: any) => file?.filepath);
                        // 删除原有文件
                        for (const filePath of filePaths) {
                            if (fs.existsSync(filePath)) {
                                fs.unlinkSync(filePath);
                            }
                        }
                    }
                } catch (error) {
                    ctx.logger.error("删除文件异常", error); // 记录错误日志
                }
            });
        }
    }

    // 预览
    static async preview(ctx: Context) {
        const { object_id } = ctx.params;
        const { stream = false } = ctx.query;
        try {
            if (!object_id) {
                throw new Error("缺少对象ID参数");
            }
            // 下载文件流
            if (stream) {
                const result = await getObjectStream(object_id);
                ctx.status = 200;
                ctx.body = result;
                return
            }
            const result = await presignedGetObject({ objectName: object_id }, ctx);
            ctx.status = 200;
            ctx.body = {
                url: result,
            }
        }
        catch (e) {
            // 异常处理，返回错误信息
            ctx.logger.error("文件预览异常", e); // 记录错误日志
            ctx.status = 500;
            const error: any = e;
            ctx.body = resultError({
                code: error?.code,
                message: error?.message || error,
            });
        }
    }
    // 下载
    static async download(ctx: Context) {
        const { object_id } = ctx.params;
        const { stream = false } = ctx.query;

        try {
            if (!object_id) {
                throw new Error("缺少对象ID参数");
            }
            // 下载文件流
            if (stream) {
                const result = await getObjectStream(object_id);
                ctx.status = 200;
                ctx.body = result;
                return
            }
            const result = await presignedGetObject({ objectName: object_id }, ctx);
            ctx.status = 200;
            ctx.body = {
                url: result,
            }
        }
        catch (e) {
            // 异常处理，返回错误信息
            ctx.logger.error("文件下载异常", e); // 记录错误日志
            ctx.status = 500;
            const error: any = e;
            ctx.body = resultError({
                code: error?.code,
                message: error?.message || error,
            });
        }
    }
}

export default FileController;
