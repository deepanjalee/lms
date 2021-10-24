import { getRequest, deleteRequest, postRequest, putRequest } from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);

export const getMember = (id) => getRequest(`${BASE_URL}/${id}`);

export const deleteMember = (id) => deleteRequest(`${BASE_URL}/${id}`);

export const addMemberData = (data) => postRequest(`${BASE_URL}`, data);

export const editMemberData = (id,data) => putRequest(`${BASE_URL}/${id}`, data);