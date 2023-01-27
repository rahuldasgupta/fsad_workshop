import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStorageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  async componentDidMount(){
    let userName = await AsyncStorage.getItem('userName');  
    let parsed = JSON.parse(userName);
    if(parsed){
        this.setState({
            name: parsed
        })
    }
  }
  saveData = async () => {
    let name = this.state.name
    await AsyncStorage.setItem('userName', JSON.stringify(name));
    alert("Data Saved, Kill the app & reopen")
  }
  render() {
    return (
      <View style={{ marginTop: "15%"}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Text style={{ fontSize: 25, fontWeight:"bold", color:"gray", textAlign:"center" }}>Store Data in AsyncStorage </Text>
        <Text style={{ marginLeft: "10%", marginTop:"10%", fontSize: 17, fontWeight:"bold"}}>My Name is: {this.state.name}</Text>
        <View
            style={{
                width: "85%",
                marginLeft:"7.5%",
                height:55,
                backgroundColor: "#fff",
                marginTop: 15,
                paddingLeft: 20,
                justifyContent:'center',
                borderWidth: 1,
                borderColor: "#DADADA",
                marginTop: 25,
                borderRadius: 10
            }}
        >
            <TextInput
                style={{
                    height:50,
                    color: "#0b50aa",
                    fontSize: 15.5,
                    fontWeight:"bold",
                    width: "100%",
                }}
                value={this.state.name}
                placeholder="Full Name"
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(e) =>  this.setState({name: e})}
            />
        </View>
        <TouchableOpacity onPress={this.saveData} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "45%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Save Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
