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

api.interceptors.response.use(
  (response) => {
      return response;
  },
  async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = localStorage.getItem('refreshToken');
          try {
            // console.log('HIIamtesting before API call');
            const refresh = await axios.post(`${BASE_URL}/v1/store-user/auth/refreshToken/`,{},{headers:{ 'refresh-token': `Bearer ${refreshToken}`}});
            // console.log('HIIamtesting after API call');
            const newToken = refresh.data.token;
            localStorage.setItem('authToken', newToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
            return api(originalRequest);
          } catch (e) {
              console.error('Refresh token failed', e);
              localStorage.setItem('authToken','');
              return Promise.reject(e);
          }
      }
      return Promise.reject(error);
  }
);


export default api