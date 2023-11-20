import axios from 'axios';
const APP_URL = process.env.REACT_APP_URL

function getToken() {
  const data = localStorage && localStorage.getItem('token');
 // console.log("data", data);
  return data; 
}

//console.log("toker",getToken());
//console.log("BASE_URL", APP_URL);
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  }
});

Api.interceptors.request.use(
  async (config) => {
      const token = getToken();
      if (token !== null) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config; 
  },
  (error) => {
      return Promise.reject(error);
  }
);


export default Api;
