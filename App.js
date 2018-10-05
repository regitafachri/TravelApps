import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import setup from './src/setup'
import {Provider} from 'react-redux'
import store from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <setup/>
      </Provider>
    );
  }
}
