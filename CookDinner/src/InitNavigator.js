import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';


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
