import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, Picture, Title, Grade, FavButton } from './styles';

export default class FeedCard extends Component {

	constructor(props){
		super(props);
	}

	openRecipe(){
		AsyncStorage.setItem('openedRecipe', JSON.stringify(this.props.recipe))
		.then(this.props.navigation.navigate('Recipe'));
	}


	render() {
		return (
			<Container onPress={() => {this.openRecipe}}>
				<Picture source={require('../../Assets/comida.png')} />
				<Title>{this.props.recipe.Nome}</Title>

				<FavButton onPress={() => alert('é like like like')}>
					<Icon name='heart' style={{ fontSize: 30, color: '#888' }} />
				</FavButton>

				<Grade>{`${Math.round(100 * 3) / 100.0}`}</Grade>
			</Container>
		);
	}
}