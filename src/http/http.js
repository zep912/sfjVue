import axios from 'axios'
// import qs from 'qs'
// import Vue from 'vue'

const $http = axios.create({
    // baseURL: 'http://localhost:8080/api',
    // baseURL: 'http://192.168.0.133:9001/jjkj/sfj/api/',
    // baseURL: "/",
    baseURL: 'http://59.44.27.201:9010/jjkj/sfj/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

$http.interceptors.request.use(
    config => {
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        if (sessionStorage.getItem('token')) {
            let token = sessionStorage.getItem('token')
            config.token = token
            config.data = {
                ...config.data,
                token: token
            }
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
$http.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default $http
