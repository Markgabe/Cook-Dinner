import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class Register extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
        style={{
          fontSize: 30,
        }}
        >Cadastre-se</Text>
      </View>

    );
  }
}
