import axios from 'axios';
import AsyncStorage  from "@react-native-async-storage/async-storage";

// const baseURL = process.env.REACT_APP_BASE_API;
const baseURL = 'http://192.168.251.12:5000/api'
const api = axios.create({ baseURL });

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;