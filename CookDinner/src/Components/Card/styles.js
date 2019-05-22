import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 0px 20px;
    border-width: 1;
    border-color: '#CCC';
    border-radius: 15;
`

export const Picture = styled.Image`
    width: 100;
    height: 100;
    border-radius: 75;
    align-self: flex-start;
    margin: 20;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20;
    align-self: center;
    margin: 10 0 30 0;
`

export const Grade = styled.Text`
    color: '#DDD';
    font-size: 10;
    align-self: flex-end;
`