import axios from "axios";

const axiosClient = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://duan01cuongnd.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});



// Add a request interceptor
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`,
        };
    }
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient;
