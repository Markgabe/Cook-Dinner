import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
import Notifications from './Pages/Notifications';
import Menu from './Pages/Menu';
import QRScreen from './Pages/QRScreen';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Cadastro: Register,
    Home: Home,
    NewRecipe: NewRecipe,
    Notifications: Notifications,
    Menu: Menu,
    QRScreen: QRScreen
  },
  {
    initialRouteName: 'Login',
  }
);

export default RootStack;
