import React, { Component } from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default class sendDataProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }


  render() {
    return (
      <View style={{ marginTop: "15%",}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Text style={{ fontSize: 30, fontWeight:"bold", color:"gray", textAlign:"center" }}>Passing Data via Props</Text>
        <Text style={{ fontSize: 15, marginTop:"10%", fontWeight:"bold", color:"#222", textAlign:"center" }}>{this.props.route.params.name}</Text>
        <Text style={{ fontSize: 15, marginTop:"2%", fontWeight:"bold", color:"#222", textAlign:"center" }}>{this.props.route.params.email}</Text>
      </View>
    );
  }
}
