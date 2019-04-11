import React from 'react';
import { Button, View, Text } from 'react-native';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import Home from './Home';
import NewRecipe from './NewRecipe';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


const RootStack = createStackNavigator(
  {
    Login: Login,
    Cadastro: Register,
    Home: Home,
    NewRecipe: NewRecipe
  },
  {
    initialRouteName: 'Login',
  }
);

export default RootStack;
