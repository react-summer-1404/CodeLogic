import axios from "axios";


const API_BASE_URL = 'https://sepehracademy.liara.run';
const apiClient = axios.create({
    baseURL: API_BASE_URL,
})

apiClient.interceptors.request.use(
    (config) => {
        return config
    }
)
apiClient.interceptors.response.use(
    (data) => {
        return data
    },
    (error) => {
        return error
    }
)

export default apiClient

