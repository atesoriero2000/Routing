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

class Child2Nav extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        
        <View style={styles.top}>
          <Text style={styles.bigText}>
            DERPEST
          </Text>
        </View>
        
        <View style={styles.bottom}>
          <TouchableHighlight style={styles.button}
            onPress={() => this.goToStart()}
            underlayColor= '#BBBBBB'>
            <Text style={styles.buttonText}>
              Back To Start
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button}
            onPress={() => this.goBack()}
            underlayColor= '#BBBBBB'>
            <Text style={styles.buttonText}>
              Back One
            </Text>
          </TouchableHighlight>
        </View>
      </View> 
    );
  }
  
  goToStart(){
    this.props.navigator.popToTop();
  }
  goBack(){
    this.props.navigator.pop();
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 10,
  },
  top:{
    flex: 2,
    opacity: 100,
    marginTop: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'lightgray',
  },
  bottom:{
    flex: 2,
    opacity: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
  },
  button:{
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'center',
    margin: 10,
    //color: "#FFFFFF"
  },
  buttonText:{
    fontSize: 20,
    color: '#fff',
    marginTop: 6,
    fontFamily: 'HelveticaNeue-Bold'
  },
  bigText:{
    fontSize: 90,
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#fff',
  },
});

module.exports = Child2Nav;