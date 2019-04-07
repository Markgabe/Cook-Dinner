import React from 'react';
import { Button, View, Text } from 'react-native';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component {

  static navigationOptions = { header: null };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Text>Welcome to Cook Dinner</Text>
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Cadastro')}
        />
      </View>
    );
  }
}
