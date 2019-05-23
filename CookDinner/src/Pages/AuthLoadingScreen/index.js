import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Logo from '../../Components/Logo';
import { Container } from './styles';

export default class AuthLoadingScreen extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {token: '', remindMe: false};
        AsyncStorage.getItem('Token', (err, data) => {
            (!err) ? this.state.token = data : this.props.navigation.navigate('Login')
        })
    }

    async validar() {

        const response = await fetch('https://cookdinnerapi2.herokuapp.com/recipes', {
            method: "POST",
            header: {
                Authorization: 'Bearer ${this.state.token}'
            }
        });
    
        //AsyncStorage.setItem('Token', response.headers.map['access-token']);

        try{
            this.state.remindMe = await AsyncStorage.getItem('RemindMe');
            if(response.status === 200 && this.state.remindMe){ 
                this.props.navigation.navigate("App");
            }
        } catch(err){
            alert(err);
        } finally {
            AsyncStorage.setItem('Token', 0);
            this.props.navigation.navigate('SignIn');
        }
    }
    
    render(){
        this.validar();
        return(
            <Container>
                <Logo />
            </Container>
        );
    }
}