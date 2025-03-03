/* eslint-disable */

import { request } from '@umijs/max';

/** GET /api/v1/ai/chat */
export async function queryAIChatList(
  params: {
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_AIChatInfo__>(`/api/v1/ai/chat`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** POST /api/v1/ai/chat */
export async function addAIChat(
  body: API.AIChatInfoVO,
  options?: { [key: string]: any },
) {
  const record = {
    ...(body || {}),
  };
  return request<API.Result_AIChatInfo_>(`/api/v1/ai/chat`, {
    method: 'POST',
    data: { ...record },
    ...(options || {}),
  });
}

/** GET /api/v1/ai/chat/:chat_id  */
export async function getAIChatInfo(
  params: {
    platform: string;
    model: string;
  },
  options?: { [key: string]: any },
) {
  const { platform, model } = params;
  return request<API.Result_AIChatInfo_>(`/api/v1/ai/chat`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** PUT /api/v1/ai/chat/:chat_id  */
export async function saveAIChat(
  params: {
    chat_id: string;
  },
  body: object,
  options?: { [key: string]: any },
) {
  const { chat_id } = params;
  return request<API.Result_AIChatInfo_>(`/api/v1/ai/chat/${chat_id}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** DELETE /api/v1/ai/chat/:chat_id */
export async function deleteAIChat(
  params: {
    chat_id: string;
  },
  options?: { [key: string]: any },
) {
  const { chat_id } = params;
  return request<API.Result_string_>(`/api/v1/ai/chat/${chat_id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
