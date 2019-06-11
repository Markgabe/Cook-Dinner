import React from 'react';
import { Linking } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { Container } from './styles'; 

export default function QRScreen() {

    const onSuccess = (e) => {
        Linking
            .openURL(e.data)
            .catch(err => {
                alert('"'+e.data+'"'+" não é uma URL válida");
                this.props.navigation.goBack();
            });
    }

    return (
        <Container>
            <QRCodeScanner
            onRead={this.onSuccess}
            showMarker
            cameraProps={{ratio:"16:9"}}
            />
        </Container>
    );
}
