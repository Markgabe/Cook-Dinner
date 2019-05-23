import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Name, Picture } from './styles';

export default function ProfileCard({user, nav}){
    return(
        <Container onPress={() => { AsyncStorage.setItem('openedProfile', JSON.stringify(user)).then(nav('Profile')); }}>
            <Picture source={require('../../Assets/profile.png')}/>
            <Name>{user.Nome}</Name>
        </Container>
    );
}