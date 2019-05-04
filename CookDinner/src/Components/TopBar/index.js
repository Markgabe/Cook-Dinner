import React from 'react';

import {Container, SearchBar, NewRecipe, NewRecipeIcon} from './Styles';

export default function TopBar() {
    return (
        <Container>
            <SearchBar
                placeholder="Pesquisar"
                onChangeText={(search) => this.setState({search})}
                value={this.state.search}
            />

            <NewRecipe onPress={() => this.props.navigation.navigate("NewRecipe")}>
                <Icon name='plus-circle' style={{fontSize: 36, color:'#FFF'}} />
            </NewRecipe>
        </Container>
    )
}
