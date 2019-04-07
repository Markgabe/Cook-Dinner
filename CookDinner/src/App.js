import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './LoginScreen';
import Register from './RegisterScreen';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
});

const validar = (x, y) => {

  //codigo que valida o login

};

export default createAppContainer(TabNavigator);
