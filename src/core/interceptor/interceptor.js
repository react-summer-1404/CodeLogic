import axios from "axios";

const API_BASE_URL = "https://sepehracademy.liara.run";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  return err.response.data;
};

apiClient.interceptors.request.use((config) => {
  return config;
});
apiClient.interceptors.response.use(onSuccess, onError);

export default apiClient;
// src/interceptor/interceptor.js
// import axios from "axios";

// const API_BASE_URL = "https://sepehracademy.liara.run";

// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
// });

// const onSuccess = (response) => response.data;
// const onError = (err) => {
//   if (err.response) return Promise.reject(err.response.data);
//   return Promise.reject(err);
// };

// apiClient.interceptors.request.use((config) => {
//   return config;
// });

// apiClient.interceptors.response.use(onSuccess, onError);

// export default apiClient;
