/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** GET /api/v1/admin/role/actived */
export async function queryActivedRoleList(options?: { [key: string]: any }) {
  return request<API.Result_RoleInfoList_>('/api/v1/admin/role/actived', {
    method: 'GET',
    ...(options || {}),
  });
}

/** GET /api/v1/admin/role */
export async function queryRoleList(
  params: {
    name?: string;
    code?: string;
    status?: number | string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_RoleInfo__>('/api/v1/admin/role', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** POST /api/v1/admin/role */
export async function addRole(
  body: API.RoleInfoVO,
  options?: { [key: string]: any },
) {
  const record = {
    ...(body || {}),
  };
  return request<API.Result_RoleInfo_>('/api/v1/admin/role', {
    method: 'POST',
    data: { ...record },
    ...(options || {}),
  });
}

/** GET /api/v1/admin/role/${roleId} */
export async function getRoleDetail(
  params: {
    /** roleId */
    roleId: string;
  },
  options?: { [key: string]: any },
) {
  const { roleId: param0 } = params;
  return request<API.Result_RoleInfo_>(`/api/v1/admin/role/${param0}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** PUT /api/v1/admin/role/${roleId} */
export async function modifyRole(
  params: {
    /** roleId */
    roleId: string;
  },
  body: API.RoleInfoVO,
  options?: { [key: string]: any },
) {
  const { roleId: param0 } = params;
  return request<API.Result_RoleInfo_>(`/api/v1/admin/role/${param0}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** DELETE /api/v1/admin/role/${roleId} */
export async function deleteRole(
  params: {
    /** roleId */
    roleId?: string;
  },
  options?: { [key: string]: any },
) {
  const { roleId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/admin/role/${param0}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** PUT /api/v1/admin/role/${roleId}/status */
export async function modifyRoleStatus(
  params: {
    /** roleId */
    roleId: string;
  },
  body: { status: number | string },
  options?: { [key: string]: any },
) {
  const { roleId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/admin/role/${param0}/status`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}
