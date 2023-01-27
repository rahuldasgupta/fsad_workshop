import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button, Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Modal from "react-native-modal";

export default class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false
    };
  }
  openModal = () => {
    this.setState({
        isModalActive: true
    })
  }
  closeModal = () => {
    this.setState({
        isModalActive: false
    })
  }
  render() {
    return (
      <View style={{ marginTop: "10%",}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Modal isVisible={this.state.isModalActive}>
            <View style={{ height: 230, width:"80%", backgroundColor:"#fff", padding:"5%", borderRadius: 10, justifyContent:"center", alignContent:"center", alignSelf:"center" }}>
                <Image source={require("../../assets/logo.png")} style={{height: 130, marginBottom: 20, resizeMode:"contain", justifyContent:"center", alignContent:"center", alignSelf:"center"}}/>
                <Button title="Close modal" onPress={this.closeModal} />
            </View>
        </Modal>
        <Text style={{ fontSize: 30, fontWeight:"bold", color:"gray", textAlign:"center" }}> Modal Popup </Text>
        <TouchableOpacity onPress={this.openModal} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "55%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Open Modal Popup</Text>
        </TouchableOpacity>
    
      </View>
    );
  }
}
