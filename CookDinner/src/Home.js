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

                <TouchableOpacity onPress={() => this.newRecipeScreen()} style={{alignSelf:'center', marginLeft: 'auto', marginRight: 10 }}>
                    <Icon name='plus-circle' style={{fontSize: 36, color:'#FFF'}} />
                </TouchableOpacity>

            </View>

            <View style={{backgroundColor: 'white', alignItems: 'center', marginTop: 30}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Aqui vai ficar o feed!</Text>
            </View>

            <View style={{backgroundColor:'gray', marginTop: 'auto', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-evenly'}}>

                <TouchableOpacity onPress={() => alert("Vai redirecionar para home")} style={{alignSelf:'center', marginLeft: 10, marginRight: 10 }}>
                    <Icon name='home' style={{fontSize: 36, color:'#000'}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert("Vai redirecionar para suas notificações")} style={{alignSelf:'center', marginLeft: 10, marginRight: 10 }}>
                    <Icon name='bell' style={{fontSize: 36, color:'#FFF'}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert("Vai redirecionar para configs")} style={{alignSelf:'center', marginLeft: 10, marginRight: 10 }}>
                    <Icon name='bars' style={{fontSize: 36, color:'#FFF'}} />
                </TouchableOpacity>
            </View>
        </View>
    );
  }

}
