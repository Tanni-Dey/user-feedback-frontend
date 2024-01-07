import axios from "axios";

// using interceptors

// create instance
export const axiosNonSecureInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// add request by interceptor
axiosNonSecureInstance.interceptors.request.use(
  (config) => config,

  // handle request error
  (error) => Promise.reject(error)
);

// add response by interceptor
axiosNonSecureInstance.interceptors.response.use(
  (response) => response,

  // handle request error
  (error) => Promise.reject(error)
);
