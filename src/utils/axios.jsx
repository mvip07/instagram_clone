import axios from "axios";

const defaultOptions = {
    baseURL: "https://searching-server.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': "*/*",
    },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
    let token = localStorage.getItem('user-token')

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default API;

