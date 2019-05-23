import React, { Component } from 'react';
import { AsyncStorage, FlatList, Text } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, TopBar, SearchBar, NewRecipeButton } from './styles';
import Tabs from '../../Components/Tabs';
import FeedCard from '../../Components/FeedCard';

export default class Home extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { search: ''};
        this.arrayRecipes = [{Id: 0, Nome: "Miojo", Descrição: "leitinho poo", IdUser: 5}];
        this.request();
    }

    async request(){
        let token = await AsyncStorage.getItem('token');
        response = await fetch('https://cookdinnerapi.herokuapp.com/recipes', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(x => x.json()).then(x=>{
            for (i in x){
                this.arrayRecipes.push(x[i])
            }
        });
        console.log(this.arrayRecipes);

    }

    render() {
        return (

        <Container>
            <TopBar>
                <SearchBar
                    placeholder='Pesquisar'
                    onChangeText={(search) => this.setState({search})}
                    value={this.state.search}
                />
                <NewRecipeButton onPress={() => this.props.navigation.navigate('NewRecipe')}>
                    <Icon name='plus-circle' style={{fontSize:40, color:'#FFF'}} />
                </NewRecipeButton>
            </TopBar>
            <FlatList
                data={this.arrayRecipes}
                renderItem={({item}) => <FeedCard recipe={item} nav={this.props.navigation.navigate}/>}
            />
            <Tabs screen='Home' nav={this.props.navigation.navigate}/>
        </Container>
    );
  }
}
