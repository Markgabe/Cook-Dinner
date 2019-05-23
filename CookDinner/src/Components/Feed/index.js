import React from 'react';
import {Text, ListView, FlatList} from 'react-native';

import Card from '../Card';
import { Container } from './styles';

const renderRecipe = ({ item }) => (
    <Text>{item.Nome}</Text>
);

export default function Feed(arrayRecipes){
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return(
        <FlatList
                data={arrayRecipes}
                renderItem={({item}) => <Text>{item.Nome}</Text>}
        />
    );
}
