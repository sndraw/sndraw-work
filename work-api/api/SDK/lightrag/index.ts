import { AI_GRAPH_PLATFORM_MAP } from "@/common/ai";
import request from "@/common/request";
import FormData from "form-data";

export interface Config {
    host?: string;
    apiKey?: string;
}
export default class LightragAPI {
    protected readonly host: string = '';
    protected readonly apiKey: string = '';
    protected readonly code: string = '';
    protected readonly config: any;


    constructor(config: { host: string; apiKey: string; code: any; }) {
        if (config?.host) {
            this.host = config.host
        }
        if (config?.apiKey) {
            this.apiKey = config.apiKey;
        }
        if (config?.code) {
            this.code = config.code
        }
        this.config = config;
    }

    async queryGraphWorkspaceList() {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                return {
                    data: [
                        {
                            name: '默认空间',
                            mtime: this.config?.updatedAt,
                            birthtime: this.config?.createdAt,
                        }
                    ]
                }
            }
            const result: any = await request(`${this.host}/workspaces/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey
                },
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching workspace list:', errMessage);
            throw new Error(errMessage);
        }
    }
    async getGraphWorkspaceInfo(workspace: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                return {
                    data: {
                        name: '默认空间',
                        mtime: this.config?.updatedAt,
                        birthtime: this.config?.createdAt,
                    }
                }
            }
            const result: any = await request(`${this.host}/workspaces/${encodeURIComponent(workspace)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey
                },
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching workspace details:', errMessage);
            throw new Error(errMessage);
        }
    }
    async createGraphWorkspace(data: {
        name: string
    }) {
        const { name } = data;
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const result: any = await request(`${this.host}/workspaces`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                },
                data: {
                    workspace: name,
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error creating workspace:', errMessage);
            throw new Error(errMessage);
        }
    }
    async updateGraphWorkspace(workspace: string, data: {
        name: string

    }) {
        const { name } = data;
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const result: any = await request(`${this.host}/workspaces/${encodeURIComponent(workspace)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                },
                data: {
                    workspace: name,
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error creating workspace:', errMessage);
            throw new Error(errMessage);
        }
    }

    async deleteGraphWorkspace(workspace: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const result: any = await request(`${this.host}/workspaces/${encodeURIComponent(workspace)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey
                },
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error deleting workspace:', errMessage);
            throw new Error(errMessage);
        }
    }

    async getGraphData(workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                const result: any = await request(`${this.host}/graphs`, {
                    method: 'GET',
                    params:{
                        label:"*"
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': this.apiKey
                    },
                });
                if (!result) {
                    throw new Error(result?.message);
                }
                const nodes = result?.nodes?.map((node: any) =>{
                    return {
                        id: node.id,
                        label: node?.labels?.join(","),
                        entity_type: node?.properties?.entity_type,
                        description: node?.properties?.description,
                        source_id: node?.properties?.source_id,
                    }
                })

                const edges = result?.edges?.map((edge: any) =>{
                    return {
                        id: edge.id,
                        source: edge.source,
                        target: edge.target,
                        weight: edge?.properties?.weight,
                        keywords: edge?.properties?.keywords,
                        description: edge?.properties?.description,
                        source_id: edge?.properties?.source_id,
                    }
                })

                return {
                    data: {
                        nodes,
                        edges,
                    }
                };

            }
            const result: any = await request(`${this.host}/graph/data`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                },
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching graph data:', errMessage);
            throw new Error(errMessage);
        }
    }

    async getGraphNode(node_id: string, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const result: any = await request(`${this.host}/graph/entity/${encodeURIComponent(node_id)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching node details:', errMessage);
            throw new Error(errMessage);
        }
    }

    async updateGraphNode(node_id: string, node_data: any, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            if (!node_id) {
                throw new Error("节点ID参数错误");
            }
            if (!node_data) {
                throw new Error("节点数据参数错误");
            }

            const result: any = await request(`${this.host}/graph/entity/${encodeURIComponent(node_id)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                },
                data: node_data
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error update node details:', errMessage);
            throw new Error(errMessage);
        }
    }


    async deleteGraphNode(node_id: string, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const result: any = await request(`${this.host}/graph/entity/${encodeURIComponent(node_id)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error deleting node:', errMessage);
            throw new Error(errMessage);
        }
    }

    async getGraphLink(link_id: string, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const link_ids = link_id.split("_");
            const src_entity_name = link_ids[0];
            const tgt_entity_name = link_ids[1];
            if (!src_entity_name || !tgt_entity_name) {
                throw new Error("节点关系ID参数错误");
            }
            const result: any = await request(`${this.host}/graph/relation/by_nodes`, {
                method: 'GET',
                params: {
                    src_entity_name,
                    tgt_entity_name
                },
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching link details:', errMessage);
            throw new Error(errMessage);
        }
    }


    async updateGraphLink(link_id: string, link_data: any, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const link_ids = link_id.split("_");
            const src_entity_name = link_ids[0];
            const tgt_entity_name = link_ids[1];
            if (!src_entity_name || !tgt_entity_name) {
                throw new Error("节点关系ID参数错误");
            }
            if (!link_data) {
                throw new Error("关系数据参数错误");
            }
            const result: any = await request(`${this.host}/graph/relation/by_nodes`, {
                method: 'PUT',
                params: {
                    src_entity_name,
                    tgt_entity_name
                },
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                },
                data: link_data
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error update link details:', errMessage);
            throw new Error(errMessage);
        }
    }

    async deleteGraphLink(link_id: string, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                throw new Error("该接口类型不支持此操作");
            }
            const link_ids = link_id.split("_");
            const src_entity_name = link_ids[0];
            const tgt_entity_name = link_ids[1];
            if (!src_entity_name || !tgt_entity_name) {
                throw new Error("节点关系ID参数错误");
            }
            const result: any = await request(`${this.host}/graph/relation/by_nodes`, {
                method: 'DELETE',
                params: {
                    src_entity_name,
                    tgt_entity_name
                },
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error deleting link:', errMessage);
            throw new Error(errMessage);
        }
    }

    async insertText(data: {
        text: string;
        split_by_character?: string;
        split_by_character_only?: boolean;
    }, workspace?: string) {
        try {
            const { text, split_by_character, split_by_character_only } = data;
            const result: any = await request(`${this.host}/documents/text`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                },
                data: {
                    text,
                    split_by_character,
                    split_by_character_only
                },
                timeout: 0
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error inserting text:', errMessage);
            throw new Error(errMessage);
        }
    }

    async insertFile(formData: FormData, workspace?: string) {
        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                const result: any = await request(`${this.host}/documents/file_batch`, {
                    method: 'POST',
                    headers: {
                        ...(formData?.getHeaders() || {}),
                        'X-API-Key': this.apiKey,
                    },
                    data: formData,
                    timeout: 0
                });
                if (result?.code !== 0 && result?.status !== "success") {
                    throw new Error(result.message);
                }
                return result;
            }
            const result: any = await request(`${this.host}/documents/batch`, {
                method: 'POST',
                headers: {
                    ...(formData?.getHeaders() || {}),
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                },
                data: formData,
                timeout: 0
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error inserting file:', errMessage);
            throw new Error(errMessage);
        }
    }

    async clearGraphData(workspace?: string) {
        try {
            const result: any = await request(`${this.host}/documents/all`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;

        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error clearing graph data:', errMessage);
            throw new Error(errMessage);
        }
    }

    async queryGraphDocumentList(workspace?: string) {

        try {
            if (this.code === AI_GRAPH_PLATFORM_MAP.lightrag.value) {
                const result: any = await request(`${this.host}/documents`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': this.apiKey
                    }
                });
                if (!result?.statuses) {
                    throw new Error(result.message);
                }
                let data: any[] = []
                for (const statuse of Object.entries(result.statuses)) {
                    const list = statuse?.[1] || []
                    if (Array.isArray(list)) {
                        data = [...data, ...list]
                    }
                }
                return {
                    data: data,
                };
            }
            const result: any = await request(`${this.host}/graph/document`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;

        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching document list:', errMessage);
            throw new Error(errMessage);
        }
    }
    async getGraphDocument(document_id: string, workspace?: string) {
        try {
            const result: any = await request(`${this.host}/graph/document/${document_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;

        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error fetching document:', errMessage);
            throw new Error(errMessage);
        }
    }
    async deleteGraphDocument(document_id: string, workspace?: string) {
        try {
            const result: any = await request(`${this.host}/documents/${document_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                }
            });
            if (result?.code !== 0 && result?.status !== "success") {
                throw new Error(result.message);
            }
            return result;

        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error deleting document:', errMessage);
            throw new Error(errMessage);
        }
    }

    async graphChat(queryParams: any, workspace?: string) {
        const { stream } = queryParams;
        try {
            const url = stream ? `${this.host}/query/stream` : `${this.host}/query`;
            const dataStream: any = await request(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey,
                    'X-Workspace': encodeURIComponent(workspace || ""),
                },
                data: queryParams,
                responseType: stream ? 'stream' : 'json'
            });
            if (stream) {
                return dataStream;
            }
            return dataStream?.response || '';
        } catch (error: any) {
            const errMessage = error?.response?.data?.detail || error
            console.error('Error in graph chat:', errMessage);
            throw new Error(errMessage);
        }
    }
}
