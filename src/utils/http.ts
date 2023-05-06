/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-07 00:14:07
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-03 20:09:03
 * @FilePath: /general-antd-MS-tempalte/src/utils/http.ts
 * @Description: 
 * 
 */
import axios from "axios";
import { getToken } from "./token";
import { message } from "antd";

const http = axios.create({
  baseURL: "http://localhost:80",
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    // token 无效
    if (!token) return config;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("need login.");
    }
    message.error(`错误:${error.response.data.message}`);
    console.log(error.response.data);
    return Promise.reject(error);
  }
);

export { http };
