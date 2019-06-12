import React, { Component } from 'react';

import { Modal } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

import { Container, Content, ButtonText, ModalContainer, Line } from './styles';
import api from '../../Services/api';
import Icon from 'react-native-fa-icons';

export default class PicPopUp extends Component {
	constructor(props) {
		super(props);
	}

	chooseFile(type) {
		if (type == 'take') {
			ImageCropPicker.openCamera({
				width: 150,
				height: 150,
				cropping: true
			}).then(image => {
				this.uploadPic(image);
			});
		} else if (type == 'choose') {
			ImageCropPicker.openPicker({
				width: 150,
				height: 150,
				cropping: true
			}).then(image => {
				this.uploadPic(image);
			});
		}
		this.props.onClose();
	}

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
