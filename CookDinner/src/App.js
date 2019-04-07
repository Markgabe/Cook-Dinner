import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './LoginScreen';
import Register from './RegisterScreen';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
});

export default createAppContainer(TabNavigator);
