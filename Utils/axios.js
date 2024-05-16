import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // Base URL for all requests

});

export default axiosInstance


