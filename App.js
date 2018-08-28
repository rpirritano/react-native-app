import React, {Component} from 'react'; //ES6 import library into a variable called react
import {Platform, StyleSheet, Text, View, Image, Dimensions, StatusBar} from 'react-native'; //ES6 destructuring

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'




export default class App extends Component {
  //does not render HTML elements since no browser
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={picSierra}>
          <Text style={styles.userName}>Sierra Spencer</Text>
        </Image>
        <Image style={styles.pic} source={picTanner}>
          <Text style={styles.userName}>Tanner McTab</Text>
        </Image>
      </View>
    );
  }
}

//<StatusBar hidden={true} />
//<Text style={styles.defaultText}>Julian</Text>
//<Text style={[styles.defaultText, styles.selectedText]}>ROBErt</Text>
//<Text style={styles.defaultText}>Fiocco</Text>



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

//pic
//Dimensions below will get the size of the screen since we dont know all screen sizes
//resizeMode will resize the pic: repeat, contain, cover


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    padding: 10,
    color: 'white'
  }
})


/*
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
  },
  pic: {
    borderRadius: 50,
    width: Dimensions.get('window').width.
    resizeMode: 'contain'
  }
});
*/
//From video, not sure if old way
//must register the app to have it render
//AppRegistry.registerComponent('ReactNativeApp', () => App) //takes the name of the app and a function that returns App
