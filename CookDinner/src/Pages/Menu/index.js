import React from 'react';
import { Text, Switch, AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

import Tabs from '../../Components/Tabs';
import ProfileCard from '../../Components/ProfileCard';
import { Picture } from '../../Components/ProfileCard/styles';
import PicPopUp from '../../Components/PicPopUp';
import { Container, ConfigCard, ConfigText, LogOutButton, LogOutText,
         AvatarContainer, AvatarImage, ChooseFileButton } from './styles';

export default class Menu extends React.Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { darkMode: false };
        this.onControlChange = this.onControlChange.bind(this);
        AsyncStorage.getItem('darkMode', (err, data) => {
            this.state.darkMode = data;
        });

        this.modalVisible = false;
    }

    onControlChange(value) {
        AsyncStorage.setItem('darkMode', !this.state.darkMode);
        this.setState({ darkMode: !this.state.darkMode});
    }

    setModalVisible(bool){
        this.modalVisible = bool;
    }

    async getPic(){
        let token = await AsyncStorage.getItem('token');

        let response = await fetch('https://cookdinnerapi.herokuapp.com/cred', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let pic = await fetch(`https://cookdinnerapi.herokuapp.com/getpic/${response.Id}`);
        return pic;
    }

    render(){
        return (
            <Container>
                <AvatarContainer>
                    <ChooseFileButton
                        onPress = {this.setModalVisible(true)}>
                        <AvatarImage source={ this.getPic() } />
                    </ChooseFileButton>
                </AvatarContainer>

                <ConfigCard>
                    <ConfigText>Dark mode: {this.state.darkMode ? 'on' : 'off'}</ConfigText>
                    <Switch style={{alignSelf: 'center', marginLeft:'auto', marginRight: 10}}
                            value={ this.state.darkMode }
                            onValueChange={this.onControlChange}
                    />
                </ConfigCard>

                <PicPopUp modalVisible={this.modalVisible} setModalVisible={this.setModalVisible}/>
                
                <LogOutButton onPress={() => {
                    AsyncStorage.setItem('token', '0');
                    this.props.navigation.navigate('SignIn');
                }}> 
                    <LogOutText>Sair</LogOutText>
                </LogOutButton>
                <Tabs screen='Menu' nav={this.props.navigation.navigate} />
            </Container>
      );
  }
}
