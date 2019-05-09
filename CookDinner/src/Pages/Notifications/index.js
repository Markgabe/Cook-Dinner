import React from 'react';
import { Text, View } from 'react-native';

import Tabs from '../../Components/Tabs';
import MainView from './styles';

export default class Notifications extends React.Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize: 50}}>WIP My Dudes</Text>
                <Tabs screen='Notifications' nav={this.props.navigation.navigate}/>
            </View>
        );
    }
}
