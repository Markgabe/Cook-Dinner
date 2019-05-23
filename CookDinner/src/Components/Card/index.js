/* eslint-disable no-unused-vars */
import React from 'react';
import {Image} from 'react-native';
import { Container, Picture, Title, Grade } from './styles';
import Icon from 'react-native-fa-icons';

export default function Card({recipe}){

	return(
		<Container>
			<Picture source={require('../../Assets/comida.png')}/>
			<Title>{recipe.Nome}</Title>
            <Icon name='heart' style={{ marginTop: 10, alignSelf: 'flex-start', marginLeft: 'auto', fontSize: 15, color: '#888'}} />
            <Grade>{`${Math.round(100*3)/100.0}`}</Grade>
		</Container>
	);
}