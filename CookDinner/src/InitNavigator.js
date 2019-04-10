import React from 'react';
import { Button, View, Text } from 'react-native';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import Home from './Home';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


const RootStack = createStackNavigator(
  {
    Login: Login,
    Cadastro: Register,
    Home: Home,
  },
  {
    initialRouteName: 'Login',
  }
);

export default RootStack;
