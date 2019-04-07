import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import RecipeRegister from './NewRecipe';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
  Receitas: RecipeRegister
});

export default createAppContainer(TabNavigator);
