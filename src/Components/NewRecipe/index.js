import React, { Component } from 'react';
import { Modal, AsyncStorage } from 'react-native';
import Icon from 'react-native-fa-icons';

import api from '../../Services/api';
import PicPopUp from '../PicPopUp';
import {
	Container,
	Bar,
	BackButton,
	SendButton,
	TitleInput,
	ImageInput,
	Header,
	DescriptionInput,
	RecipeImage,
	DescriptionBox
} from './styles';

export default class NewRecipe extends Component {
	state = {
		name: 'Nome da receita',
		description: 'Descreva os passos da sua receita',
		portion: '',
		time: 0,
		modalVisible: false,
		tookPicture: false,
		image: {
			uri: '../../Assets/food_default.png',
			type: 'image/png',
			name: 'food_default.png'
		}
	};

	constructor(props) {
		super(props);
	}

	async sendRecipe() {
		api
			.post('/new_recipe', {
				name: this.state.name,
				description: this.state.description,
				portion: this.state.portion,
				time: this.state.time
			})
			.then(response => {
				if (this.state.tookPicture) this.uploadPic(response.data.id);
				this.props.onCLose();
			})
			.catch(err => {
				alert('não foi possivel criar a receita');
				this.props.onClose();
			});
	}

	async uploadPic(id) {
		let form = new FormData();
		form.append('picture', {
			uri: pic.uri,
			type: pic.type,
			name: pic.fileName
		});
		api.post(`/set_recipe_pic/${id}`, form);
	}

	closeModal() {
		this.setState({
			modalVisible: false
		});
	}

	loadPic = async () => {
		AsyncStorage.getItem('image').then(image => {
			this.setState({
				image: JSON.parse(image),
				tookPicture: true
			});
			console.log(this.state);
		});
	};

	render() {
		return (
			<Modal
				animationType="slide"
				visible={this.props.visible}
				onRequestClose={() => {
					this.props.onClose();
				}}
				onDismiss={() => {
					this.props.onClose();
				}}
			>
				<Container>
					<Bar>
						<BackButton onPress={() => this.props.onClose()}>
							<Icon
								name="arrow-left"
								style={{ fontSize: 30, color: '#FFF', paddingLeft: 15 }}
							/>
						</BackButton>
						<SendButton onPress={() => this.sendRecipe()}>
							<Icon
								name="location-arrow"
								style={{
									fontSize: 30,
									color: '#FFF',
									marginLeft: 'auto',
									paddingRight: 15
								}}
							/>
						</SendButton>
					</Bar>
					<Header>
						<ImageInput
							onPress={() =>
								this.setState({
									modalVisible: true
								})
							}
						>
							<RecipeImage
								source={
									this.state.tookPicture
										? this.state.image.uri
										: require('../../Assets/food_default.png')
								}
							/>
						</ImageInput>
						<TitleInput
							placeholder="Nome da receita"
							onChangeText={name => this.setState({ name })}
							value={this.state.name}
							returnKeyType="next"
							onSubmitEditing={() => {
								this.secondTextInput.focus();
							}}
							blurOnSubmit={false}
						/>
					</Header>
					<DescriptionBox>
						<DescriptionInput
							placeholder="Nome"
							onChangeText={description => this.setState({ description })}
							value={this.state.description}
							returnKeyType="send"
							ref={input => {
								this.secondTextInput = input;
							}}
							onSubmitEditing={() => this.sendRecipe}
							blurOnSubmit={true}
						/>
					</DescriptionBox>
				</Container>
				<PicPopUp
					visible={this.state.modalVisible}
					onClose={() => this.closeModal()}
					onFinished={() => this.loadPic()}
					type="recipe"
				/>
			</Modal>
		);
	}
}
