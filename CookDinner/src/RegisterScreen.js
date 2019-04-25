
import React from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet, KeyboardAvoidingView,
TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import styles from './styles';
import Icon from 'react-native-fa-icons';

export default class Register extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { email: '', password: '', name: '', birth: '', avatarSource: require('./img/person.png') };
    }

  chooseFile = () => {
      var options = {
        title: 'Select Image',
        customButtons: [{ name: 'TC', title: 'Take Photo and Crop' }, { name: 'SC', title: 'Choose from Library and Crop' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton == "TC") {
          ImageCropPicker.openCamera({
            width: 150,
            height: 150,
            cropping: true,
          }).then(image => {
            this.setState({
              avatarSource: { uri: image.path },
            })
          });
        } else if (response.customButton == "SC") {
          ImageCropPicker.openPicker({
            width: 150,
            height: 150,
            cropping: true
          }).then(image => {
            this.setState({
              avatarSource: { uri: image.path },
            })
          });
        } else {
          const source = { uri: response.uri };

          this.setState({
            avatarSource: source,
          });
        }
      });
    }

  chooseCustomFile = () => {
      ImageCropPicker.openPicker({
        width: 150,
        height: 150,
        cropping: true
      }).then(image => {
        this.setState({
          avatarSource: { uri: image.path },
        })
      });

    }

  async cadastrar(user, pass, name) {

        const response = await fetch('https://receitas-dos-leks.herokuapp.com/auth/', {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: user,
              password: pass,
              name: name
          })
        });

        await AsyncStorage.setItem('Access-Token', response.headers.map['access-token']);
        await AsyncStorage.setItem('Client', response.headers.map['client']);
        await AsyncStorage.setItem('Token-Type', response.headers.map['token-type']);
        await AsyncStorage.setItem('Uid', response.headers.map['uid']);

        (response.status === 200) ? this.props.navigation.navigate("Home") : alert("Não foi possível concluir o registro!");

      }

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1, alignItems: 'center', backgroundColor: '#888'}}>

        <View style = {{marginTop : '5%'}}>
          <Image source={this.state.avatarSource} style={{width: 150, height: 150, borderRadius : 150/2}}/>
          <TouchableOpacity onPress = {this.chooseFile} style= {{alignSelf: 'flex-end'}}>
            <Icon name='plus-circle' style={{fontSize: 50, borderRadius : 25, color:'black'}}/>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#888', width: "100%", alignItems: 'center',
      height: "80%"}}>
          <TextInput style={styles.textInput2}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          underlineColorAndroid= "#000"
          />

          <TextInput style={styles.textInput2}
          placeholder="E-mail"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          underlineColorAndroid= "#000"
          />

          <TextInput style={styles.textInput2}
          placeholder="Year you were born"
          onChangeText={(birth) => this.setState({birth})}
          value={this.state.birth}
          underlineColorAndroid= "#000"
          />

          <TextInput style={styles.textInput2}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry = {true}
          underlineColorAndroid= "#000"
          />

          <View style={styles.buttonView}>

            <TouchableHighlight style={styles.button2}
              onPress={() => this.cadastrar(this.state.email, this.state.password, this.state.name)}
              underlayColor='#222'>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableHighlight>

          </View>

        </View>

        <View style={styles.bottomView2}>
          <Text style={{marginTop: 20, fontSize: 20}}>Já possui uma conta? </Text>
          <TouchableOpacity style={{marginTop: 20}}
          onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Clique!</Text>
          </TouchableOpacity>
        </View>


      </KeyboardAvoidingView>
    );
  }

}
