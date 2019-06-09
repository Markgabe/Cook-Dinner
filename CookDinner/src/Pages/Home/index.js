import React, { Component } from 'react';
import { Animated, AsyncStorage } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Feed from '../../Components/Feed';
import QRScreen from '../../Components/QRScreen';
import Notifications from '../../Components/Notifications';
import Menu from '../../Components/Menu';
import Tabs from '../../Components/Tabs';
import { Container } from './styles';

export default class Home extends Component{

    static navigationOptions = { header: null };

    constructor(props){
        super(props);
        this.offset = 0;
        this.state = {
            screen: 0,
            darkMode: false,
            search: '',
        }
        this.arrayRecipes = [{Id: 0, Nome: "Miojo", Descrição: "leitinho poo", IdUser: 5}];
        this.request();
        this.token = AsyncStorage.getItem('token');

        AsyncStorage.getItem('darkMode', (err, data) => {
            this.setState({
                darkMode: Boolean(data),
            });
        });
        this.modalVisible = false;

        this.translateX = new Animated.Value(0);
        this.animatedEvent = Animated.event(
            [
                {
                    nativeEvent:{
                        translationX: this.translateX.interpolate({
                            inputRange: [0, 480*4],
                            outputRange: [0, 480*4],
                            extrapolate: 'clamp'
                        }),
                    }
                }
            ],
            { useNativeDriver: true},
        );

        this.goToScreen = this.goToScreen.bind(this);
    }

    async request(){
        const response = await fetch('https://cookdinnerapi.herokuapp.com/recipes', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).then(x => x.json()).then(x=>{
            for (i in x){
                this.arrayRecipes.push(x[i])
            }
        });
    }

    async requestSearch(search){
        this.setState({search: search})
        const response = await fetch(`https://cookdinnerapi.herokuapp.com/search/${search}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).then(this.arrayRecipes = [{Nome: 'piroca', Descrição: 'pesquisei'}]);
    
    }

    setDarkMode(value){
        this.setState({
            darkMode: value
        });
    }

    setModalVisible(bool){
        this.modalVisible = bool;
    }

    goToScreen(screen){
        this.setState({
            screen: screen
        });

        Animated.timing(this.translateX, {
            toValue: (this.state.screen+1)*480,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.offset = 0;
            this.translateX.setOffset(this.offset);
            this.translateX.setValue(0);
        });
    }

    onHandlerStateChanged(event){
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationX } = event.nativeEvent; 
            this.offset += translationX;
            

            if(translationX <= -240 && this.state.screen!=0){
                this.setState({
                    screen: this.state.screen-1,
                });
            } else if(translationX >= 240 && this.state.screen!=3){
                this.setState({
                    screen: this.state.screen+1,
                });
            };

            this.goToScreen();
            
        }

    }

    render(){
        return (
            <>
                <PanGestureHandler
                    onGestureEvent={this.animatedEvent}
                    onHandlerStateChange={this.onHandlerStateChanged}
                >
                    <Container style={{
                        transform: [{
                            translateX: this.translateX.interpolate({
                                inputRange: [0, 480*4],
                                outputRange: [0, 480*4],
                                extrapolate: 'clamp'
                            }),
                        }]
                    }}>
                        <Feed 
                            searchValue={this.state.search}
                            arrayRecipes={this.arrayRecipes}
                            nav={this.props.navigation.navigate}
                        />
                        <QRScreen />
                        <Notifications />
                        
                    </Container>

                </PanGestureHandler>
                <Tabs screen={this.state.screen} goToScreen={this.goToScreen} />
            </>
        );
    }

}