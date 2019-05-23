import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #888;
`

export const Content = styled.View`
    align-items: center;
    flex: 1;
    padding-top: 50;
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

export const LoginButtonText = styled.Text`
    font-size: 20;
    align-self: center;
    color: #FFF;
`

export const LoginButton = styled.TouchableOpacity`
    width: 80%;
    height: 40;
    border-color: #AAA;
    border-width: 2;
    border-radius: 10;
    background-color: #000;
    justify-content: center;
    align-self: center;
`

export const LoginButtonContainer = styled.View`
    margin-top: 30;
    align-self: stretch;
`

export const NoAccountContainer = styled.View`
    margin-top: 62;
    background-color: #AAA;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    height: 70;
`

export const NoAccountButton = styled.TouchableOpacity`
    margin-top: 20;
`

export const NoAccountText = styled.Text`
    align-self: center;
    font-size: 20;
    font-weight: bold;
`