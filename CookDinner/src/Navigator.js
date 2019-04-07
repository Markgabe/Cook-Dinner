import Login from './LoginScreen';
import Register from './RegisterScreen';
import RecipeRegister from './NewRecipe';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  Cadastro: Register,
  Receitas: RecipeRegister
});
