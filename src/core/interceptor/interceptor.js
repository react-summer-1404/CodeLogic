import axios from "axios";
import {
  getItem,
  removeItem,
  setItem,
} from "../../utils/helper/storage.services";
import { toast } from "react-toastify";

const baseURL = "https://sepehracademy.liara.run";

const instance = new axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  const status = err?.response?.status;

  if (status === 401 || status === 403) {
    toast.error("لطفا ابتدا وارد شوید");
    setItem("isLogin", false);
  }

  if (status === 401) {
    removeItem("token");
  }

  if (status === 401 || status === 403) {
    return;
  }

  if (status >= 400 && status < 500) {
    console.log("Client error: " + status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  console.log("token:", token);
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
