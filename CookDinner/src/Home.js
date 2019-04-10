import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const newRecipe = () => {

};

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { search: '' };
    }

    render() {
        return (
        //Screen
        <View style={{fontSize: 30, fontWeight: 'bold', flex: 1}}>
            //Top Bar
            <View style={{alignItems: 'center', backgroundColor: 'gray'}}>
                //search bar
                <TextInput style={ styles.searchInput }
                    placeholder="Pesquisar"
                    onChangeText={(search) => this.setState({search})}
                    value={this.state.search}
                />
                //New Recipe Button
                <TouckableOpacity style={{alignSelf: 'self-end'}}, onPress={newRecipe}>
                    <Icon name='fas fa-plus' size={30} color='#FFF' />
                </TouckableOpacity>
            </View>

            <View style={{fontSize: 30, fontWeight: 'bold', backgroundColor: 'Gray'}}>
                <Text>ai caralho</Text>
            </View>
        </View>
    );
  }

}
