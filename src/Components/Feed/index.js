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
import NewRecipe from '../NewRecipe';
import api from '../../Services/api';

export default class Feed extends Component {
	state = {
		recipes: [],
		loading: false,
		search: '',
		modalVisible: false,
		searchFailure: false
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
				loading: false,
				searchFailure: false
			});
		});
	}

	async getSearch(search) {
		this.setState({
			loading: true,
			search: search
		});
		search = search.split(' ')[0];
		if (search == '') {
			this.getRecipes();
			return;
		}
		console.log(search.toLowerCase());
		api
			.get(`/recipes?search=${search.toLowerCase()}`)
			.then(response => {
				this.setState({
					recipes: response.data,
					loading: false,
					searchFailure: false
				});
			})
			.catch(err => {
				this.setState({
					loading: false,
					recipes: [],
					searchFailure: true
				});
			});
	}

	render() {
		return (
			<>
				<Container>
					<TopBar>
						<SearchBar
							placeholder="Pesquisar"
							onChangeText={search => this.getSearch(search)}
							value={this.state.search}
						/>
						<NewRecipeButton
							onPress={() =>
								this.setState({
									modalVisible: true
								})
							}
						>
							<Icon
								name="plus-circle"
								style={{ fontSize: 40, color: '#FFF' }}
							/>
						</NewRecipeButton>
					</TopBar>

					<FlatList
						pointerEvents={this.state.loading ? 'none' : 'auto'}
						style={{ opacity: this.state.loading ? 0.5 : 1 }}
						ListEmptyComponent={
							<EmptyText>
								{this.state.searchFailure
									? 'Nada encontrado :('
									: 'Não foi possível carregar o feed :('}
							</EmptyText>
						}
						data={this.state.recipes}
						renderItem={({ item }) => <FeedCard recipe={item} />}
					/>
				</Container>
				<NewRecipe
					visible={this.state.modalVisible}
					onClose={() => this.setState({ modalVisible: false })}
				/>
			</>
		);
	}
}
