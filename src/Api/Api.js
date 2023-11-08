import axios from 'axios';
const APP_URL = process.env.REACT_APP_URL
console.log("BASE_URL", APP_URL)
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    
  }
});

export default Api;