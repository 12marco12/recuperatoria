import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/products', // URL base de la API
  timeout: 5000, // Tiempo de espera para las solicitudes
});

export default axiosInstance;