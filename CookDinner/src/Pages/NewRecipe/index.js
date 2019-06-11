import React from 'react';
import { Text, View, Button, TextInput, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import api from '../../Services/api';

export default class RecipeRegister extends React.Component {
	
	state = { 
		name: 'Nome da receita', 
		description: 'Descreva os passos da sua receita',
		portion: '',
		time: 0, 
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text
					style={{
						fontSize: 30,
					}}>
						Login
					</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, width: 150 }}
					onChangeText={(name) => this.setState({ name: name })}
					value={this.state.name}
				/>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: 150 }}
					onChangeText={(description) => this.setState({ descricao: description })}
					value={this.state.description}
				/>
				<Button
					style={{ height: 40, width: 150 }}
					onPress={() => cadastrarReceita()}
					title="Cadastrar"
					color="#841584"
					accessibilityLabel="Cadastrar a receita"
				/>
			</View>
		);
	}
}

async function cadastrarReceita() {
	api.post('/new_recipe', {
		name: this.state.name,
		description: this.state.description,
		portion: this.state.portion,
		time: this.state.time,
	}).then((response) => {
		switch (response.status) {
			case 201:
				this.props.navigation.goBack();
		}
	});
}
