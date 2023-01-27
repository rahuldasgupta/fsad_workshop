import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button, Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Modal from "react-native-modal";
import DatePicker from 'react-native-modern-datepicker';

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      date: '',
    };
  }
  openModal = () => {
    this.setState({
        isModalActive: true
    })
  }
  changeDate = (date) => {
    this.setState({
        isModalActive: false,
        date: date
    })
  }
  render() {
    return (
      <View style={{ marginTop: "15%",}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Modal isVisible={this.state.isModalActive}>
            <View style={{ height: 370, width:"95%", backgroundColor:"#fff", padding:"5%", borderRadius: 10, justifyContent:"center", alignContent:"center", alignSelf:"center" }}>
                <DatePicker
                    mode="calendar"
                    current="2023-01-27"
                    onDateChange={(selectedDate) => this.changeDate(selectedDate)}
                />
            </View>
        </Modal>
        <Text style={{ fontSize: 30, fontWeight:"bold", color:"gray", textAlign:"center" }}> Calender / Date Picker </Text>
        <Text style={{ fontSize: 15, marginTop:"10%", fontWeight:"bold", color:"#222", textAlign:"center" }}> Date: {this.state.date} </Text>
        <TouchableOpacity onPress={this.openModal} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "55%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Open Date Picker</Text>
        </TouchableOpacity>
    
      </View>
    );
  }
}
