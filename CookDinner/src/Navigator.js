import Login from './Pages/Login';
import Register from './Pages/RegisterScreen';
import NewRecipe from './Pages/NewRecipe';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
});

export default TabNavigator;
