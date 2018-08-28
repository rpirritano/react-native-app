import React, {Component} from 'react'; //ES6 import library into a variable called react
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native'; //ES6 destructuring




export default class App extends Component {
  //does not render HTML elements since no browser
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Julian</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>ROBErt</Text>
        <Text style={styles.defaultText}>Fiocco</Text>
      </View>
    );
  }
}

//react native does not use CSS, only uses CSS syntax
//values in pxs

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
});


//From video, not sure if old way
//must register the app to have it render
//AppRegistry.registerComponent('ReactNativeApp', () => App) //takes the name of the app and a function that returns App
