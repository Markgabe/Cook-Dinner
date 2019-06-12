import axios from 'axios';
import { AsyncStorage } from 'react-native';

function getToken() {
	AsyncStorage.getAllKeys().then(keys => {
		if (keys.includes('token')) {
			AsyncStorage.getItem('token').then(token => {
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			});
		}
	});
}

getToken();
const api = axios.create({
	baseURL: 'https://cookdinnerapi.herokuapp.com'
});

export default api;
