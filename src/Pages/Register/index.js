import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { sha256 } from 'react-native-sha256';

import Logo from '../../Components/Logo';
import api from '../../Services/api';
import {
	Container,
	Content,
	TextBox,
	RegisterButton,
	RegisterButtonText,
	RegisterButtonContainer,
	HasAccountText,
	HasAccountButton,
	HasAccountContainer,
	Indicator
} from './styles';

export default class Register extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		username: '',
		password: '',
		name: '',
		loading: false
	};

	constructor(props) {
		super(props);
	}

	async cadastrar() {
		this.setState({
			loading: true
		});
		let response = await api.post('/sign_up', {
			username: this.state.username,
			password: String(sha256(this.state.password)),
			name: this.state.name
		});
		this.setState({
			loading: false
		});
		console.log(response);
		switch (response.status) {
			case 200:
				api.defaults.headers.common['Authorization'] =
					response.data['access-token'];
				await AsyncStorage.setItem('username', this.state.username);
				await AsyncStorage.setItem(
					'password',
					String(sha256(this.state.password))
				);

				this.props.navigation.navigate('App');
				break;
			case 400:
				alert('Preencha todos os campos para criar uma conta');
				break;
			case 401:
				alert('Login ou senha inválidos');
				break;
			default:
				alert('erro desconhecido, tente novamente mais tarde');
				break;
		}
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
						placeholder="Nome"
						onChangeText={name => this.setState({ name })}
						value={this.state.name}
						returnKeyType="next"
						autoCorrect={false}
						onSubmitEditing={() => {
							this.secondTextInput.focus();
						}}
						blurOnSubmit={false}
					/>

					<TextBox
						placeholder="Usuário"
						onChangeText={username => this.setState({ username })}
						value={this.state.username}
						ref={input => {
							this.secondTextInput = input;
						}}
						onSubmitEditing={() => {
							this.thirdTextInput.focus();
						}}
						returnKeyType="next"
						autoCapitalize="none"
						autoCorrect={false}
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
							this.thirdTextInput = input;
						}}
						onSubmitEditing={() => {
							this.cadastrar();
						}}
					/>

					<RegisterButtonContainer>
						<RegisterButton
							underlayColor="#222"
							onPress={() => {
								Keyboard.dismiss();
								this.cadastrar();
							}}
						>
							<RegisterButtonText>Enviar</RegisterButtonText>
						</RegisterButton>
					</RegisterButtonContainer>
				</Content>

				<HasAccountContainer>
					<HasAccountButton
						onPress={() => this.props.navigation.navigate('Login')}
					>
						<HasAccountText>Já possui uma conta?</HasAccountText>
					</HasAccountButton>
				</HasAccountContainer>
			</Container>
		);
	}
}
