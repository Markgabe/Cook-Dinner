import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1.7;
	background-color: #000;
	justify-content: center;
`

export const Content = styled.KeyboardAvoidingView`
    align-items: center;
    padding-top: 20;
    padding-bottom: 50;
    background-color: #888;
`

export const HasAccountContainer = styled.View`
    margin-top: auto;
    padding-bottom: 30;
    padding-top: 30;
    background-color: #AAA;
    width: 100%;
    justify-content: center;
    height: 70;
`
export const HasAccountText = styled.Text`
    align-self: center;
    font-size: 20;
    font-weight: bold;
`

export const HasAccountButton = styled.TouchableOpacity`
`

export const TextBox = styled.TextInput`
    background-color: #FFF;
    margin-top: 10;
    font-size: 20;
    width: 80%;
    text-align: center;
    border-color: gray;
    border-width: 2;
    border-radius: 10;
`

export const RegisterButtonContainer = styled.View`
    margin-top: 30;
    margin-bottom: 30;
    align-self: stretch;
`
export const RegisterButton = styled.TouchableOpacity`
    width: 80%;
    height: 40;
    border-color: #CCC;
    border-width: 2;
    border-radius: 10;
    background-color: #000;
    justify-content: center;
    align-self: center;
`

export const RegisterButtonText = styled.Text`
    font-size: 20;
    align-self: center;
    color: #FFF;
`

export const Indicator = styled.ActivityIndicator`
    align-self: center;
	z-index: 2;
	position: absolute;
`
