import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TouchableHighlight } from 'react-native';

import Home from '../Home';
import Logo from '../../Components/Logo';
import {Container, Content , TextBox,
        LoginButton, LoginButtonText, LoginButtonContainer,
        NoAccountContainer, NoAccountText} from './styles';

export default class Login extends React.Component {

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
        <Container behavior='padding'>
            <Logo />
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
                        underlayColor='#222'
                    >
                        <LoginButtonText>Logar</LoginButtonText>
                    </LoginButton>
                </LoginButtonContainer>

                <NoAccountContainer>
                    <TouchableHighlight onPress={() => this.props.navigation.replace('Cadastro')}>
                        <NoAccountText>Ainda não possui conta? Clique aqui!</NoAccountText>
                    </TouchableHighlight>
                </NoAccountContainer>

            </Content>
      </Container>
    );
    }

}
