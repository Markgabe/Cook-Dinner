import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Logo from '../../Components/Logo';
import { Container } from './styles';

export default class AuthLoadingScreen extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {time: 0, didRequest: false}

        setInterval(() => {this.setState({ time: this.state.time + 1000 })}, 1000)
    }

    async validar() {

        const tokenAuth = await AsyncStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", tokenAuth);
        const response = await fetch('https://cookdinnerapi.herokuapp.com/recipes', {
            method: "GET",
            headers: myHeaders
        });
        if(this.state.time >= 10000) return;

        if(response.status == 200){
            this.props.navigation.navigate("App");
            return;
        }

        AsyncStorage.setItem('token', 0);
        this.props.navigation.navigate('SignIn');   
    }

    render(){
        if(this.state.time >= 10000) {
            alert('Não foi possível conectar ao servidor');
            this.props.navigation.navigate('SignIn');
        }
        if(!this.state.didRequest){
            this.setState({didRequest: true });
            this.validar(this.state.time);
        }
        return(
            <Container>
                <Logo />
            </Container>
        );
    }
}
