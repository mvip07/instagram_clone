import axios from "axios";

const defaultOptions = {
    baseURL: "https://searching-server.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': "*/*",
        // 'Connection': 'keep-alive',
        // 'User-Agent': 'PostmanRuntime/7.29.0',
        // 'Host': '<calculated when request is sent>',
        // 'Content-Length': '<calculated when request is sent>'

    },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
    let token=localStorage.getItem('user-token')

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default API;

