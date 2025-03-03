/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** GET /api/v1/admin/user */
export async function queryUserList(
  params: {
    /** username */
    username?: string;
    /** role */
    role?: string;
    /** email */
    email?: string;
    /** status */
    status?: number | string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('/api/v1/admin/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** POST /api/v1/admin/user */
export async function addUser(
  body: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  const record = {
    ...(body || {}),
  };
  return request<API.Result_UserInfo_>('/api/v1/admin/user', {
    method: 'POST',
    data: { ...record },
    ...(options || {}),
  });
}

/** GET /api/v1/admin/user/${userId} */
export async function getUserDetail(
  params: {
    /** userId */
    userId: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/admin/user/${param0}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** PUT /api/v1/admin/user/${userId} */
export async function modifyUser(
  params: {
    /** userId */
    userId: string;
  },
  body: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/admin/user/${param0}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** DELETE /api/v1/admin/user/${userId} */
export async function deleteUser(
  params: {
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/admin/user/${param0}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** PUT /api/v1/admin/user/${userId}/status */
export async function modifyUserStatus(
  params: {
    /** userId */
    userId: string;
  },
  body: { status: number | string },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/admin/user/${param0}/status`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** PUT /api/v1/admin/user/${userId}/role */
export async function modifyUserRole(
  params: {
    /** userId */
    userId: string;
  },
  body: { role: string },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/admin/user/${param0}/role`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}
