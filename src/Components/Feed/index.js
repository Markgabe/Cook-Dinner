import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-fa-icons';

import {
	Container,
	TopBar,
	SearchBar,
	NewRecipeButton,
	EmptyText
} from './styles';
import FeedCard from '../FeedCard';

export default class Feed extends Component {
	state = {
		recipes: [],
		loading: false,
		search: ''
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.getRecipes();
	}

	async getRecipes() {
		this.setState({
			loading: true
		});
		api.get('/recipes').then(response => {
			this.setState({
				recipes: response.data,
				loading: false
			});
		});
	}

	async getSearch(search) {
		this.setState({
			loading: true,
			search: search
		});
		api.get('/search/' + search).then(response => {
			this.setState({
				recipes: [{ Nome: 'piroca', Descrição: 'pesquisei' }],
				loading: false
			});
		});
	}

	render() {
		return (
			<Container pointerEvents={this.state.loading ? 'none' : 'auto'}>
				<TopBar>
					<SearchBar
						placeholder="Pesquisar"
						onChangeText={search => this.getSearch(search)}
						value={this.state.search}
					/>
					<NewRecipeButton
						onPress={() => this.props.navigation.navigate('NewRecipe')}
					>
						<Icon name="plus-circle" style={{ fontSize: 40, color: '#FFF' }} />
					</NewRecipeButton>
				</TopBar>

				<FlatList
					style={{ opacity: this.state.loading ? 0.5 : 1 }}
					ListEmptyComponent={
						<EmptyText>
							Desculpe! Não conseguimos carregar nenhnuma receita :(
						</EmptyText>
					}
					data={this.state.recipes}
					renderItem={({ item }) => <FeedCard recipe={item} />}
				/>
			</Container>
		);
	}
}
