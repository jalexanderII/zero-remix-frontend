import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import type { BaseResponse } from "~/utils/types.server";
import dotenv from "dotenv";

dotenv.config();

let token: string | null = null;

axios.defaults.baseURL =
  process.env.BACKEND_SERVER_URL || "http://127.0.0.1:8080";

axios.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error("unauthorised");
        break;

      case 404:
        console.error("/not-found");
        break;

      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string, token: string | null) =>
    axios
      .get<T>(url, { headers: token ? { Clerk: `${token}` } : {} })
      .then(responseBody),
  post: <T>(url: string, body: {}, token: string | null) =>
    axios
      .post<T>(url, body, { headers: token ? { Clerk: `${token}` } : {} })
      .then(responseBody),
  delete: <T>(url: string, token: string | null) =>
    axios
      .delete<T>(url, {
        headers: token ? { Clerk: `${token}` } : {},
      })
      .then(responseBody),
};

export const backend = {
  home: () => request.get<BaseResponse>("/", null),
};
