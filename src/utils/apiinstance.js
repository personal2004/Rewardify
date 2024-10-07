import axios from "axios";
import { BASE_URL } from "./api";

const api =axios.create(
    { 
         baseURL: BASE_URL,
    }
);

api.interceptors.request.use(
    (config)=>{
      config.headers.Device = JSON.stringify({
        app: "web",
        os: "Android",
        device: "Nexus Phone",
        device_type: "mobile",
        ip_address: null,
        browser_version: "129.0.0.0",
        os_version: "unknown",
        browser_name: "chrome"
      });

      const token=localStorage.getItem('authToken');
       if(token){
        config.headers.Authorization=`Bearer ${token}`;
       }
       return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default api