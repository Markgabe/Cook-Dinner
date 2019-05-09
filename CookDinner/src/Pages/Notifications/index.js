import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Tabs from '../../Components/Tabs';
import { MainView } from './styles';

export default class Notifications extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <MainView>
                <Text style={{fontSize: 50}}>WIP My Dudes</Text>
                <Tabs screen='Notifications' nav={this.props.navigation.navigate}/>
            </MainView>
        );
    }
}
