import React, {Component} from 'react'; //ES6 import library into a variable called react
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar} from 'react-native'; //ES6 destructuring

export default class App extends Component {
  render() {
//does not render HTML elements since no browser
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Sierra</Text>
        <Text>Tanner</Text>
        <Text>Travis</Text>
      </View>
    );
  }
}


//From video, not sure if old way
//must register the app to have it render
AppRegistry.registerComponent('ReactNativeApp', () => App) //takes the name of the app and a function that returns App
