import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Banner from "./src/Banner";
import Destination from "./src/Destination";
import Reviewer from "./src/Reviewer";

export default class setup extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Banner />
        <Destination />
        <Reviewer />
      </View>
    );
  }
}
