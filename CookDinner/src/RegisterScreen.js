
import React from 'react';
import { Text, View, TextInput, Image, StyleSheet, KeyboardAvoidingView,
TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { email: '', password: '', name: '', birth: '' };
    }

    async cadastrar(user, pass, name) {

        const response = await fetch('https://receitas-dos-leks.herokuapp.com/auth/', {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: user,
              password: pass,
              name: name
          })
        });

        await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
        await AsyncStorage.setItem('Client', response.headers.map['client']);
        await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
        await AsyncStorage.setItem('Uid', response.headers.map['uid']);

        (response.status === 200) ? this.props.navigation.navigate("Home") : alert("Não foi possível concluir o registro!");

      }

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1, alignItems: 'center', backgroundColor: '#888'}}>

        <View style={{backgroundColor: '#888', width: "100%", alignItems: 'center',
      height: "80%", marginTop: 80}}>
          <TextInput style={styles.textInput2}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          underlineColorAndroid= "#000"
          />

          <TextInput style={styles.textInput2}
          placeholder="E-mail"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          underlineColorAndroid= "#000"
          />

          <TextInput style={styles.textInput2}
          placeholder="Year you were born"
          onChangeText={(birth) => this.setState({birth})}
          value={this.state.birth}
          underlineColorAndroid= "#000"
          />

          <TextInput style={styles.textInput2}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry = {true}
          underlineColorAndroid= "#000"
          />

          <View style={styles.buttonView}>

            <TouchableHighlight style={styles.button2}
              onPress={() => this.cadastrar(this.state.email, this.state.password, this.state.name)}
              underlayColor='#222'>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableHighlight>

          </View>


        </View>

        <View style={styles.bottomView2}>
          <Text style={{marginTop: 20, fontSize: 20}}>Já possui uma conta? </Text>
          <TouchableOpacity style={{marginTop: 20}}
          onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Clique!</Text>
          </TouchableOpacity>
        </View>


      </KeyboardAvoidingView>
    );
  }
}
