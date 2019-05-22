/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Picture, Title, Grade } from './styles';

export default function Card({recipe}){
	return(
		<Container>
			<Picture source={recipe.picture}/>
			<Title>{recipe.name}</Title>
            <Icon name='heart' style={{ alignSelf: 'flex-start', marginLeft: 'auto', fontWeight: 'bold', fontSize: 15, color: (recipe.fav ? '#F33' : '#888')}} />
            <Grade>{'${Math.round(100*recipe.grade)/100.0}'}</Grade>
		</Container>
	);
}