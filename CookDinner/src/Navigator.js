import Login from './LoginScreen';
import Register from './RegisterScreen';
import RecipeRegister from './NewRecipe';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
  Receitas: RecipeRegister
});

export default TabNavigator;
