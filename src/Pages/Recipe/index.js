import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { Container, Picture, Title, DescriptionBox, Content } from './styles';
import ProfileCard from '../../Components/ProfileCard';
import api from '../../Services/api';

export default class Recipe extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		user: {
			name: '',
			created_at: '',
			recipes: []
		},
		recipe: {
			name: '',
			description: '',
			portion: '',
			time: 0
		}
	};

	async getUser() {
		api.get('/find_user/' + user.id).then(response => {
			console.log(response);
			this.setState({
				user: response.data
			});
		});
	}

	async getRecipe() {
		AsyncStorage.getItem('openedRecipe').then(response => {
			console.log(response);
			this.setState({
				recipe: response.data
			});
		});
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.getUser();
		this.getRecipe();
	}

	render() {
		return (
			<Container>
				<Content>
					<Picture
						source={
							this.state.recipe['has_picture']
								? `https://cookdinnerapi.herokuapp.com/get_recipe_pic/${
										this.state.recipe.id
								  }`
								: require('../../Assets/food_default.png')
						}
					/>
					<Title>{this.state.recipe.name}</Title>
				</Content>
				<ProfileCard user={this.state.user} />
				<DescriptionBox>{this.state.recipe.description}</DescriptionBox>
			</Container>
		);
	}
}
