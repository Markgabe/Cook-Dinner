import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
`

export const TopBar = styled.View`
    background-color: gray;
    flex-direction: row;
    align-items: center;
`

export const SearchBar = styled.TextInput`
    font-size: 15;
    background-color: #FFF;
    margin-vertical: 10;
    width: 85%;
    height: 40;
    margin-left: 12;
    text-align: center;
    border-color: #CCC;
    border-width: 2;
    border-radius: 15;
`

export const NewRecipeButton = styled.TouchableOpacity`
    margin-left: auto;
    margin-right: 10;
`
