import axios from "axios";
import { getToken } from "./token";

const http = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000
})

http.interceptors.request.use((config) => {
    const token = getToken();
    // token 无效
    if (!token) return config;
    config.headers.Authorization = `Bearer ${token}`
    return config;
}, (error) => {
    return Promise.reject(error);
})

http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        console.log("need login.")
    }
    return Promise.reject(error);
})

export { http };
