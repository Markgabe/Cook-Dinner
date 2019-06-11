import React, { Component } from 'react';
import { Switch, AsyncStorage } from 'react-native';

//import PicPopUp from '../PicPopUp';
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
import api from '../../Services/api';

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

	setModalVisible(bool) {
		this.setState({
			modalVisible: bool
		});
	}

	onControlChange(value) {
		this.props.setDarkMode(!this.props.getDarkMode());
	}

	async getPic() {
		api.get('/cred').then(response => {
			this.setState({
				uri: `https://cookdinnerapi.herokuapp.com/getpic/${response.Id}`
			});
		});
	}

	render() {
		return (
			<Container>
				<AvatarContainer>
					<ChooseFileButton onPress={() => this.setModalVisible(true)}>
						<AvatarImage source={{ uri: this.state.uri }} />
					</ChooseFileButton>
				</AvatarContainer>

				<ConfigCard>
					<ConfigText>
						Dark mode: {this.props.getDarkMode() ? 'on' : 'off'}
					</ConfigText>
					<Switch
						style={{ alignSelf: 'center', marginLeft: 'auto', marginRight: 10 }}
						value={this.props.getDarkMode()}
						onValueChange={this.onControlChange}
					/>
				</ConfigCard>

				<LogOutButton
					onPress={() => {
						AsyncStorage.setItem('token', '0');
						this.props.navigation.navigate('SignIn');
					}}
				>
					<LogOutText>Sair</LogOutText>
				</LogOutButton>
			</Container>
		);
	}
}
