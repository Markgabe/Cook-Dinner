import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, TopBar, SearchBar, NewRecipeButton } from './styles';
import FeedCard from '../FeedCard';

export default function Feed({searchValue, arrayRecipes, nav}) {

    return (
        <Container>
            <TopBar>
                <SearchBar
                    placeholder='Pesquisar'
                    onChangeText={(search) => requestSearch(search)}
                    value={searchValue}
                />
                <NewRecipeButton onPress={() => nav('NewRecipe')}>
                    <Icon name='plus-circle' style={{fontSize:40, color:'#FFF'}} />
                </NewRecipeButton>
            </TopBar>

            <FlatList
                data={arrayRecipes}
                renderItem={({item}) => <FeedCard recipe={item}/>}
            />
        </Container>
    );
}
