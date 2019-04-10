import React from 'react';
import {
  Text, View, TouchableHighlight, TextInput,
  Image, StyleSheet, AsyncStorage, KeyboardAvoidingView,
  Animated, Dimensions, Keyboard, UIManager
}
from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';


const { State: TextInputState } = TextInput;

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { username: '', password: '', shift: new Animated.Value(0) };
    }

    componentWillMount() {
      this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
      this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
      this.keyboardDidShowSub.remove();
      this.keyboardDidHideSub.remove();
    }

  render() {
    const { shift } = this.state;
    return (
      <Animated.View style={[styles.mainView, { transform: [{translateY: shift}] }]}>

        <View style={styles.topView}>
          <Image source={require('./img/comida.png')} style={styles.image}/>
          <Text style={styles.titleText}>Cook Dinner</Text>
        </View>

        <View style={{flex: 1, paddingTop: 60, alignItems: 'center'}}>

        <KeyboardAvoidingView
          style={styles.textInputView}
          behavior="padding"
          keyboardVerticalOffset="200"
          >

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

          </KeyboardAvoidingView>

          <View style= {styles.buttonView}>

            <TouchableHighlight
              style={styles.button}
              onPress={() => validar(this.state.username, this.state.password)}
              underlayColor='#222'>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>

          </View>

          <Text style={styles.instructions}>Ainda não possui uma conta?</Text>
          <View style={{height: 30}}/>

        </View>

      </Animated.View>
    );
  }


  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
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

  console.log(response);

  await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
  await AsyncStorage.setItem('Client', response.headers.map['client']);
  await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
  await AsyncStorage.setItem('Uid', response.headers.map['uid']);

}
