import React, { Component } from 'react';
import { Switch, AsyncStorage } from 'react-native';

import PicPopUp from '../PicPopUp';
import api from '../../Services/api';
import {
	Container,
	ConfigCard,
	ConfigText,
	LogOutButton,
	LogOutText,
	AvatarContainer,
	AvatarImage,
	ChooseFileButton
} from './styles';

export default class Menu extends Component {
	static navigationsOptions = {
		header: null
	};

	state = {
		modalVisible: false
	};

	constructor(props) {
		super(props);
		this.onControlChange = this.onControlChange.bind(this);
	}

	componentDidMount() {
		this.getPic();
	}

	onControlChange(value) {
		this.props.setDarkMode(!this.props.getDarkMode());
	}

	isModalVisible() {
		return this.state.modalVisible;
	}

	async getPic() {
		api.get('/cred').then(response => {
			this.setState({
				uri: `https://cookdinnerapi.herokuapp.com/get_pic/${response.Id}`
			});
		});
	}

	render() {
		return (
			<>
				<Container pointerEvents={this.state.modalVisible ? 'none' : 'auto'}>
					<AvatarContainer>
						<ChooseFileButton
							onPress={() => this.setState({ modalVisible: true })}
						>
							<AvatarImage source={{ uri: this.state.uri }} />
						</ChooseFileButton>
					</AvatarContainer>

					<ConfigCard>
						<ConfigText>
							Dark mode: {this.props.getDarkMode() ? 'on' : 'off'}
						</ConfigText>
						<Switch
							style={{
								alignSelf: 'center',
								marginLeft: 'auto',
								marginRight: 10
							}}
							value={this.props.getDarkMode()}
							onValueChange={this.onControlChange}
						/>
					</ConfigCard>

					<LogOutButton
						onPress={() => {
							AsyncStorage.removeItem('token');
							this.props.navigation.navigate('SignIn');
						}}
					>
						<LogOutText>Sair</LogOutText>
					</LogOutButton>
				</Container>
				<PicPopUp
					visible={this.state.modalVisible}
					onClose={() => this.setState({ modalVisible: false })}
				/>
			</>
		);
	}
}
