import axios from 'axios';


const APP_URL = process.env.REACT_APP_URL
const tokens = "25|iVsLG88hJKjmAYQVunPfxPpjyeKtH7D6DlK6286F530612eb"
console.log("BASE_URL", APP_URL)
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${tokens}`
  }
});

export default Api;