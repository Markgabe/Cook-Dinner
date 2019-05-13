import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
import Notifications from './Pages/Notifications';
import Menu from './Pages/Menu';
import QRScreen from './Pages/QRScreen';
import AuthScreen from './Pages/AuthLoadingScreen';

const AppStack = createStackNavigator(
  {
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

const LoginStack = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: 'Login',
  }
);

const AuthStack = createStackNavigator(
  {
    AuthLoadingScreen: AuthScreen
  },
);

export default createAppContainer(createSwitchNavigator({
    AuthLoading: AuthStack,
    App: AppStack,
    Login: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
