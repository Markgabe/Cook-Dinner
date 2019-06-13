import axios from 'axios';

const api = axios.create({
	baseURL: 'https://cookdinnerapi.herokuapp.com'
});

export default api;
