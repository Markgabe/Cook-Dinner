import React, { Component } from 'react';

import { Modal, AsyncStorage } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

import { Container, Content, ButtonText, ModalContainer, Line } from './styles';
import api from '../../Services/api';

export default class PicPopUp extends Component {
	constructor(props) {
		super(props);
	}

	async chooseFile(type) {
		let image;
		if (type == 'take') {
			image = await ImageCropPicker.openCamera({
				width: 150,
				height: 150,
				cropping: true
			});
		} else if (type == 'choose') {
			image = await ImageCropPicker.openPicker({
				width: 150,
				height: 150,
				cropping: true
			});
		}
		this.uploadPic(image);
		this.props.onClose();
	}

	uploadPic(pic) {
		let form = new FormData();
		form.append('picture', {
			uri: pic.uri,
			type: pic.type,
			name: pic.fileName
		});
		if (this.props.type == 'user') {
			api.post('/pic', form);
		} else {
			AsyncStorage.setItem('image', JSON.stringify(pic)).then(() =>
				this.props.onFinished()
			);
		}
	}

	render() {
		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.props.visible}
				onRequestClose={() => {
					this.props.onClose();
				}}
				onDismiss={() => {
					this.props.onClose();
				}}
			>
				<ModalContainer>
					<Container>
						<Content onPress={() => this.chooseFile('take')}>
							<ButtonText>Tirar foto</ButtonText>
						</Content>
						<Line />
						<Content onPress={() => this.chooseFile('choose')}>
							<ButtonText>Escolher da galeria</ButtonText>
						</Content>
					</Container>
				</ModalContainer>
			</Modal>
		);
	}
}
