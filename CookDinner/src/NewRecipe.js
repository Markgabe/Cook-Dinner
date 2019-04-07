import React from 'react';
import { Text, View, Button, TextInput, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class RecipeRegister extends React.Component {

  constructor(props) {
      super(props);
      this.state = { nome: 'Nome da receita', descricao: 'Describe your recipe' };
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
          onChangeText={(nome) => this.setState({nome})}
          value={this.state.nome}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: 150}}
          onChangeText={(descricao) => this.setState({descricao})}
          value={this.state.descricao}
        />
        <Button
          style={{height: 40, width: 150}}
          onPress={() => cadastrarReceita(this.state.nome, this.state.descricao)}
          title="Cadastrar"
          color="#841584"
          accessibilityLabel="Cadastrar a receita"
          />
      </View>

    );
  }
}

const cadastrarReceita = async (name, description) => {

  const token = AsyncStorage.getItem('Access-Token');
  const tokenType = AsyncStorage.getItem('Token-Type');
  const client = AsyncStorage.getItem('Client');
  const uid = AsyncStorage.getItem('Uid');

  const response = await fetch('https://receitas-dos-leks.herokuapp.com/recipes', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Token': token,
        'Token-Type': tokenType,
        'Client': client,
        'Uid': uid
    },
    body: JSON.stringify({
        email: name,
        password: description
    })
  });

  await AsyncStorage.multiSet([
    ['Access-Token', response.headers.map['access-token']],
    ['Token-Type', response.headers.map['token-type']],
    ['Client', response.headers.map['client']],
    ['Uid', response.headers.map['uid']]
  ]);

}
