/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Cook Dinner App!</Text>

          <Image
            style={{
                width: 120,
                height:120,
            }}
            source={require('./comida.png')}
          />

        </View>

  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
