import axios from "axios"

const baseURL = 'https://localhost:5000/';
//console.log(baseURL)

const $host = axios.create({
    baseURL: baseURL
})

const $authHost = axios.create({
    baseURL: baseURL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
//before each requiest, put token in header auth
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}