import React, { Component } from 'react';
import { AsyncStorage, Text, FlatList } from 'react-native';

import FeedCard from '../../Components/FeedCard';

export default class Profile extends Component {

    static navigationOptions = { header: null };

    async requestUser() {
        var token = await AsyncStorage.getItem('token');
        var userID = await AsyncStorage.getItem('openendProfile');
        var response = await fetch(`https://cookdinnerapi.herokuapp.com/find/${userID}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return JSON.parse(response.user);
    }

    async requestUserRecipes() {
        var token = await AsyncStorage.getItem('token');
        var userID = await AsyncStorage.getItem('openendProfile');
        var response = await fetch(`https://cookdinnerapi.herokuapp.com/recipes/${userID}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return JSON.parse(response.recipes);
    }

    constructor(props) {
        super(props);
        this.user = this.requestUser();
        this.arrayRecipes = this.requestUserRecipes();
    }

    render() {
        return (
            <View>
                <Text>{this.user.Nome}</Text>
                <Image source={{uri: `https://cookdinnerapi.herokuapp.com/getpic/${user.ID}`}} />
                <FlatList
                    data={this.arrayRecipes}
                    renderItem={({ item }) => <FeedCard recipe={item} />}
                />
            </View>
        );
    }

}