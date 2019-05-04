import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-fa-icons';

import Container from './Styles';
import TopBar from '../../Components/TopBar'
import Feed from '../../Components/Feed'
import Tabs from '../../Components/Tabs'


export default function Home() {
    var navigationOptions = { header: null };
    var search = '';
    return (
    <Container>
        <TopBar />
        <Feed />
        <Tabs/>
    </Container>
    );
}
