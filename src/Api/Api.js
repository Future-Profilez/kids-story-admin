import axios from 'axios';


const APP_URL = process.env.REACT_APP_URL
const tokens = "5|CG3zku8Y8MoVelrPtxy4Kw06FtKzKBel5Pnu8PPYbfe9c96f"
console.log("BASE_URL", APP_URL)
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${tokens}`
  }
});

export default Api;