import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import env from '../config/env';

let headers = {};

const axiosInstance = axios.create({
    baseURL: env.DEV_URL,
    headers
});

// console.log('dev url', env.DEV_URL);

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;