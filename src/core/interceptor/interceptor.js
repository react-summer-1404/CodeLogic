import axios from 'axios'
import { getItem, removeItem, setItem } from '../../utils/helper/storage.services';


const baseURL = "https://sepehracademy.liara.run"

const instance = new axios.create({
    baseURL: baseURL,
});

const onSuccess = (response) => {
    return response.data;
}

const onError = (err) => {
    if (err.response.status === 401) {
        removeItem('token')
        window.location.pathname = '/Login'
        setItem("isLogin", false)
        setIsLogin(true)
        removeItem("token")
    }

    if (err.response.status >= 400 && err.response.status < 500) {
        alert("Client error: " + err.response.status)
    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
    const token = getItem("token");
    console.log("token:", token)
    if (token) opt.headers.Authorization = "Bearer " + token;
    return opt;
})

export default instance