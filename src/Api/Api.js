import axios from 'axios';


const APP_URL = process.env.REACT_APP_URL
const tokens = "69|UanKi5g3C4KpYvDhcuDNqKLS2soS0q3DjMNvcVts7f1804ad"
console.log("BASE_URL", APP_URL)
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${tokens}`
  }
});

export default Api;