import axios from 'axios';
const record = localStorage.getItem("key");
console.log("record",record)
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Ai = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${record}`,
    },
});

export default Ai;
