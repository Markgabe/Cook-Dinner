import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`

export const ConfigText = styled.Text`
    align-self: center;
    margin-left: 10;
    font-size: 20;
`

export const ConfigCard = styled.View`
    width: 100%;
    height: 80px;
    align-items: center;
    flex-direction: row;
    border-bottom-width: 1px;
`

export const LogOutButton = styled.TouchableOpacity`
    color: #DDD;
    border-radius: 15;
    border-color: red;
    border-width: 1;
    align-items: center;
    justify-content: center;
    margin-top: 30;
    width: 95%;
    height: 50;
    align-self: center;
    margin-bottom: 5;
`

export const LogOutText = styled.Text`
    color: red;
    font-size: 20;
`
