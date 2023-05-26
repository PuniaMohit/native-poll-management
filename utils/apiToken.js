import axios from "axios";
import { API_URL } from "@env";


const api = axios.create({
    baseURL: API_URL,
  });

  api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    if (token) {
      config.headers["Token"] = token;
    }
    return config;
  });

  export default api;