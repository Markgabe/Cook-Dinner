import React from 'react';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
import Notifications from './Pages/Notifications';
import Menu from './Pages/Menu';

import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


const RootStack = createStackNavigator(
  {
    Login: Login,
    Cadastro: Register,
    Home: Home,
    NewRecipe: NewRecipe,
    Notifications: Notifications,
    Menu: Menu
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
