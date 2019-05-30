import React , { Component }from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Name, Picture } from './styles';

export default class ProfileCard extends Component {
    constructor(props){
        super(props);

    }

    openProfile(){
        AsyncStorage.setItem('openedProfile', JSON.stringify(this.props.user)
        .then(this.props.navigation.navigate('Profile')));
    }
    
    render(){
        return(
            <Container onPress={() => {this.openProfile}}>
                <Picture source={require('../../Assets/profile.png')}/>
                <Name>{this.props.user.Nome}</Name>
            </Container>
        );
    }
}