import React from 'react';
import { Modal } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

import { Container, Content, ButtonText, TitleText } from './styles';
import api from '../../Services/api';

//FIXME:
export default function PicPopUp({ modalVisible, setModalVisible }) {
	function chooseFile(type) {
		let response = {
			fileName: 'profile.png',
			path: '../../Assets/profile.png',
			type: 'image/png',
			width: 150,
			height: 150
		};
		if ((type = 'take')) {
			ImageCropPicker.openCamera({
				width: 150,
				height: 150,
				cropping: true
			}).then(image => {
				response = { ...image };
			});
		} else if ((type = 'choose')) {
			ImageCropPicker.openPicker({
				width: 150,
				height: 150,
				cropping: true
			}).then(image => {
				response = { ...image };
			});
		}

		let form = new FormData();
		form.append('picture', {
			uri: response.uri,
			type: response.type,
			name: response.fileName
		});
		api.post('/pic', form);
		setModalVisible(false);
	}

	return (
		<Modal
			style={{
				zIndex: 2,
				position: 'absolute',
				alignSelf: 'center'
			}}
			animationType="slide"
			transparent={false}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(false);
			}}
			onDismiss={() => {
				setModalVisible(false);
			}}
		>
			<Container>
				<TitleText>Enviar foto</TitleText>
				<Content onPress={() => chooseFile('take')}>
					<ButtonText>Tirar foto</ButtonText>
				</Content>

				<Content onPress={() => chooseFile('choose')}>
					<ButtonText>Escolher da Galeria</ButtonText>
				</Content>
			</Container>
		</Modal>
	);
}
