import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Logo from '../../Components/Logo';
import { Container, Indicator } from './styles';
import api from '../../Services/api';

export default class AuthLoadingScreen extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		expired: false,
		didRequest: false,
		loading: false,
		time: 0
	};

	constructor(props) {
		super(props);

		setInterval(() => {
			this.setState({
				time: this.state.time + 1000
			});
		}, 1000);
	}

	async validar() {
		let user, pass;
		let keys = await AsyncStorage.getAllKeys();
		if (keys.includes('username') && keys.includes('password')) {
			user = await AsyncStorage.getItem('username');
			pass = await AsyncStorage.getItem('password');
		} else {
			this.props.navigation.navigate('SignIn');
			return;
		}

		api
			.post('/login', {
				username: user,
				password: pass
			})
			.then(response => {
				if (this.state.time >= 15000) return;
				this.setState({
					loading: false
				});
				if (response.status == 200) {
					api.defaults.headers.common['Authorization'] =
						response.data['access-token'];

					this.props.navigation.navigate('App');
					return;
				}
				this.props.navigation.navigate('SignIn');
			})
			.catch(err => {
				alert('Não foi possível conectar ao servidor');
				this.props.navigation.navigate('SignIn');
			});
	}

	componentDidMount() {
		this.setState({
			loading: true
		});
		this.validar();
	}

	render() {
		if (this.state.time >= 15000) {
			this.props.navigation.navigate('SignIn');
		}

		return (
			<Container>
				<Logo />
				<Indicator size={64} color="#4f5968" animating={this.state.loading} />
			</Container>
		);
	}
}
