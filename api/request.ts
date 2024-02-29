import { toastErrorConfig, toastWarningConfig } from "@/constants/ToastConfig";
import { USER_TOKEN } from "@/constants/Token";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig } from "axios";
import { router } from "expo-router";
import Toast from "react-native-root-toast";

const httpInstance = axios.create({
  baseURL: "",
  timeout: 10000,
});

// 请求拦截器
httpInstance.interceptors.request.use(
  async (config) => {
    // 添加 Token 到头部
    const token = await AsyncStorage.getItem(USER_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      router.replace("/login/");
      Toast.show("请先登录！", toastWarningConfig);
    }

    return config;
  },
  (e) => Promise.reject(e)
);

// 响应拦截器

httpInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (e) => {
    // 如果响应超时，则返回 axios 自带的 message
    if (!e.response) {
      Toast.show("网络错误！", toastErrorConfig);
    } else {
      Toast.show(e.response.msg, toastErrorConfig);
    }
    return Promise.reject(e);
  }
);

export function request<T>(config: AxiosRequestConfig): Promise<T> {
  return httpInstance(config) as Promise<T>;
}
