import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-fa-icons';
import { sha256 } from 'react-native-sha256';

import Logo from '../../Components/Logo';
import {
    Container, Content, TextBox, AvatarImage,
    RegisterButton, RegisterButtonText, RegisterButtonContainer,
    HasAccountText, HasAccountButton, HasAccountContainer,
    IconButton, ChooseFileButton, AvatarContainer
} from './styles';

export default class Register extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', name: '', avatarSource: require('../../Assets/profile.png') };
    }

    async cadastrar(user, pass, name, image) {

        const response = await fetch('https://cookdinnerapi.herokuapp.com/sign_up', {
            method: "POST",
            body: JSON.stringify({
                email: user,
                senha: String(sha256(pass))
            })
        });

        const json = await response.json();
        const token = json['access-token'];

        await AsyncStorage.setItem('token', token);

        switch (response.status) {
            case 200:
                this.props.navigation.navigate('App');
                const form = new FormData();
                form.append('picture',
                    {
                        uri: '../../Assets/profile.png',
                        type: 'image/png',
                        name: 'profile.png'
                    });
                await fetch('https://cookdinnerapi.herokuapp.com/pic', {
                    method: "POST",
                    body: form,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });        
            break;
            case 400:
                alert('Preencha todos os campos para criar uma conta');
            break;
            case 401:
                alert('Login ou senha inválidos');
            break;
            default:
                alert('erro desconhecido, tente novamente mais tarde');
            break;
        }
    }

render() {
    return (
        <Container>

            <Logo />

            <Content behavior='padding' enabled>
                <TextBox
                    placeholder="Nome"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <TextBox
                    placeholder="Usuário"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <TextBox
                    placeholder="Senha"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                />

                <RegisterButtonContainer>
                    <RegisterButton
                        underlayColor='#222'
                        onPress={() => { this.cadastrar(this.state.email, this.state.password, this.state.name, this.state.avatarSource) }}
                    >
                        <RegisterButtonText>Enviar</RegisterButtonText>
                    </RegisterButton>
                </RegisterButtonContainer>
            </Content>

            <HasAccountContainer>
                <HasAccountButton onPress={() => this.props.navigation.navigate('Login')}>
                    <HasAccountText>Já possui uma conta?</HasAccountText>
                </HasAccountButton>
            </HasAccountContainer>

        </Container>

    );
}

}
