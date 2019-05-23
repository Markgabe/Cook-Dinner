import React from 'react';
import { AsyncStorage } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, Picture, Title, Grade, FavButton } from './styles';

export default function FeedCard({recipe, nav}){

	return(
		<Container onPress={() => { AsyncStorage.setItem('openedRecipe', JSON.stringify(recipe)).then(nav('Recipe')); }}>
			<Picture source={require('../../Assets/comida.png')}/>
			<Title>{recipe.Nome}</Title>

			<FavButton onPress={() => alert('é like like like')}>
				<Icon name='heart' style={{fontSize: 30, color: '#888'}} />
            </FavButton>

            <Grade>{`${Math.round(100*3)/100.0}`}</Grade>
		</Container>
	);
}