import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText: {
    flex:0.5,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20
  },

  textInput: {
    fontSize: 30,
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 10,
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    padding: 0
  },

  textInputView:{flex:1},

  image: {
    flex: 0.5,
    resizeMode: 'contain',
    marginTop: 40
  },

  topView: {
    flex:1,
    backgroundColor: '#AAA',
    alignItems: 'center'
  },

  mainView: {
    alignItems: 'center',
    backgroundColor: '#888',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },

  buttonView: {
    marginTop: 20,
    alignSelf: 'stretch',
    flex: 1.3
  },

  button: {
    flex: 0.2,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#000",
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FFF'
  },

  instructions:{
    fontSize: 20,
    marginBottom: 10
  }

});
