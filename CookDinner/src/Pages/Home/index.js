import React, { Component } from 'react';
import { AsyncStorage, FlatList } from 'react-native';
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
        this.token = AsyncStorage.getItem('token');
    }

    async request(){
        const response = await fetch('https://cookdinnerapi.herokuapp.com/recipes', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).then(x => x.json()).then(x=>{
            for (i in x){
                this.arrayRecipes.push(x[i])
            }
        });
    }

    async requestSearch(search){
        this.setState({search: search})
        const response = await fetch(`https://cookdinnerapi.herokuapp.com/search/${search}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).then(this.arrayRecipes = [{Nome: 'piroca', Descrição: 'pesquisei'}]);
    
    }

    render() {
        return (

        <Container>
            <TopBar>
                <SearchBar
                    placeholder='Pesquisar'
                    onChangeText={(search) => requestSearch(search)}
                    value={this.state.search}
                />
                <NewRecipeButton onPress={() => this.props.navigation.navigate('NewRecipe')}>
                    <Icon name='plus-circle' style={{fontSize:40, color:'#FFF'}} />
                </NewRecipeButton>
            </TopBar>

            <FlatList
                data={this.arrayRecipes}
                renderItem={({item}) => <FeedCard recipe={item}/>}
            />
            <Tabs screen='Home' nav={this.props.navigation.navigate} />
        </Container>
    );
  }
}
