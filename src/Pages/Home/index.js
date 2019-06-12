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
		screen: 1,
		darkMode: false
	};

	constructor(props) {
		super(props);
		this.goToScreen = this.goToScreen.bind(this);
		this.setDarkMode = this.setDarkMode.bind(this);
	}

	componentDidMount() {
		this.loadDarkMode();
	}

	async loadDarkMode() {
		AsyncStorage.getItem('darkMode').then((err, data) => {
			if (!err) {
				this.setState({
					darkMode: Boolean(data)
				});
			}
		});
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
						initialScrollIndex={1}
						onMomentumScrollEnd={event => {
							this.setState({
								screen: Math.round(event.nativeEvent.contentOffset.x / wp(100))
							});
						}}
						ref={input => {
							this.scroll = input;
						}}
						data={[
							<QRScreen />,
							<Feed />,
							<Notifications />,
							<Menu
								getDarkMode={() => this.state.darkMode}
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
