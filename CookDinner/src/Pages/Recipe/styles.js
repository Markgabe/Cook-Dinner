import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    color: #EEE;
`

export const Picture = styled.Image`
    width: 150;
    height: 150;
    border-radius: 5;
`

export const Title = styled.Text`
    font-size: 30;
    align-self: stretch;
    font-weight: bold;
`

export const DescriptionBox = styled.Text`
    flex: 1;
    border-width: 1;
    border-color: #DDD;
`

export const Content = styled.View`
    padding-top: 20;
    padding-bottom: 10;
    align-self: stretch;
    flex-direction: row;
`