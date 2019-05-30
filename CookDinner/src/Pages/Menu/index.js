import React from 'react';
import { Text, Switch, AsyncStorage } from 'react-native';

import Tabs from '../../Components/Tabs';
import { Container, ConfigCard, ConfigText, LogOutButton, LogOutText } from './styles';
import ProfileCard from '../../Components/ProfileCard';

export default class Menu extends React.Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { darkMode: false };
        this.onControlChange = this.onControlChange.bind(this);
        AsyncStorage.getItem('darkMode', (err, data) => {
            this.state.darkMode = data;
        })
    }

    onControlChange(value) {
        AsyncStorage.setItem('darkMode', !this.state.darkMode);
        this.setState({ darkMode: !this.state.darkMode});
    }

    render(){
        return (
            <Container>
                <ProfileCard user={{Nome: 'eu'}} nav={this.props.navigation.navigate}/>
                <ConfigCard>
                    <ConfigText>Dark mode: {this.state.darkMode ? 'on' : 'off'}</ConfigText>
                    <Switch style={{alignSelf: 'center', marginLeft:'auto', marginRight: 10}}
                            value={ this.state.darkMode }
                            onValueChange={this.onControlChange}
                    />
                </ConfigCard>

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
