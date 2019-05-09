import React from 'react';
<<<<<<< HEAD
import { createStackNavigator, createAppContainer } from 'react-navigation';
=======
>>>>>>> 3611675ffc5cc255ef0a758b55f0c87a53c94d20

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
<<<<<<< HEAD
=======
import Notifications from './Pages/Notifications';
import Menu from './Pages/Menu';
import QRScreen from './Pages/QRScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
>>>>>>> 3611675ffc5cc255ef0a758b55f0c87a53c94d20


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
    initialRouteName: 'Home',
  }
);

export default RootStack;
