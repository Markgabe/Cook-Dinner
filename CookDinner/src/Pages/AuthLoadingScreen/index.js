import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Logo from '../../Components/Logo';
import Container from './styles';

export default class AuthScreen extends Component{

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', token: '', remindMe: false};
        AsyncStorage.getItem('Token', (err, data) => {
            (!err) ? this.state.token = data : this.props.navigation.navigate('Login')
        })
    }

    async validar(user, pass) {

        const response = await fetch('https://receitas-dos-leks.herokuapp.com/recipes', {
            method: "POST",
            header: {
                Authorization: 'Bearer ${this.state.token}'
            }
        });
    
        await AsyncStorage.setItem('Token', response.headers.map['access-token']);
        await AsyncStorage.getItem('RemindMe', (err, data) => {
            (!err) ? this.state.remindMe = data : this.props.navigation.navigate('login')
        })
        if(response.status === 200 && this.state.remindMe){ 
            this.props.navigation.replace("App") 
        } else {
            AsyncStorage.setItem('Token', 0);
            this.props.navigation.navigate("Login");
        }
        
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