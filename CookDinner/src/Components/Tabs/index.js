import React, { Component } from 'react';

import Icon from 'react-native-fa-icons';

import { Container, TabButton } from './styles';

export default class Tabs extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Container>
                <TabButton onPress={() => this.props.navigation.navigate('Home')}>
                    <Icon name='home' style={{ fontSize: 45, color: this.props.screen == 'Home' ? '#000' : '#EEE' }} />
                </TabButton>
                <TabButton onPress={() => this.props.navigation.navigate('Notifications')}>
                    <Icon name='bell' style={{ fontSize: 38, color: this.props.screen == 'Notifications' ? '#000' : '#EEE' }} />
                </TabButton>
                <TabButton onPress={() => this.props.navigation.navigate('QRScreen')}>
                    <Icon name='qrcode' style={{ fontSize: 45, color: this.props.screen == 'QRScreen' ? '#000' : '#EEE' }} />
                </TabButton>
                <TabButton onPress={() => this.props.navigation.navigate('Menu')}>
                    <Icon name='bars' style={{ fontSize: 45, color: this.props.screen == 'Menu' ? '#000' : '#EEE' }} />
                </TabButton>
            </Container>
        );
    }
};
