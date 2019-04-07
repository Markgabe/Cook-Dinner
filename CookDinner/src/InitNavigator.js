import React from 'react';
import { Button, View, Text } from 'react-native';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import Home from './HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerBackTitle: null
      }),
    },
    Login: Login,
    Cadastro: Register,
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
