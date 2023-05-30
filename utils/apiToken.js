import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";


const api = axios.create({
    baseURL: API_URL,
  });

  api.interceptors.request.use(async (config) => {
      try {
        const value =  await AsyncStorage.getItem("user");
        if (value !== null) {
          const token = JSON.parse(value).token;
          if (token) {
            config.headers["Token"] = token;
          }
          return config;
        } 
      } catch (error) {
      }
  });

  export default api;