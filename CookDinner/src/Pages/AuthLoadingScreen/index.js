import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Logo from '../../Components/Logo';
import { Container } from './styles';

export default class AuthLoadingScreen extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {token: '', remindMe: false};
    }

    async validar() {
        const tokenAuth = await AsyncStorage.getItem('token');
        this.setState({token : tokenAuth});
        const remind = await AsyncStorage.getItem('remindMe');
        this.setState({remindMe : remind});
        var myHeaders = new Headers();
        myHeaders.append("Authorization", this.state.token);
        const response = await fetch('https://cookdinnerapi.herokuapp.com/recipes', {
            method: "GET",
            headers: myHeaders
        });
        console.log(this.state.remindMe);
        console.log(response.status);

        try{
            this.state.remindMe = await AsyncStorage.getItem('remindMe');
            if(response.status == 200 && this.state.remindMe){
                this.props.navigation.navigate("App");
            }
        } catch(err){
            alert(err);
        } finally {
            AsyncStorage.setItem('token', 0);
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
