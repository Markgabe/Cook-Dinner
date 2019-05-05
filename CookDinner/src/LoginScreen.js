import React from 'react';
import {
  Text, View, TouchableHighlight, TextInput, TouchableOpacity,
  Image, StyleSheet , KeyboardAvoidingView, AsyncStorage
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';
import Home from './Home';

export default class Login extends React.Component {

  static navigationOptions = { header: null };


  constructor(props) {
      super(props);
      this.state = { username: '', password: ''};
    }

  async validar(user, pass) {

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

      (response.status === 200) ? this.props.navigation.navigate("Home") : alert("Usuário inválido!");

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
              placeholder="E-mail"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              />

              <TextInput style={styles.textInput}
              placeholder="Senha"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry = {true}
              />

              <View style={styles.buttonView}>

                <TouchableHighlight style={styles.button}
                  onPress={() => this.validar(this.state.username, this.state.password)}
                  underlayColor='#222'>
                  <Text style={styles.buttonText}>Logar</Text>
                </TouchableHighlight>

              </View>

              <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={{alignSelf: 'center', fontSize: 20}}>Não possui uma conta? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Cadastro")}>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Clique!</Text>
              </TouchableOpacity>
              </View>

            </View>


          </View>

        </View>

      </KeyboardAvoidingView>
    );
  }

}
