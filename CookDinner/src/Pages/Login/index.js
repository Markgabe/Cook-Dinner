import React, { Component } from 'react';
import { AsyncStorage, Keyboard } from 'react-native';
import { sha256 } from 'react-native-sha256';

import api from '../../Services/api';
import Logo from '../../Components/Logo';
import {
	Container,
	Content,
	TextBox,
	LoginButtonContainer,
	LoginButtonText,
	LoginButton,
	NoAccountContainer,
	NoAccountText,
	NoAccountButton,
	Indicator
} from './styles';

export default class Login extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		username: '',
		password: '',
		loading: false
	};

	constructor(props) {
		super(props);
	}

	async validar() {
		this.setState({
			loading: true
		});
		api
			.post('/login', {
				username: this.state.username,
				password: String(sha256(this.state.password))
			})
			.then(response => {
				this.setState({
					loading: false
				});

				switch (response.status) {
					case 200:
						AsyncStorage.setItem('token', response.data['access-token']);
						this.props.navigation.navigate('App');
						break;
					case 400:
						alert('Por favor preencha todos os campos');
						break;
					case 401:
						alert('Usuário ou senha inválidos');
						break;
				}
			});
	}

	render() {
		return (
			<Container
				style={{
					opacity: this.state.loading ? 0.5 : 1
				}}
				pointerEvents={this.state.loading ? 'none' : 'auto'}
			>
				<Indicator
					animating={this.state.loading}
					size={this.state.loading ? 64 : 0}
					color="#4f5968"
				/>

				<Logo />

				<Content behavior="padding" enabled>
					<TextBox
						placeholder="Usuário"
						onChangeText={username => this.setState({ username })}
						returnKeyType="next"
						autoCapitalize="none"
						value={this.state.username}
						autoCorrect={false}
						onSubmitEditing={() => {
							this.secondTextInput.focus();
						}}
						blurOnSubmit={false}
					/>

					<TextBox
						placeholder="Senha"
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
						secureTextEntry={true}
						returnKeyType="send"
						autoCapitalize="none"
						autoCorrect={false}
						ref={input => {
							this.secondTextInput = input;
						}}
						onSubmitEditing={() => {
							this.validar();
						}}
					/>

					<LoginButtonContainer>
						<LoginButton
							onPress={() => {
								Keyboard.dismiss();
								this.validar();
							}}
							underlayColor="#222"
						>
							<LoginButtonText>Logar</LoginButtonText>
						</LoginButton>
					</LoginButtonContainer>
				</Content>
				<NoAccountContainer>
					<NoAccountButton
						onPress={() => this.props.navigation.navigate('Register')}
					>
						<NoAccountText>Não possui uma conta?</NoAccountText>
					</NoAccountButton>
				</NoAccountContainer>
			</Container>
		);
	}
}
