import React, { Component } from 'react';
import { AsyncStorage, Text, FlatList } from 'react-native';

import FeedCard from '../../Components/FeedCard';
import api from '../../Services/api';

export default class Profile extends Component {

    static navigationOptions = {
		header: null 
	};

	state = {
		userId: 0,
		user: {
			name: '',
			created_at: '',
			recipes: []
		}
	}

    async getUser() {
		api.get('/find_user/'+this.state.userId).then((response) => {
			this.setState({user: response.data});
		});
	}

    constructor(props) {
		super(props);
		if(AsyncStorage.getAllKeys().includes('openedProfile')){
			AsyncStorage.getItem('openedProfile').then((response) => {
				this.setState(response);
			});
		} else {
			this.props.navigation.goBack();
		}
	}
	
	componentDidMount(){
		this.getUser();
	}

    render() {
        return (
            <View>
                <Text>{this.state.user.name}</Text>
                <Image source={{uri: `https://cookdinnerapi.herokuapp.com/get_pic/${this.state.userId}`}} />
                <FlatList
                    data={this.state.user.arrayRecipes}
                    renderItem={({ item }) => <FeedCard recipe={item} />}
                />
            </View>
        );
    }

}