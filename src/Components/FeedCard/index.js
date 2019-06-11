import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Icon from 'react-native-fa-icons';

import { Container, Picture, Title, Grade, FavButton } from './styles';

export default class FeedCard extends Component {

	constructor(props){
		super(props);
	}

	openRecipe(){
		AsyncStorage.setItem('openedRecipe', JSON.stringify(this.props.recipe)).then(() => {
			this.props.navigation.navigate('Recipe')
		});
	}

	likeRecipe(){
		alert('é like like like');
	}

	render() {
		return (
			<Container onPress={() => {this.openRecipe}}>
				<Picture source={this.props.recipe['has_picture'] ? { uri: `https://cookdinnerapi.herokuapp.com/get_recipe_pic/${this.props.recipe.id}`} : require('../../Assets/food_default.png')} />
				<Title>{this.props.recipe.name}</Title>

				<FavButton onPress={() => this.likeRecipe()}>
					<Icon name='heart' style={{ fontSize: 30, color: '#888' }} />
				</FavButton>

				<Grade>{`${Math.round(100 * 3) / 100.0}`}</Grade>
			</Container>
		);
	}
}