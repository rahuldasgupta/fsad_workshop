import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

export default class ImagePickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: "",
      isPhotoSelected: false
    };
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    this.setState({
        photoURL: result.assets[0].uri,
        isPhotoSelected: true
    })
  };
  render() {
    return (
      <View style={{ marginTop: "15%"}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Text style={{ fontSize: 25, fontWeight:"bold", color:"gray", textAlign:"center" }}>Image Picker</Text>
        {
            this.state.isPhotoSelected ?
            <Image source={{ uri: this.state.photoURL }} style={{ width: 300, height: 300, borderRadius: 10, marginTop:"10%", justifyContent:"center", alignItems:"center", alignSelf:"center"}} />
            :
            <View>
                <Text style={{ textAlign:"center", marginTop:"10%", fontSize: 17, fontWeight:"bold"}}>No Photo Selected</Text>
                <TouchableOpacity onPress={this.pickImage} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "45%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
                    <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Pick Image</Text>
                </TouchableOpacity>
            </View>
        }
        
      </View>
    );
  }
}
