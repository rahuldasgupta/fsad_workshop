import React, { Component } from "react";
import { Button, Text, View, Image, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from "expo-image-picker";

export default class sendDataAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: "",
      isPhotoSelected: false,
      name: "",
      mobile: "",
      email: "",
      course: "",
      year: "",
    };
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    this.setState({
      photoURL: result.assets[0].uri,
      isPhotoSelected: true,
    });
  };

  submitData = async () => {
    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("mobile", this.state.mobile);
    formData.append("email", this.state.email);
    formData.append("course", this.state.course);
    formData.append("year", this.state.year);
    formData.append("image", {
      uri: this.state.photoURL,
      name: `random6523633215.jpg`,
      type: `image/jpg`,
    });
    console.log(formData)
    await fetch("https://geocovid.in/NIT/api/add_details.php", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };

  render() {
    return (
      <View style={{ marginTop: 30, marginLeft: 25, marginRight: 25 }}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <View
            style={{
                width: "100%",
                height:50,
                backgroundColor: "#fff",
                marginTop: 25,
                paddingLeft: 15,
                borderRadius: 8,
                justifyContent:'center'
            }}
        >
            <TextInput
                style={{
                    width:"100%",
                    height:45,
                    color: "#0b50aa",
                    fontSize: 15.5,
                    fontWeight:"bold"
                }}
                value={this.state.name}
                placeholder="Full Name"
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(e) => this.setState({ name: e })}
            />
        </View>
        <View
            style={{
                width: "100%",
                height:50,
                backgroundColor: "#fff",
                marginTop: 25,
                borderRadius: 8,
                paddingLeft: 15,
                justifyContent:'center'
            }}
        >
            <TextInput
                style={{
                    width:"100%",
                    height:45,
                    color: "#0b50aa",
                    fontSize: 15.5,
                    fontWeight:"bold"
                }}
                value={this.state.mobile}
                placeholder="Phone Number"
                keyboardType="number-pad"
                maxLength={10}
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(e) => {this.setState({ mobile: e })}}
            />
        </View>
        <View
            style={{
                width: "100%",
                height:50,
                backgroundColor: "#fff",
                marginTop: 25,
                borderRadius: 8,
                paddingLeft: 15,
                justifyContent:'center'
            }}
        >
            <TextInput
                style={{
                    width:"100%",
                    height:45,
                    color: "#0b50aa",
                    fontSize: 15.5,
                    fontWeight:"bold"
                }}
                value={this.state.email}
                placeholder="Email"
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(e) => {this.setState({ email: e })}}
            />
        </View>
        <View
            style={{
                width: "100%",
                height:50,
                backgroundColor: "#fff",
                marginTop: 25,
                paddingLeft: 15,
                borderRadius: 8,
                justifyContent:'center'
            }}
        >
            <TextInput
                style={{
                    width:"100%",
                    height:45,
                    color: "#0b50aa",
                    fontSize: 15.5,
                    fontWeight:"bold"
                }}
                value={this.state.course}
                placeholder="Course"
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(e) => {this.setState({ course: e })}}
            />
        </View>
        <View
            style={{
                width: "100%",
                height:50,
                backgroundColor: "#fff",
                marginTop: 25,
                paddingLeft: 15,
                borderRadius: 8,
                justifyContent:'center'
            }}
        >
            <TextInput
                style={{
                    width:"100%",
                    height:45,
                    color: "#0b50aa",
                    fontSize: 15.5,
                    fontWeight:"bold"
                }}
                value={this.state.year}
                placeholder="Year"
                keyboardType="number-pad"
                maxLength={4}
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(e) => {this.setState({ year: e })}}
            />
        </View>
        <View style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
        {
          this.state.isPhotoSelected ?
            <Image
              source={{ uri: this.state.photoURL }}
              style={{
                height: 150,
                width: 150,
                borderRadius: 10,
                justifyContent:"center", alignItems:"center", alignSelf:"center"
              }}
            />
          :
          <View>
            <Text style={{ textAlign:"center", fontSize: 15, fontWeight:"bold"}}>No Photo Selected</Text>
              <TouchableOpacity onPress={this.pickImage} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "45%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
                  <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Pick Image</Text>
              </TouchableOpacity>
          </View>
        }
        </View>
        <TouchableOpacity onPress={this.submitData} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "85%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Submit Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
