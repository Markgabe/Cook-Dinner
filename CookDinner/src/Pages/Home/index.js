import React from 'react';
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
}
