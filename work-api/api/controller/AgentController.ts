import { Context } from "koa";
import { resultError, resultSuccess } from "../common/resultFormat";
import BaseController from "./BaseController";
import AIPlatformService from "@/service/AIPlatformService";
import { AI_PLATFORM_TYPE_MAP } from "@/common/ai";

class AgentController extends BaseController {

    // 获取Agent列表
    static async queryAgentList(ctx: Context) {
        try {
            const agentList = await AIPlatformService.queryActivedRecords({
                type: AI_PLATFORM_TYPE_MAP.agent.value
            });
            ctx.status = 200;
            ctx.body = resultSuccess({
                data: agentList
            });
        } catch (e) {
            // 异常处理，返回错误信息
            ctx.logger.error("查询Agent列表异常", e); // 记录错误日志
            ctx.status = 500;
            const error: any = e;
            ctx.body = resultError({
                code: error?.code,
                message: error?.message || error,
            });
        }
    }

    // 获取Agent信息
    static async getAgentInfo(ctx: Context) {
        // 从路径获取参数
        const { agent } = ctx.params;
        ctx.verifyParams({
            agent: {
                type: "string",
                required: false,
                min: 4,
                max: 255,
                message: {
                    required: "Agent名称不能为空",
                    min: "Agent名称不能小于4",
                    max: "Agent名称不能超过255",
                }
            }
        }, {
            agent
        })
        try {
            // 查询Agent
            const result = await AIPlatformService.findAIPlatformByIdOrName(agent, {
                safe: true
            });
            ctx.status = 200;
            ctx.body = resultSuccess({
                data: result
            });
        } catch (e) {
            // 异常处理，返回错误信息
            ctx.logger.error("查询Agent信息异常", e); // 记录错误日志
            ctx.status = 500;
            const error: any = e;
            ctx.body = resultError({
                code: error?.code,
                message: error?.message || error,
            });
        }
    }

}

export default AgentController;