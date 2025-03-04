/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { postFetch } from '@/common/fetchRequest';
import { request } from '@umijs/max';

/** GET /api/v1/ai/graph */
export async function queryGraphList(options?: { [key: string]: any }) {
  return request<API.Result_AIGraphInfoList_>('/api/v1/ai/graph', {
    method: 'GET',
    ...(options || {}),
  });
}

/** GET /api/v1/ai/graph/:graph */
export async function getGraphInfo(
  params: {
    graph: string;
  },
  options?: { [key: string]: any },
) {
  const { graph } = params;
  return request<API.Result_AIGraphInfo_>(`/api/v1/ai/graph/${graph}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** GET /api/v1/ai/graph/:graph/workspace */
export async function queryGraphWorkspaceList(
  params: {
    graph: string;
  },
  options?: { [key: string]: any },
) {
  const { graph } = params;
  return request<API.Result_AIGraphWorkspaceList_>(
    `/api/v1/ai/graph/${graph}/workspace`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** GET /api/v1/ai/graph/:graph/workspace/:workspace*/
export async function getGraphWorkspaceInfo(
  params: {
    graph: string;
    workspace: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;
  return request<API.Result_AIGraphWorkspaceInfo_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
// 添加图谱空间
/** POST /api/v1/ai/graph/:graph/workspace */
export async function addGraphWorkspace(
  params: {
    graph: string;
  },
  body: API.AIGraphWorkspaceInfoVO,
  options?: { [key: string]: any },
) {
  const { graph } = params;
  return request<API.Result_AIGraphWorkspaceInfo_>(
    `/api/v1/ai/graph/${graph}/workspace`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

// 修改图谱空间
/** PUT /api/v1/ai/graph/:graph/workspace/:workspace  */
export async function updateGraphWorkspace(
  params: {
    graph: string;
    workspace: string;
  },
  body: API.AIGraphWorkspaceInfoVO,
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;
  return request<API.Result_AIGraphWorkspaceInfo_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

// 删除图谱空间
/** DELETE /api/v1/ai/graph/:graph/workspace/:workspace*/
export async function deleteGraphWorkspace(
  params: {
    graph: string;
    workspace: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;
  return request<API.Result_string_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}

/** GET /api/v1/ai/graph/:graph/workspace/:workspace/data */
export async function queryGraphData(
  params: {
    graph: string;
    workspace: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;
  return request<API.Result_AIGraphData_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/data`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** GET /api/v1/ai/graph/:graph/workspace/:workspace/node/:node_id  */
export async function getGraphNode(
  params: {
    graph: string;
    workspace: string;
    node_id: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace, node_id } = params;
  return request<API.Result_AIGraphNode_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/node/${node_id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}


/** PUT /api/v1/ai/graph/:graph/workspace/:workspace/node */
export async function addGraphNode(
  params: {
    graph: string;
    workspace: string;
  },
  body: API.AIGraphNodeVO,
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;

  return request<API.Result_AIGraphNode_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/node`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
/** PUT /api/v1/ai/graph/:graph/workspace/:workspace/node/:node_id  */
export async function updateGraphNode(
  params: {
    graph: string;
    workspace: string;
    node_id: string;
  },
  body: API.AIGraphNodeVO,
  options?: { [key: string]: any },
) {
  const { graph, workspace, node_id } = params;

  return request<API.Result_AIGraphNode_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/node/${node_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** DELETE /api/v1/ai/graph/:graph/workspace/:workspace/node/:node_id  */
export async function deleteGraphNode(
  params: {
    graph: string;
    workspace: string;
    node_id: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace, node_id } = params;

  return request<API.Result_string_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/node/${node_id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    },
  );
}

/** GET /api/v1/ai/graph/:graph/workspace/:workspace/link/${source}/${target}*/
export async function getGraphLink(
  params: {
    graph: string;
    workspace: string;
    source: string;
    target: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace, source, target } = params;
  return request<API.Result_AIGraphLink_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/link/${source}/${target}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
/** PUT /api/v1/ai/graph/:graph/workspace/:workspace/link*/
export async function addGraphLink(
  params: {
    graph: string;
    workspace: string;
  },
  body: API.AIGraphLinkVO,
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;

  return request<API.Result_AIGraphLink_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/link`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** PUT /api/v1/ai/graph/:graph/workspace/:workspace/link/${source}/${target}*/
export async function updateGraphLink(
  params: {
    graph: string;
    workspace: string;
    source: string;
    target: string;
  },
  body: API.AIGraphLinkVO,
  options?: { [key: string]: any },
) {
  const { graph, workspace, source, target } = params;

  return request<API.Result_AIGraphLink_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/link/${source}/${target}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** DELETE /api/v1/ai/graph/:graph/workspace/:workspace/link/${source}/${target}*/
export async function deleteGraphLink(
  params: {
    graph: string;
    workspace: string;
    source: string;
    target: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace, source, target } = params;

  return request<API.Result_string_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/link/${source}/${target}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    },
  );
}

/** DELETE /api/v1/ai/graph/:graph/workspace/data */
export async function clearGraphData(
  params: {
    graph: string;
    workspace: string;
  },
  options?: { [key: string]: any },
) {
  const { graph, workspace } = params;

  return request<API.Result_string_>(
    `/api/v1/ai/graph/${graph}/workspace/${workspace}/data`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    },
  );
}

/** POST /api/v1/ai/graph/:graph/workspace/chat */
export async function graphChat(
  params: {
    platformHost?: string;
    graph: string;
    workspace?: string;
    is_stream?: boolean;
  },
  body: {
    format?: string;
    mode: string;
    top_k?: number;
    query: string;
    only_need_context?: boolean;
    only_need_prompt?: boolean;
  },
  options?: { [key: string]: any },
) {
  const { platformHost, graph, workspace, is_stream = true } = params;
  let url = `/api/v1/ai/graph/${graph}/workspace/${workspace}/chat`;
  if (platformHost) {
    url = `/${platformHost}/query`;
  }
  return postFetch({
    url: url,
    body: body,
    options: options,
    skipErrorHandler: true,
    is_stream: is_stream,
  });
}
