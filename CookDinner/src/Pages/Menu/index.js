import React from 'react';
import { Text, View } from 'react-native';

import Tabs from '../../Components/Tabs';
import Container from './styles';

export default class Menu extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
  }

  render(){
      return (
            <View style={{flex: 1}}>
                <Text>WIP</Text>
                <Tabs screen='Menu' nav={this.props.navigation.navigate}/>
            </View>
      );
  }
}
