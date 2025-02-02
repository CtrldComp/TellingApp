import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // For web
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

