import React from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
import Notifications from './Pages/Notifications';
import Menu from './Pages/Menu';
import QRScreen from './Pages/QRScreen';
import AuthScreen from '.Pages/AuthScreen';

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
    AuthLoadingScreen: AuthLoadingScreen
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
