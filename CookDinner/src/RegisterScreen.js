import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { username: '', password: '' };
    }

  render() {
    return (
      <View style={styles.mainView}>

        <View style={styles.topView}>
          <Image source={require('./img/comida.png')} style={styles.image}/>
          <Text style={styles.titleText}>Cook Dinner</Text>
        </View>

        <View style={{flex: 1, paddingTop: 60, alignItems: 'center'}}>

          <View style={styles.textInputView}>

            <TextInput style={styles.textInput}
            placeholder="Username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            />

            <TextInput style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            />

          </View>

          <View style= {styles.buttonView}>

            <TouchableHighlight
              style={styles.button}
              onPress={() => alert()}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableHighlight>

          </View>

        </View>

      </View>
    );
  }
}
