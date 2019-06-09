import React from 'react';
import { Switch, AsyncStorage } from 'react-native';

import PicPopUp from '../PicPopUp';
import { Container, ConfigCard, ConfigText, LogOutButton, LogOutText,
         AvatarContainer, AvatarImage, ChooseFileButton } from './styles';

export default function Menu({modalVisible, setModalVisible, darkMode, setDarkMode, nav}) {

    function onControlChange(value) {
        AsyncStorage.setItem('darkMode', String(!darkMode));
        setDarkMode(!darkMode);
    }

    async function getPic(){
        let token = await AsyncStorage.getItem('token');

        let response = await fetch('https://cookdinnerapi.herokuapp.com/cred', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return `https://cookdinnerapi.herokuapp.com/getpic/${response.Id}`;
    }

    return (
    <Container>
        <AvatarContainer>
            <ChooseFileButton
                onPress = {setModalVisible(true)}>
                <AvatarImage source={{ uri: getPic()}} />
            </ChooseFileButton>
        </AvatarContainer>

        <ConfigCard>
            <ConfigText>Dark mode: {darkMode ? 'on' : 'off'}</ConfigText>
            <Switch style={{alignSelf: 'center', marginLeft:'auto', marginRight: 10}}
                    value={darkMode}
                    onValueChange={onControlChange}
            />
        </ConfigCard>

        <PicPopUp 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}        
        />
        
        <LogOutButton onPress={() => {
            AsyncStorage.setItem('token', '0');
            nav('SignIn');
        }}> 
            <LogOutText>Sair</LogOutText>
        </LogOutButton>
    </Container>
    );
}
