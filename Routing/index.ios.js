/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

const RootNav = require('./app/root');
class Routing extends Component {
  render() {
    return (
      <NavigatorIOS
        style ={styles.container}
        initialRoute={{
          title: 'My Root',
          component: RootNav
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: 'red'
  },
});

AppRegistry.registerComponent('Routing', () => Routing);