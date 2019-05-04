import React from 'react';
import {
  Text, View, TouchableHighlight, TextInput, TouchableOpacity,
  Image, StyleSheet , KeyboardAvoidingView, AsyncStorage
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../Home';

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
            <Image source={require('../../Assets/comida.png')} style={{flex: 0.5, resizeMode: 'contain', marginTop: 40}}/>
            <Text style={{flex:0.5, fontSize: 40, fontWeight: 'bold', marginTop: 20}}>Cook Dinner</Text>
          </View>

          <View style={{alignItems: 'center', flex: 1, paddingTop: 50}}>

            <View>

              <TextInput style={{backgroundColor: '#FFF', marginTop: 10, fontSize: 20, width: 300, textAlign: 'center', borderColor: 'gray', borderWidth: 2, borderRadius: 10}}
              placeholder="E-mail"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              />

              <TextInput style={{backgroundColor: '#FFF', marginTop: 10, fontSize: 20, width: 300, textAlign: 'center', borderColor: 'gray', borderWidth: 2, borderRadius: 10}}
              placeholder="Senha"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry = {true}
              />

              <View style={{marginTop: 30, alignSelf: 'stretch', //flex:1
          }}>

                <TouchableHighlight style={{width: "100%", height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 10, backgroundColor: "#000", justifyContent: 'center', alignSelf: 'center'}}
                  onPress={() => this.validar(this.state.username, this.state.password)}
                  underlayColor='#222'>
                  <Text style={{fontSize: 20, alignSelf: 'center', color: "#FFF"}}>Logar</Text>
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
