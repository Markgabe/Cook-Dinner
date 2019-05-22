import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, TopBar, SearchBar, NewRecipeButton } from './styles';
import Feed from '../../Components/Feed';
import Tabs from '../../Components/Tabs';

export default class Home extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { search: '', token: '', arrayRecipes: []};
        await AsyncStorage.getItem('Token', (err, data) => {this.state.token = data});
    }

    arrayRecipes = await fetch('https://receitas-dos-leks.herokuapp.com/recipes', {
        method: "GET",
        headers: {
            'Authorization': this.state.token
        }
    });

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

            <Feed arrayRecipes={this.state.arrayRecipes}/>
            <Tabs screen='Home' nav={this.props.navigation.navigate}/>
        </Container>
    );
  }
}
