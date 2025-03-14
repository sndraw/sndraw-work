
export const ROUTE_BASE_URL = process.env.SERVER_BASE_URL || '/api';

export default {
    HOME: ROUTE_BASE_URL + "/",
    SETUP: ROUTE_BASE_URL + "/setup",
    TEST: ROUTE_BASE_URL + "/test",
    SEARCH: ROUTE_BASE_URL + "/search",
    LOGIN: ROUTE_BASE_URL + "/login",
    REGISTER: ROUTE_BASE_URL + "/register",
    REFRESH_TOKEN: ROUTE_BASE_URL + "/token/refresh",
    LOGOUT: ROUTE_BASE_URL + "/logout",
    PWD: ROUTE_BASE_URL + "/pwd",
    IMAGE_LIST: ROUTE_BASE_URL + "/image",
    IMAGE_PREVIEW: ROUTE_BASE_URL + "/image/preview",
    IMAGE_DOWNLOAD: ROUTE_BASE_URL + "/image/download",
    FILE_UPLOAD: ROUTE_BASE_URL + "/file/upload",
    FILE_UPLOAD_URL: ROUTE_BASE_URL + "/file/upload/:object_id",
    FILE_PREVIEW: ROUTE_BASE_URL + "/file/preview/:object_id",
    FILE_DOWNLOAD: ROUTE_BASE_URL + "/file/download/:object_id",
    INITIAL: ROUTE_BASE_URL + "/initial",
    AI_CHAT: ROUTE_BASE_URL + "/ai/chat",
    AI_CHAT_DETAIL: ROUTE_BASE_URL + "/ai/chat/:chat_id",
    AI_LM_ALL: ROUTE_BASE_URL + "/ai/lm",
    AI_LM: ROUTE_BASE_URL + "/ai/lm/platform/:platform",
    AI_LM_PULL: ROUTE_BASE_URL + "/ai/lm/platform/:platform/pull",
    AI_LM_DETAIL: ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model",
    AI_LM_STATUS: ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model/status",
    AI_LM_RUN: ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model/run",
    AI_LM_CHAT: ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model/chat",
    AI_LM_GENERATE:ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model/generate",
    AI_LM_IMAGE:ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model/image",
    AI_LM_EMBED:ROUTE_BASE_URL + "/ai/lm/platform/:platform/model/:model/embed",
    AI_GRAPH_MULTI: ROUTE_BASE_URL + "/ai/graph",
    AI_GRAPH_MULTI_DETAIL: ROUTE_BASE_URL + "/ai/graph/:graph",
    AI_GRAPH_MULTI_WORKSPACE: ROUTE_BASE_URL + "/ai/graph/:graph/workspace",
    AI_GRAPH_MULTI_WORKSPACE_DETAIL: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace",
    AI_GRAPH_MULTI_NODE: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/node",
    AI_GRAPH_MULTI_NODE_DETAIL: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/node/:node_id",
    AI_GRAPH_MULTI_LINK: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/link",
    AI_GRAPH_MULTI_LINK_DETAIL: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/link/:source/:target",
    AI_GRAPH_MULTI_DATA: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/data",
    AI_GRAPH_MULTI_CHAT: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/chat",
    AI_GRAPH_MULTI_DOCUMENT: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/document",
    AI_GRAPH_MULTI_DOCUMENT_DETAIL: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/document/:document_id",
    AI_GRAPH_MULTI_DATA_TEXT: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/data/text",
    AI_GRAPH_MULTI_DATA_FILE: ROUTE_BASE_URL + "/ai/graph/:graph/workspace/:workspace/data/file",
    AGENT: ROUTE_BASE_URL + "/agent",
    AGENT_DETAIL: ROUTE_BASE_URL + "/agent/:agent",
    AI_PLATFORM: ROUTE_BASE_URL + "/ai/platform",
    AI_PLATFORM_ACTIVED: ROUTE_BASE_URL + "/ai/platform/actived",
    AI_PLATFORM_DETAIL: ROUTE_BASE_URL + "/ai/platform/:platform",
    AI_PLATFORM_STATUS: ROUTE_BASE_URL + "/ai/platform/:platform/status",
    ADMIN_USER: ROUTE_BASE_URL + "/admin/user",
    ADMIN_USER_DETAIL: ROUTE_BASE_URL + "/admin/user/:id",
    ADMIN_USER_STATUS: ROUTE_BASE_URL + "/admin/user/:id/status",
    ADMIN_ROLE: ROUTE_BASE_URL + "/admin/role",
    ADMIN_ROLE_ACTIVED: ROUTE_BASE_URL + "/admin/role/actived",
    ADMIN_ROLE_DETAIL: ROUTE_BASE_URL + "/admin/role/:id",
    ADMIN_ROLE_STATUS: ROUTE_BASE_URL + "/admin/role/:id/status",
};