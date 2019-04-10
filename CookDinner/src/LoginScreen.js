import React from 'react';
import {
  Text, View, TouchableHighlight, TextInput,
  Image, StyleSheet , KeyboardAvoidingView, AsyncStorage
} from 'react-native';
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
      <KeyboardAvoidingView behavior="padding" style={{flex: 1, alignItems: 'center', backgroundColor: '#888'}}>
        <View>

          <View style={{alignItems: 'center', flex: 1, backgroundColor: '#AAA'}}>
            <Image source={require('./img/comida.png')} style={styles.image}/>
            <Text style={styles.titleText}>Cook Dinner</Text>
          </View>

          <View style={{alignItems: 'center', flex: 1,
          paddingTop: 50
        }}>

            <View>

              <TextInput style={styles.textInput}
              placeholder="Username"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              />

              <TextInput style={styles.textInput}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry = {true}
              />

              <View style={styles.buttonView}>

                <TouchableHighlight style={styles.button}
                  onPress={() => validar(this.state.username, this.state.password)}
                  underlayColor='#fff'>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

              </View>

            </View>



          </View>

        </View>

      </KeyboardAvoidingView>
    );
  }
}

const validar = async (user, pass) => {

  const response = await fetch('https://receitas-dos-leks.herokuapp.com/auth/sign_in', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: user,
        password: pass
    })
  });

  await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
  await AsyncStorage.setItem('Client', response.headers.map['client']);
  await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
  await AsyncStorage.setItem('Uid', response.headers.map['uid']);

}
