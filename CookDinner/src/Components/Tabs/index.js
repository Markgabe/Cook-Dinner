import React, { Component } from 'react';

import Icon from 'react-native-fa-icons';

import { Container, TabButton } from './styles';

export default function Tabs({screen, nav}) {
    return (
        <Container>
            <TabButton onPress={() => nav('Home')}>
                <Icon name='home' style={{ fontSize: 45, color: screen == 'Home' ? '#000' : '#EEE' }} />
            </TabButton>
            <TabButton onPress={() => nav('Notifications')}>
                <Icon name='bell' style={{ fontSize: 38, color: screen == 'Notifications' ? '#000' : '#EEE' }} />
            </TabButton>
            <TabButton onPress={() => nav('QRScreen')}>
                <Icon name='qrcode' style={{ fontSize: 45, color: screen == 'QRScreen' ? '#000' : '#EEE' }} />
            </TabButton>
            <TabButton onPress={() => nav('Menu')}>
                <Icon name='bars' style={{ fontSize: 45, color: screen == 'Menu' ? '#000' : '#EEE' }} />
            </TabButton>
        </Container>
    );
}
