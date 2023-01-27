import React, { Component } from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }


  render() {
    return (
      <View style={{ marginTop: "75%",}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Text style={{ fontSize: 30, fontWeight:"bold", color:"gray", textAlign:"center" }}> Dashboard </Text>
      </View>
    );
  }
}
