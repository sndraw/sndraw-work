import { USER_ROLE_ENUM } from "./RoleMap";

export default {
    HOME: null,
    SETUP: null,
    TEST: null,
    SEARCH: null,
    LOGIN: null,
    REGISTER: null,
    REFRESH_TOKEN: null,
    LOGOUT: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    PWD: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    IMAGE_LIST: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    IMAGE_PREVIEW: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    IMAGE_DOWNLOAD: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    FILE_UPLOAD: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    FILE_UPLOAD_URL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    FILE_PREVIEW: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    FILE_DOWNLOAD: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    INITIAL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_ALL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_STATUS: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_PULL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_RUN: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_CHAT: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_GENERATE: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_IMAGE: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_LM_EMBED: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_CHAT: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_CHAT_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_WORKSPACE: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ]
    },
    AI_GRAPH_MULTI_WORKSPACE_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ]
    },
    AI_GRAPH_MULTI_NODE: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_NODE_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_LINK: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_LINK_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ]
    },
    AI_GRAPH_MULTI_DATA: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_CHAT: {
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_DOCUMENT: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_DOCUMENT_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_DATA_TEXT: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_GRAPH_MULTI_DATA_FILE: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_AGENT: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_AGENT_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_PLATFORM: {
        GET: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_PLATFORM_ACTIVED: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_PLATFORM_DETAIL: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_PLATFORM_STATUS: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    AI_PLATFROM_PROXY: {
        GET: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.USER,
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_USER: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_USER_DETAIL: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.DEV,
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_USER_STATUS: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_ROLE: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        POST: [
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_ROLE_ACTIVED: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_ROLE_DETAIL: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.OPS
        ],
        DELETE: [
            USER_ROLE_ENUM.OPS
        ],
    },
    ADMIN_ROLE_STATUS: {
        GET: [
            USER_ROLE_ENUM.OPS
        ],
        PUT: [
            USER_ROLE_ENUM.OPS
        ],
    }
};