import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
import Notifications from './Pages/Notifications';
import Menu from './Pages/Menu';
import QRScreen from './Pages/QRScreen';
import AuthLoadingScreen from './Pages/AuthLoadingScreen';
import Recipe from './Pages/Recipe';
import Profile from './Pages/Profile';

const AppStack = createStackNavigator(
  {
    Home: Home,
    NewRecipe: NewRecipe,
    Notifications: Notifications,
    Menu: Menu,
    QRScreen: QRScreen,
    Recipe: Recipe,
    Profile: Profile
  },
  {
    initialRouteName: 'Home'
  }
);

const LoginStack = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: 'Login'
  }
);

const AuthStack = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const RootStack = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    SignIn: LoginStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(RootStack);
