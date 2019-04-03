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
            style={styles.image}
            source={require('./img/comida.png')}
          />

        </View>

  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#999',
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
  image: {
    //width: 120,
    height: 120,
    flex: 4,
  }
});
