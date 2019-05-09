import React from 'react';

import Icon from 'react-native-fa-icons';
import Text from 'react-native';

import {Container, TabButton} from './styles';

export default function Tabs({screen, nav}){
    var homeColor = '#FFF';
    var notifColor = '#FFF';
    var menuColor = '#FFF';
    var qrColor = '#FFF';

    if(screen=='Home') homeColor = '#000';
    else if(screen=='Notifications') notifColor = '#000';
    else if(screen=='Menu') menuColor = '#000';

    return (
        <Container>
            <TabButton onPress={() => nav('Home')}>
                <Icon name='home' style={{fontSize: 45, color: homeColor}} />
            </TabButton>
            <TabButton onPress={() => nav('Notifications')}>
                <Icon name='bell' style={{fontSize: 38, color: notifColor}} />
            </TabButton>
            <TabButton onPress={() => nav('QRScreen')}>
                <Icon name='qrcode' style={{fontSize:45, color: qrColor}} />
            </TabButton>
            <TabButton onPress={() => nav('Menu')}>
                <Icon name='bars' style={{fontSize: 45, color: menuColor}} />
            </TabButton>
        </Container>
    );
};
