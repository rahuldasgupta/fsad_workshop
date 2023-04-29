import React from "react";
import { Text, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <View style={{backgroundColor: "#7540ee", flex: 1}}>
        <View style={{marginTop: 60, justifyContent:"space-between", flexDirection:"row"}}>
          <MaterialIcons name="arrow-back-ios" style={{marginLeft: 15}} size={24} color="white" />
          <Text style={{color:"white", fontSize: 24,}}>Sign Up</Text>
          <FontAwesome name="navicon" style={{marginRight: 15}} size={25} color="white" />
          
        </View>
        <Text style={{fontSize: 30, color:"white", textAlign:"center", marginTop: 80}}>What is your name?</Text>
        <Image
          style={{height: 320, width: 320, alignSelf:"center"}}
          source={{uri: "https://i.ibb.co/0Qct3vS/Conference.png"}}
        />
      </View>
    )
  }
}