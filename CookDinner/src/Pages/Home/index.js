import React, { Component } from 'react';
import { AsyncStorage, FlatList } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Feed from '../../Components/Feed';
import QRScreen from '../../Components/QRScreen';
import Notifications from '../../Components/Notifications';
import Menu from '../../Components/Menu';
import Tabs from '../../Components/Tabs';
import api from '../../Services/api';

export default class Home extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		screen: 0,
		darkMode: false,
		search: '',
		arrayRecipes: []
	};

	constructor(props) {
		super(props);
		this.goToScreen = this.goToScreen.bind(this);
		this.getDarkMode = this.getDarkMode.bind(this);
		this.setDarkMode = this.setDarkMode.bind(this);
	}

	componentDidMount() {
		this.getRecipes();
		this.getDarkMode();
	}

	async getDarkMode() {
		AsyncStorage.getItem('darkMode').then((err, data) => {
			if (!err) {
				this.setState({
					darkMode: Boolean(data)
				});
			}
		});
	}

	async getRecipes() {
		api.get('/recipes').then(response => {
			this.setState({ recipes: response.data });
		});
	}

	async getSearch(search) {
		api.get('/search/' + search).then(response => {
			this.setState({
				arrayRecipes: [{ Nome: 'piroca', Descrição: 'pesquisei' }]
			});
		});
	}

	getDarkMode() {
		return this.state.darkMode;
	}

	setDarkMode(value) {
		this.setState({
			darkMode: value
		});
		AsyncStorage.setItem('darkMode', String(value));
	}

	goToScreen(screen) {
		this.setState({
			screen: screen
		});
		this.scroll.scrollToIndex({
			index: screen,
			animated: true
		});
	}

	render() {
		return (
			<>
				<>
					<FlatList
						style={{
							width: wp(100)
						}}
						showsHorizontalScrollIndicator={false}
						horizontal={true}
						directionalLockEnabled={true}
						pagingEnabled={true}
						onMomentumScrollEnd={event => {
							this.setState({
								screen: Math.round(event.nativeEvent.contentOffset.x / wp(100))
							});
						}}
						ref={input => {
							this.scroll = input;
						}}
						data={[
							<Feed
								searchValue={this.state.search}
								arrayRecipes={this.arrayRecipes}
								requestSearch={this.getSearch}
								nav={this.props.navigation.navigate}
							/>,
							<Notifications />,
							<QRScreen />,
							<Menu
								getDarkMode={this.getDarkMode}
								setDarkMode={this.setDarkMode}
							/>
						]}
						renderItem={({ item }) => item}
					/>
				</>
				<Tabs screen={this.state.screen} goToScreen={this.goToScreen} />
			</>
		);
	}
}
