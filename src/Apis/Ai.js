import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getKey = () => { 
    return localStorage !== undefined && localStorage.getItem("open-api-key");
}
const Ai = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getKey()}`
    },
});


Ai.interceptors.request.use(
    async (config) => {
        const key = getKey();
        if (key !== null) {
            config.headers.Authorization = `Bearer ${key}`;
        }
        return config; 
    },
    (error) => {
        return Promise.reject(error);
    }
  );
export default Ai;
