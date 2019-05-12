import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { sha256 } from 'react-native-sha256';
import { Switch } from 'react-native-gesture-handler';

import Home from '../Home';
import Logo from '../../Components/Logo';
import { Container, Content, TextBox, 
        LoginButtonContainer, LoginButtonText, LoginButton,
        RemindMeContainer, RemindMeText,
        NoAccountContainer, NoAccountText, NoAccountButton } from './styles';

export default class Login extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.fs = require('fs');
        this.state = {username: '', password: '', remindMe: false};
        this.onControlChange = this.onControlChange.bind(this);

        this.fs.exists('../../Data/user.json', function(exists){
            if(exists){
                fs.readFile('../../Data/user.json', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                    this.state = JSON.parse(data);
                    this.state.password = '';
                    }
                });
            }
        });
    }


    onControlChange(value) {
        return this.setState({
            remindMe: !this.state.remindMe
        });
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
            password: sha256(pass)
        })
    });

        await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
        await AsyncStorage.setItem('Client', response.headers.map['client']);
        await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
        await AsyncStorage.setItem('Uid', response.headers.map['uid']);
        

        if(response.status === 200){
            if(this.remindMe){
                this.fs.writeFile('../../Data/user.json', JSON.stringify(this.state));
            }
            this.props.navigation.navigate('App');
        } else {
            alert("Usuário ou senha inválidos!");
        }

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

                    <RemindMeContainer>
                        <RemindMeText>Lembrar-me</RemindMeText>
                        <Switch style={{alignSelf: 'center'}}
                                value={ this.state.remindMe }
                                onValueChange={this.onControlChange}
                        />
                    </RemindMeContainer>

                    <NoAccountContainer>
                        <NoAccountButton
                            onPress={() => this.props.navigation.navigate("Register")}>
                            <NoAccountText>Não possui uma conta?</NoAccountText>
                        </NoAccountButton>
                    </NoAccountContainer>

                </Content>

            </Container>

        );}

    }
