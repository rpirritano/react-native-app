import React, {Component} from 'react'; //ES6 import library into a variable called react
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native'; //ES6 destructuring




export default class App extends Component {
  //does not render HTML elements since no browser
  render() {
    return (
      <View style={styles.container}>
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
//display by defaut uses css flexbox
//container will be the parent flexbox component and in this case,
//the text will be the children flexbox components
//some flexbox:
//flexDirection,
//justifyContent: center, flex-start, flex-end, space-between, space-around
//   - works around the main axis, ie if 'column or row', then y or x axis, respectively
//flex: ie, flex 2, will grow 2 times of 1, similar to flex-grow in reg UI
//use alignItems to control the cross-axis of the above
//alignSelf: to align the flex children: strecth, flex-end, etc 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#DDD'
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
});


//From video, not sure if old way
//must register the app to have it render
//AppRegistry.registerComponent('ReactNativeApp', () => App) //takes the name of the app and a function that returns App
