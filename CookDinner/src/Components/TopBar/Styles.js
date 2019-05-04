import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    backgroundColor: 'gray';
    flexDirection: 'row';
    alignItems: 'center';
`

export const SearchBar = styled.TextInput`
    fontSize: 15;
    backgroundColor: '#FFF';
    marginVertical: 10;
    width: "85%";
    height: 36;
    marginLeft: 12;
    textAlign: 'center';
    borderColor: 'gray';
    borderWidth: 2;
    borderRadius: 15;
`

export const NewRecipe = styled.TouchableOpacity`
    marginLeft: "auto";
    marginRight: 10;
`
