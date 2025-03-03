/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** POST /api/v1/route */
export async function querySiteRouters(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_SiteRoutes_>('/api/v1/route', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** POST /api/v1/setup */
export async function setup(body?: API.RegisterInfo, options?: {}) {
  return request<API.Result_string_>(`/api/v1/setup`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
