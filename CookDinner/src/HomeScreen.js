import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <View style= {styles.mainView}>
        <View style= {styles.textView}>
          <Text></Text>
          <Text style={styles.titleText}>Welcome to Cook Dinner</Text>
        </View>
        <View style= {styles.simpleButtonView}>
          <Button
            title="Log in"
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Text style={{height:5}}></Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('Cadastro')}
          />
        </View>
        <View style={{flex:1}}><Text></Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    alignItems: 'center'
  },

  titleText: {
    fontSize: 35,
    flex: 1
  },

  simpleButtonView: {
    width: "90%"
  },

  textView: {
    flex:1
  }


});
