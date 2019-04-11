import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-fa-icons';

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { search: '' };
    }

    newRecipe() {

    };

    render() {
        return (

        <View style={{fontSize: 30, fontWeight: 'bold', flex: 1}}>

            <View style={{backgroundColor: 'gray', flexDirection: 'row', alignItems: 'center'}}>

                <TextInput style={ styles.searchInput }
                    placeholder="Pesquisar"
                    onChangeText={(search) => this.setState({search})}
                    value={this.state.search}
                />

                <TouchableOpacity onPress={() => this.newRecipe()} style={{alignSelf:'center', marginLeft: 'auto', marginRight: 10 }}>
                    <Icon name='plus-circle' style={{fontSize: 36, color:'#FFF'}} />
                </TouchableOpacity>

            </View>

            <View style={{backgroundColor: 'Gray', alignItems: 'center', marginTop: 30}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Aqui vai ficar o feed!</Text>
            </View>
        </View>
    );
  }

}
