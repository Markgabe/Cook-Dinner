import React from 'react';

import Card from '../Card';
import { Container } from './styles';

const renderRecipe = ({ item }) => (
    <Card recipe={item}/>
);

export default function Feed(arrayRecipes){
    
    return(
        <Container 
        data={arrayRecipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.id}/>
    );
}
