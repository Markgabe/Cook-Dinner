import React from 'react';
import { Text, View, Button, TextInput, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = { username: 'piroca@gmail.com', password: 'piroca123' };
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

  //alert(JSON.stringify(response.headers.map['access-token']));

  await AsyncStorage.multiSet([
    ['Access-Token', response.headers.map['access-token']],
    ['Token-Type', response.headers.map['token-type']],
    ['Client', response.headers.map['client']],
    ['Uid', response.headers.map['uid']]
  ]);

  //alert(await AsyncStorage.multiGet(['Access-Token', 'Token-Type', 'Client', 'Uid']))

}

storeData = async () => {
  try {
    await AsyncStorage.setItem('Piru', 'Pirocon.');
  } catch (error) {
    // Error saving data
  }
};

retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('Access-Token');
    if (value !== null) {
      // We have data!!
      alert(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
