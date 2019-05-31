import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { sha256 } from 'react-native-sha256';
import { Switch } from 'react-native-gesture-handler';

import Logo from '../../Components/Logo';
import {
    Container, Content, TextBox,
    LoginButtonContainer, LoginButtonText, LoginButton,
    NoAccountContainer, NoAccountText, NoAccountButton
} from './styles';

export default class Login extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    async validar(user, pass) {

        const response = await fetch('https://cookdinnerapi.herokuapp.com/login', {
            method: "POST",
            body: JSON.stringify({
                email: user,
                senha: String(sha256(pass))
            })
        });
        const json = await response.json();
        const token = json['access-token'];

        await AsyncStorage.setItem('token', token);

        (response.status == 200) ? this.props.navigation.navigate('App') : alert("Usuário ou senha inválidos!");

    }

    render() {
        return (
            <Container>

                <Logo />

                <Content behavior='padding' enabled>

                    <TextBox
                        placeholder="Usuário"
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                    />

                    <TextBox
                        placeholder="Senha"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                    />

                    <LoginButtonContainer>
                        <LoginButton
                            onPress={() => this.validar(this.state.username, this.state.password)}
                            underlayColor='#222'>
                            <LoginButtonText>Logar</LoginButtonText>
                        </LoginButton>
                    </LoginButtonContainer>

                </Content>
                <NoAccountContainer>
                    <NoAccountButton
                        onPress={() => this.props.navigation.navigate("Register")}>
                        <NoAccountText>Não possui uma conta?</NoAccountText>
                    </NoAccountButton>
                </NoAccountContainer>
            </Container>

        );
    }

}
