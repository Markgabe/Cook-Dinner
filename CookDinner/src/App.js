import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <View style={styles.container}>
          <Text style={styles.welcome}>{message}</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('./img/comida.png')}
            />
          </View>

          <Text
            style={{flex:10,
          }}
          ></Text>

        </View>

    );
  }
}

const message = "Welcome to Cook Dinner App!";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#999',
  },

  imageContainer: {
      flex: 8,
  },

  welcome: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 3,
  },
  image: {
    flex: 0.8,
    resizeMode: 'contain',
  }
});
