import axios from 'axios';
const APP_URL = process.env.REACT_APP_URL
const tokens = localStorage.getItem('token');

//const tokens = "44|zChU4mwWUBq9LRmkdkRs9PuDNMEQM8QwY4PQb4Ci321363eb"
// const tokensss= useSelector(token())
console.log("toker",tokens)
console.log("BASE_URL", APP_URL)
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${tokens}`
  }
});

export default Api;