import React, { Component } from 'react';

import { Linking, StatusBar, View } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {

    static navigationOptions = { title: 'Ler QRCode',
                                headerStyle:{ backgroundColor: '#000' },
                                headerTintColor: '#777',
                                headerTitleStyle: {fontWeight: 'bold', fontSize: 25, color: '#777'}};

    onSuccess = (e) => {
        Linking
            .openURL(e.data)
            .catch(err => alert(err));
    }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <QRCodeScanner
                onRead={this.onSuccess}
                showMarker
                cameraProps={{ratio:"16:9"}}
                />
            </View>
        );
    }
}
