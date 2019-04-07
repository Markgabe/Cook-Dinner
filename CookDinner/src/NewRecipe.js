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

  const token = await AsyncStorage.getItem('Access-Token');
  const tokenType = await AsyncStorage.getItem('Token-Type');
  const client = await AsyncStorage.getItem('Client');
  const uid = await AsyncStorage.getItem('Uid');


  const obj = new Headers(
    [['Content-Type', 'application/json; charset=utf-8'],
    ['Accept', 'application/json; charset=utf-8'],
    ['Access-Token', token],
    ['Token-Type', tokenType],
    ['client', client],
    ['uid', uid]]
  );

  console.log(obj);

  const response = await fetch('https://receitas-dos-leks.herokuapp.com/register_recipe', {
    method: "POST",
    headers: obj,
    body: JSON.stringify({
        title: name,
        description: description
    })
  });

  console.log(response);

  await AsyncStorage.multiSet([
    ['Access-Token', response.headers.map['access-token']],
    ['Token-Type', response.headers.map['token-type']],
    ['Client', response.headers.map['client']],
    ['Uid', response.headers.map['uid']]
  ]);

}
