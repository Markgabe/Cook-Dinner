import axios from 'axios';
import { AsyncStorage } from 'react-native'

function getToken(){
	let token = '';
    AsyncStorage.getItem('token', (err, data) => {
		if(!err) token = data;
	});
    return token;
}

axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();
const api = axios.create({
	baseURL: "https://cookdinnerapi.herokuapp.com"
});

export default api;