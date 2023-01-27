import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as DocumentPicker from 'expo-document-picker';

export default class DocumentPickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docURL: "",
      docName:"",
      isDocumentSelected: false
    };
  }
  pickDocument= async () => {
    let result = await DocumentPicker.getDocumentAsync();
    console.log(result);
    this.setState({
        docURL: result.uri,
        docName: result.name,
        isDocumentSelected: true
    })
  };
  render() {
    return (
      <View style={{ marginTop: "15%"}}>
        <StatusBar backgroundColor={"#005da4"} style="light" />
        <Text style={{ fontSize: 25, fontWeight:"bold", color:"gray", textAlign:"center" }}>Document Picker</Text>
        {
            this.state.isDocumentSelected ?
            <Text style={{ textAlign:"center", marginTop:"10%", fontSize: 17, fontWeight:"bold"}}>{this.state.docName}</Text>
            :
            <View>
                <Text style={{ textAlign:"center", marginTop:"10%", fontSize: 17, fontWeight:"bold"}}>No Document Selected</Text>
                <TouchableOpacity onPress={this.pickDocument} style={{borderRadius: 8,  height: 47, backgroundColor: "#005da4", width: "45%", marginTop: 20, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
                    <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Pick Document</Text>
                </TouchableOpacity>
            </View>
        }
        
      </View>
    );
  }
}
