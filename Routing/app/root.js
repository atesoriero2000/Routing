//@flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const Child = require('./child');

class RootNav extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        
        <TouchableHighlight style={styles.button}
          onPress={() => this.goDerper()}
          underlayColor= '#BBBBBB'>
          
          <Text style={styles.buttonText}>
            We must go derper
          </Text>
          
          
        </TouchableHighlight>
      </View> 
    );
  }
  
  goDerper(){
    this.props.navigator.push({
      title: 'The Child Title',
      component: Child,
      passProps: {myElement: '      Derper'}
    });
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5151f4',
    padding: 10,
  },
  button:{
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#123456',
    justifyContent: 'center',
    //color: "#FFFFFF"
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
    fontFamily: 'HelveticaNeue',
  },
});

module.exports = RootNav;