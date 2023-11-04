import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL
const apiKey = process.env.REACT_APP_KEY
console.log("Base", BASE_URL)
console.log("Base", apiKey)
const Ai = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${apiKey}`,

    }
});

export default Ai;