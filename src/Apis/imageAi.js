import axios from 'axios';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_URL;
const apiKey = process.env.REACT_APP_IMAGE;
const imageAi = axios.create({
    baseURL: IMAGE_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${apiKey}`,
    },
});

export default imageAi;
