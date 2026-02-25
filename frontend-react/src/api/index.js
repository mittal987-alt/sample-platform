import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // This points to your local Python backend
});

export default api;