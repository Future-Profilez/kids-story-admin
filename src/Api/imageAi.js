import axios from 'axios';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_URL;
console.log("Base", IMAGE_BASE_URL);
const imageAi = axios.create({
    baseURL: IMAGE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default imageAi;
