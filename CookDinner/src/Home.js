import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Icon from 'react-native-vector-icons/FontAwesome';

const icon = <FontAwesome5 name={'comments'} solid/>

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

                <TouchableOpacity onPress={() => this.newRecipe()} style={{alignSelf:'center', marginLeft: 'auto', marginRight: 15 }}>
                    <Icon name='comments' size={36} color='#FFF' />
                </TouchableOpacity>
            </View>

            <View style={{fontSize: 30, fontWeight: 'bold', backgroundColor: 'Gray'}}>
                <Text>ai caralho</Text>
            </View>
        </View>
    );
  }

}
