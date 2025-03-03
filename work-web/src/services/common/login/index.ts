/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { HTTP_AUTH_VALUE_PREFIX } from '@/utils/authToken';
import { request } from '@umijs/max';

/** POST /api/v1/login */
export async function login(body?: API.LoginInfo, options?: {}) {
  return request<API.Result_LoginInfo_>('/api/v1/login', {
    method: 'POST',
    data: body,
    ...(options || {
      // 不鉴权
      noAuth: true,
    }),
  });
}

/** POST /api/v1/register */
export async function register(body?: API.RegisterInfo, options?: {}) {
  return request<API.Result_string_>('/api/v1/register', {
    method: 'POST',
    data: body,
    ...(options || {
      // 不鉴权
      noAuth: true,
    }),
  });
}

// 请求刷新token
/** POST /api/v1/token/refresh */
export async function reqRefreshToken(data?: API.RefreshTokenInfo) {
  try {
    const response = await fetch('/api/v1/token/refresh', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${HTTP_AUTH_VALUE_PREFIX} ${data?.refresh_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Server returned an error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error; // 可选：重新抛出错误以便调用者处理
  }
}
