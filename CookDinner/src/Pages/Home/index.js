import React from 'react';
<<<<<<< HEAD
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-fa-icons';

import Container from './Styles';
import TopBar from '../../Components/TopBar'
import Feed from '../../Components/Feed'
import Tabs from '../../Components/Tabs'


export default function Home() {
    var navigationOptions = { header: null };
    var search = '';
    return (
    <Container>
        <TopBar />
        <Feed />
        <Tabs/>
    </Container>
    );
=======
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, TopBar, SearchBar, NewRecipeButton } from './styles';
import Feed from '../../Components/Feed';
import Tabs from '../../Components/Tabs';

export default class Home extends React.Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { search: '' };
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

            <Feed />
            <Tabs screen='Home' nav={this.props.navigation.navigate}/>
        </Container>
    );
  }
>>>>>>> 3611675ffc5cc255ef0a758b55f0c87a53c94d20
}
