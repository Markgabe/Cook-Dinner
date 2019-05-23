import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    background-color: #888;
`

export const HasAccountContainer = styled.View`
    margin-top: auto;
    background-color: #AAA;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    height: 10%;
`
export const HasAccountText = styled.Text`
    align-self: center;
    font-size: 20;
    font-weight: bold;
`

export const HasAccountButton = styled.TouchableOpacity`
    margin-top: 20;
`

export const TextBox = styled.TextInput`
    font-size: 20;
    background-color: transparent;
    margin-top: 20;
    width: 80%;
    text-align: left;
    color: #000;
`

export const RegisterButtonContainer = styled.View`
    margin-top: 30;
    align-self: stretch;
`
export const RegisterButton = styled.TouchableHighlight`
    width: 80%;
    height: 40;
    border-color: #777;
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

export const Content = styled.View`
    background-color: #888;
    width: 100%;
    align-items: center;
`

export const AvatarImage = styled.Image`
    width: 150;
    height: 150;
    border-radius: 75;
`

export const AvatarContainer = styled.View`
    margin-top: 30;
`

export const ChooseFileButton = styled.TouchableOpacity`
`

export const IconButton = styled.TouchableOpacity`
    align-self: flex-end;
`
