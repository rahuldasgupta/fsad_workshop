import React, { Component } from "react";
import { Text, View, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';

export default class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleAsyncStorageNavigation = () => {
    this.props.navigation.navigate("AsyncStorage")
  }
  handleImagePickerNavigation = () => {
    this.props.navigation.navigate("ImagePicker")
  }
  handleDocumentPickerNavigation = () => {
    this.props.navigation.navigate("DocumentPicker")
  }
  handleSendAPINavigation = () => {
    this.props.navigation.navigate("SendDataAPI")
  }
  sendDataViaProps = () => {
    this.props.navigation.navigate("sendDataProps", {
      name: "Rahul",
      email: "abctest@gmail.com"
    })
  }
  handleModalPopupNavigation = () => {
    this.props.navigation.navigate("modalPopup")
  }
  handleCalenderNavigation = () => {
    this.props.navigation.navigate("Calender")
  }
  render() {
    return (
      <View style={{ marginTop: "10%",}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Text style={{ fontSize: 30, fontWeight:"bold", color:"gray", textAlign:"center" }}> Workshop </Text>
        <TouchableOpacity onPress={this.handleAsyncStorageNavigation} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Store Data in AsyncStorage</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleImagePickerNavigation} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Image Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleDocumentPickerNavigation} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Document Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleSendAPINavigation} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Send Data via API</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.sendDataViaProps} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Pass Data via Props</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleModalPopupNavigation} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Modal Popup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleCalenderNavigation} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "90%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Calender</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
