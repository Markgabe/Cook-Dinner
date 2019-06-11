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
		loading: false
	};

	constructor(props) {
		super(props);
		setInterval(() => {
			this.setState({
				expired: true
			});
		}, 10000);
	}

	async validar() {
		api.get('/cred').then(response => {
			this.setState({
				loading: false
			});
			if (this.state.expired) return;

			if (response.status == 200) {
				this.props.navigation.navigate('App');
				return;
			}
			AsyncStorage.removeItem('token');
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
		if (this.state.expired) {
			alert('Não foi possível conectar ao servidor');
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
