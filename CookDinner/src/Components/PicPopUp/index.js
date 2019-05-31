import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import { Container, Content, ButtonText, TitleText } from './styles';

class PicPopUp extends Component {
    constructor(props) {
        state = {
            modalVisible: false,
            avatarSource: '',
        };
    }

    setModalVisible(bool) {
        this.setState({ modalVisible: bool });
        this.props.setModalVisible(bool);
    }

    chooseFile(type) {
        const response = {
            fileName: 'profile.png',
            path: '../../Assets/profile.png',
            type: 'image/png',
            width: 150,
            height: 150
        }
        if (type = 'take') {
            ImageCropPicker.openCamera({
                width: 150,
                height: 150,
                cropping: true,
            }).then(image => {
                response = { ...image }
            })

        } else if (type = 'choose') {
            ImageCropPicker.openPicker({
                width: 150,
                height: 150,
                cropping: true,
            }).then(image => {
                response = { ...image }
            })
        }

        sendNewPic(response);
        this.setModalVisible(false);
    }

    async sendNewPic(photo) {
        let token = await AsyncStorage.getItem('token');

        const form = new FormData();
        form.append('picture',
            {
                uri: photo.uri,
                type: photo.type,
                name: photo.fileName
            })
        await fetch('https://cookdinnerapi.herokuapp.com/pic', {
            method: "POST",
            body: form,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}
                onDismiss={() => {
                    this.setModalVisible(false);
                }}>
                <Container>
                    <TitleText>
                        Enviar foto
                    </TitleText>
                    <Content onPress={() => (chooseFile('take'))}>
                        <ButtonText>
                            Tirar foto
                        </ButtonText>
                    </Content>

                    <Content onPress={() => (chooseFile('choose'))}>
                        <ButtonText>
                            Escolher da Galeria
                    </ButtonText>
                    </Content>
                </Container>
            </Modal>
        );
    }
}