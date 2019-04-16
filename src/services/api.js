import axios from 'axios'

const api = axios.create({ 
    baseURL: 'https://app-backend-boxes.herokuapp.com',
});

export default api;