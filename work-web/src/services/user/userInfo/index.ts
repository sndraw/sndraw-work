import { request } from '@umijs/max';

/** POST /api/v1/logout */
export async function logout(options?: any) {
  return request<API.Result_string_>('/api/v1/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** PUT /api/v1/pwd */
export async function pwdChange(body?: API.PasswordInfo, options?: any) {
  return request<API.Result_string_>(`/api/v1/pwd`, {
    data: body,
    method: 'POST',
    ...(options || {}),
  });
}
