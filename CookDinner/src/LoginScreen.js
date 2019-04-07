import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = { username: 'Username', password: 'Your password' };
    }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 30,
          }}>Login</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, width: 150}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: 150}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry = {true}
        />
        <Button
          style={{height: 40, width: 150}}
          onPress={() => validar(this.state.username, this.state.password)}
          title="Log in"
          color="#841584"
          accessibilityLabel="Log in"
          />
      </View>

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

  alert(JSON.stringify(response));

}
