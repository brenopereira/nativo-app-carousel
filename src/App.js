import React, {Component} from 'react';
import {Text, View} from 'react-native';
import IntroductionScreen from './screens/introduction/inedx';

export default class App extends Component {
  render() {
    return (
      <View>
        <IntroductionScreen />
      </View>
    );
  }
}
