import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { Container, Picture, Title, DescriptionBox, Content } from './styles';
import ProfileCard from '../../Components/ProfileCard';

export default class Recipe extends Component{

    static navigationOptions = { header: null };
    
    async requestUser(){
        var token = await AsyncStorage.getItem('token');
        var response = await fetch('https://cookdinnerapi.herokuapp.com/loremipsum', {
            method:'GET',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body:{

            }
        })
        var user = {Nome: 'Carlos'};
        return user;
    }

    async getRecipe(){
        var recipe = await AsyncStorage.getItem('openedRecipe');
        return JSON.parse(recipe);
    }

    constructor(props){
        super(props);
        this.user = this.requestUser();
        this.recipe = this.getRecipe();
    }

    render(){
        
        return(
            <Container>
                <Content>
                    <Picture source={require('../../Assets/comida.png')} />
                    <Title>
                        {this.recipe.Nome}
                    </Title>
                </Content>
                <ProfileCard user={this.user} nav={this.props.navigation.navigate} />
                <DescriptionBox>
                    {this.recipe.Descrição}
                </DescriptionBox>
            </Container>
        );
    }

}