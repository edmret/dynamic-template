"use client";
import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
  // set base route
  config.baseURL = process.env.NEXT_PUBLIC_API_URL;
  const { token } = (await getSession()) as any;
  if (token?.accessToken) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

export default axiosInstance;
