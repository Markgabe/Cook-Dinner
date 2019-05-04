import React from 'react';

import {Container, TabButton} from './Styles';
import Icon from 'react-native-fa-icons';

export default function Tabs() {
    return (
    <Container>

        <TabButton onPress={() => alert("Vai redirecionar para home")}>
            <Icon name='home' style={{fontSize: 36, color: '#000'}} />
        </TabButton>

        <TabButton onPress={() => alert("Vai redirecionar para suas notificações")}>
            <Icon name='bell' style={{fontSize: 36, color: '#FFF'}} />
        </TabButton>

        <TabButton onPress={() => alert("Vai redirecionar para configs")}>
            <Icon name='bars' style={{fontSize: 36, color: '#FFF'}} />
        </TabButton>
    </Container>
    )
}
