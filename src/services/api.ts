import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test-frontend-developer.s3.amazonaws.com/data',
});

export default api;