import React, { Component } from 'react';
import { Switch, AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';

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
		modalVisible: false,
		uri: '',
		userHasPic: false
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
		console.log('entrou');
		const response = await api.get('/cred');
		const user = await api.get('/find_user/' + response.id);
		console.log(response, user);
	}

	chooseFile = () => {
		var options = {
			title: 'Escolha uma imagem',
			cancelButtonTitle: 'Cancelar',
			takePhotoButtonTitle: 'Tirar Foto...',
			chooseFromLibraryButtonTitle: 'Escolher da Galeria...',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};
		ImagePicker.showImagePicker(options, response => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else {
				this.setState({
					uri: response.uri,
					userHasPic: true
				});
				this.uploadPic(response);
			}
		});
	};

	uploadPic(pic) {
		let form = new FormData();
		form.append('picture', {
			uri: pic.uri,
			type: pic.type,
			name: pic.fileName
		});
		api.post('/pic', form);
	}

	render() {
		return (
			<>
				<Container pointerEvents={this.state.modalVisible ? 'none' : 'auto'}>
					<AvatarContainer>
						<ChooseFileButton onPress={() => this.chooseFile()}>
							<AvatarImage
								source={
									this.state.userHasPic
										? { uri: this.state.uri }
										: require('../../Assets/profile.png')
								}
							/>
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
							AsyncStorage.removeItem('username').then(
								AsyncStorage.removeItem('password').then(() =>
									this.props.nav('SignIn')
								)
							);
						}}
					>
						<LogOutText>Sair</LogOutText>
					</LogOutButton>
				</Container>
				<PicPopUp
					visible={this.state.modalVisible}
					onClose={() => this.setState({ modalVisible: false })}
					type="user"
					onFinished={() => {}}
				/>
			</>
		);
	}
}
