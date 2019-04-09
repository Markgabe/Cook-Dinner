import { StyleSheet } from 'react-native';

export default StyleSheet.create({

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888'
  },

  buttonView: {
    marginTop: 20,
    alignSelf: 'stretch',
    flex: 1
  },

  button: {
    flex: 0.2,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#999",
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 20,
    alignSelf: 'center'
  }

});
