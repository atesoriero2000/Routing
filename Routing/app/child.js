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

const Child2 = require('./child2');

class ChildNav extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>My Value: {this.props.myElement}</Text>
        
        <TouchableHighlight style={styles.button}
          onPress={() => this.goDerper()}
          underlayColor= '#BBBBBB'>
          
          <Text style={styles.buttonText}>
            EVEN DERPER
          </Text>
          
          
        </TouchableHighlight>
      </View> 
    );
  }
  
  goDerper(){
    this.props.navigator.push({
      title: 'The Child2 Title',
      component: Child2,
     });
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  button:{
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    //color: "#FFFFFF"
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
    fontFamily: 'HelveticaNeue-CondensedBold'
  },
  text:{
    flex: 2,
    fontSize: 20,
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
});

module.exports = ChildNav;