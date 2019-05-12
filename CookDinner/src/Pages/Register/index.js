import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-fa-icons';
import { sha256 } from 'react-native-sha256';

import { Container, Content, TextBox, AvatarImage,
        RegisterButton, RegisterButtonText, RegisterButtonContainer,
        HasAccountText, HasAccountButton, HasAccountContainer,
        IconButton, ChooseFileButton, AvatarContainer } from './styles';

export default class Register extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', name: '', birth: '', avatarSource: require('../../Assets/profile.png') };
    }

    chooseFile = () => {
        var options = {
            title: 'Escolha uma imagem',
            cancelButtonTitle: 'Cancelar',
            takePhotoButtonTitle: 'Tirar Foto...',
            chooseFromLibraryButtonTitle: 'Escolher da Galeria...',
            customButtons: [{ name: 'TC', title: 'Tirar Foto e Cortar...' },
                            { name: 'SC', title: 'Escolher da Galeria e Cortar...' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton == "TC") {
                ImageCropPicker.openCamera({
                    width: 150,
                    height: 150,
                    cropping: true,
                }).then(image => {
                    this.setState({ avatarSource: { uri: image.path } })
                });
            } else if (response.customButton == "SC") {
                ImageCropPicker.openPicker({
                    width: 150,
                    height: 150,
                    cropping: true
                }).then(image => {
                    this.setState({ avatarSource: { uri: image.path } })
                });
            } else {
                const source = { uri: response.uri };
                this.setState({ avatarSource: source });
            }
        });
    }

    async cadastrar(user, pass, name) {
        const response = await fetch('https://receitas-dos-leks.herokuapp.com/auth/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user,
                password: sha256(pass),
                name: name
            })
        });

        await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
        await AsyncStorage.setItem('Client', response.headers.map['client']);
        await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
        await AsyncStorage.setItem('Uid', response.headers.map['uid']);

        (response.status === 200) ? this.props.navigation.replace("App") : alert("Não foi possível concluir o registro!");
    }

    render() {
        return (
            <Container behavior="height">

                <AvatarContainer>
                    <ChooseFileButton
                        onPress = {this.chooseFile}>
                        <AvatarImage source={this.state.avatarSource} />
                    </ChooseFileButton>
                    <IconButton
                        onPress = {this.chooseFile}>
                        <Icon name='plus-circle' style={{fontSize: 50, color:'black'}}/>
                    </IconButton>
                </AvatarContainer>

                <Content>
                    <TextBox
                        placeholder="Nome"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                        underlineColorAndroid= "#000"
                    />

                    <TextBox
                        placeholder="E-mail"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        underlineColorAndroid= "#000"
                    />

                    <TextBox
                        placeholder="Ano de Nascimento"
                        onChangeText={(birth) => this.setState({birth})}
                        value={this.state.birth}
                        underlineColorAndroid= "#000"
                    />

                    <TextBox
                        placeholder="Senha"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry = {true}
                        underlineColorAndroid= "#000"
                    />

                    <RegisterButtonContainer>
                        <RegisterButton
                            underlayColor='#222'
                            onPress={() => this.cadastrar(this.state.email, this.state.password, this.state.name)}
                            >
                            <RegisterButtonText>Enviar</RegisterButtonText>
                        </RegisterButton>
                    </RegisterButtonContainer>
                </Content>

                <HasAccountContainer>
                    <HasAccountButton onPress={() => this.props.navigation.navigate('Login')}>
                        <HasAccountText>Já possui uma conta? Clique aqui!</HasAccountText>
                    </HasAccountButton>
                </HasAccountContainer>

            </Container>

        );}

}
