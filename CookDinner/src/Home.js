import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{marginTop: 20, fontSize: 30, fontWeight: 'bold'}}>HOME</Text>
      </View>
    );
  }
}
