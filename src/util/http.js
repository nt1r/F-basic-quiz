import axios from "axios";

export function makeHttpRequest(method, url, body) {
  return axios({
    method,
    url,
    data: body,
  });
}

const HOST_IP = "http://localhost:8080";
const PREFIX = "/users";
export const ADD_ONE_USER_URL = () => `${HOST_IP}${PREFIX}`;
export const GET_USER_URL = (userId) => `${HOST_IP}${PREFIX}/${userId}`;
export const ADD_ONE_EDUCATION_URL = (userId) =>
  `${HOST_IP}${PREFIX}/${userId}/educations`;
export const GET_EDUCATION_LIST_URL = (userId) =>
  `${HOST_IP}${PREFIX}/${userId}/educations`;
