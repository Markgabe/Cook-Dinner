import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';

export default class Profile extends Component{

    static navigationOptions = { header: null };
    
    async requestUser(){
        var token = await AsyncStorage.getItem('token');
        var userID = await AsyncStorage.getItem('openendProfile');
        var response = await fetch('https://cookdinnerapi.herokuapp.com/loremipsum', {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${token}`
            },
            body:{

            }
        });
        var user = "{'Nome': 'Carlinhos'}";
        return JSON.parse(user);
    }
    
    constructor(props){
        super(props);
        this.user = this.requestUser();
    }

    render(){

        return(
            <Text>{this.user.Nome}</Text>
        );
    }

}