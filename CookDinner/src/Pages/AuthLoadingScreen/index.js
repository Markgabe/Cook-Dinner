import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Logo from '../../Components/Logo';
import Container from './styles';

export default class AuthScreen extends Component{

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.fs = require('react-native-fs');
        this.state = {username: '', password: '', remindMe: false};

        this.fs.exists(this.fs.DocumentDirectoryPath + '/user.json', 'utf8', (exists) => {
            if(exists){
                this.fs.readFile(this.fs.DocumentDirectoryPath + '/user.json', 'utf8').then((result) => {
                    this.setState(JSON.parse(result));
                })
                .catch((err) => {
                    this.fs.writeFile(this.fs.DocumentDirectoryPath + '/user.json', JSON.stringify(this.state), 'utf8');
                });
            } else {
                this.fs.writeFile(this.fs.DocumentDirectoryPath + '/user.json', JSON.stringify(this.state), 'utf8');
            }
        })
        
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

        (response.status === 200) ? this.props.navigation.replace("App") : this.props.navigate("Login");
        
    }
    
        render(){
            this.validar(this.state.username, this.state.password);
            return(
                <Container>
                    <Logo />
                </Container>
            );
        }
}