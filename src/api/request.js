import axios from 'axios'

const http = axios.create({
    baseURL: '',
    tiemout: 3000
});

http.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token');
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.authorization = `token ${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
    );
http.interceptors.response.use(
    res => {
        const { data } = res;
        return data;
    },
    err => {
        return Promise.reject(err);
    }
);

export default http;