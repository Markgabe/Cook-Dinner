import Login from './Pages/Login';
import Register from './Pages/Register';
import RecipeRegister from './Pages/NewRecipe';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
});

export default TabNavigator;
