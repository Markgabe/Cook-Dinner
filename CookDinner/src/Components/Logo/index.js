import React from 'react';

import {Container, LogoText, LogoImage} from './styles';

export default function Logo(){
    return (
        <Container>
            <LogoImage source={require('../../Assets/comida.png')} />
            <LogoText>Cook Dinner</LogoText>
        </Container>
    );
}
