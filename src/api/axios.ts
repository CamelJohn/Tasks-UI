import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/API/v1/web-app/',
});

export default API;