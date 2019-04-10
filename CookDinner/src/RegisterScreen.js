
import React from 'react';
import { Text, View, TextInput, Image, StyleSheet, KeyboardAvoidingView,
TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { email: '', password: '', name: '', birth: '' };
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1, alignItems: 'center', backgroundColor: '#888'}}>

        <View style={{backgroundColor: '#888', width: "100%", alignItems: 'center',
      height: "70%", marginTop: 80}}>
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
          placeholder="Birth"
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
        </View>
        <View style={[styles.bottomView,{flexDirection: 'row', justifyContent: 'center'}]}>
          <Text style={{marginTop: 15, fontSize: 20, marginBottom: 30}}>Já possui uma conta? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 30}}>Clique!</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
