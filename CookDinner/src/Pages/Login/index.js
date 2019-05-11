import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Home from '../Home';
import Logo from '../../Components/Logo';
import { Container, Content, TextBox, LoginButtonContainer, LoginButtonText, LoginButton } from './styles';

export default class Login extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { username: '', password: ''};
    }

    async validar(user, pass) {

    const response = await fetch('https://receitas-dos-leks.herokuapp.com/auth/sign_in', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user,
            password: pass
        })
    });

        await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
        await AsyncStorage.setItem('Client', response.headers.map['client']);
        await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
        await AsyncStorage.setItem('Uid', response.headers.map['uid']);

        (response.status === 200) ? this.props.navigation.replace("Home") : alert("Usuário inválido!");

    }

    render() {
        return (
            <Container>

                <Logo/>

                <Content>

                    <TextBox
                        placeholder="E-mail"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />

                    <TextBox
                        placeholder="Senha"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry = {true}
                    />

                    <LoginButtonContainer>
                        <LoginButton
                            onPress={() => this.validar(this.state.username, this.state.password)}
                            underlayColor='#222'>
                            <LoginButtonText>Logar</LoginButtonText>
                        </LoginButton>
                    </LoginButtonContainer>

                    <NoAccountContainer>
                        <NoAccountButton
                            onPress={() => this.props.navigation.navigate("Cadastro")}>
                            <NoAccountText>Não possui uma conta?</NoAccountText>
                        </NoAccountButton>
                    </NoAccountContainer>

                </Content>

            </Container>

        );}

    }
