import axios from 'axios';

const httpClient = axios.create({
    baseUrl: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});


const getAuthToken = () => localStorage.getItem('token');

const authInterceptor = (config) => {
    config.headers['authorization'] = getAuthToken();
    return config;
}

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;

const SIGNUP = process.env.VUE_APP_BASE_URL + '/api/auth/signup';
const SIGNIN = process.env.VUE_APP_BASE_URL + '/api/auth/login';
const PLACELIST = process.env.VUE_APP_BASE_URL + '/api/me/places';

// you can pass arguments to use as request parameters/data
const login = (username, password) => httpClient.post(SIGNIN, { username, password });
// maybe more than one..
const register = (firstname, surname, username, password, password_confirmation) => httpClient.post(SIGNUP, {
    firstname, surname, username, password, password_confirmation
});

const placelist = () => httpClient.get(PLACELIST);


export {
    login,
    register,
    placelist
}