import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
  const { data } = (await getSession()) as any;
  if (data && data.token.accessToken) {
    config.headers.Authorization = `Bearer ${data.token.accessToken}`;
  }
  return config;
});

export default axiosInstance;
