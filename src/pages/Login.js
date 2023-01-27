import React from "react";
import { Image, View, Dimensions, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { StatusBar } from 'expo-status-bar';

const windowHeight = Dimensions.get('window').height;

export default class login extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            email: "",
            password: ""
        };
    }
    handleRegister = () => {
      this.props.navigation.navigate("Register")
    }
    handleLogin = () => {
      this.props.navigation.navigate("Tabs")
    }
    render(){
        return(
            <View style={{flex: 1, alignItems: "center", }}>
                <StatusBar backgroundColor={"#0b50aa"} style="light" />
                <ImageBackground source={require("../../assets/background.png")}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                      <View >
                          <View style={{justifyContent: "center", alignItems: "center", marginTop: "30%", marginBottom: "12%"}}>
                              <Image
                                  style={{
                                      height: 110,
                                      resizeMode:"contain"
                                  }}
                                  source={require("../../assets/logo_white.png")}
                              />
                          </View>
                          <View style={{
                                      marginTop: "12%",
                                      width: "100%",
                                      padding: "5%",
                                      paddingTop:"15%",
                                      backgroundColor: "#fff",
                                      height: windowHeight-200,
                                      marginTop: "5%"
                              }}>
                                <Text style={{ color: "#222", fontSize: 32, fontWeight: "bold", paddingLeft: 12}}>Login</Text>
                                <View style={{ padding: 12}}>
                                    <View
                                        style={{
                                            width: "100%",
                                            height:55,
                                            backgroundColor: "#fff",
                                            marginTop: 15,
                                            paddingLeft: 5,
                                            justifyContent:'center',
                                            borderBottomWidth: 1,
                                            borderColor: "#DADADA"
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                width:"100%",
                                                height:50,
                                                color: "#0b50aa",
                                                fontSize: 15.5,
                                                fontWeight:"bold"
                                            }}
                                            value={this.state.email}
                                            placeholder="Email"
                                            placeholderTextColor={"#9E9E9E"}
                                            onChangeText={(e) =>  this.setState({email: e})}
                                        />
                                    </View>
                                    <View
                                        style={{
                                          width: "100%",
                                          height:55,
                                          backgroundColor: "#fff",
                                          marginTop: 15,
                                          paddingLeft: 5,
                                          justifyContent:'center',
                                          borderBottomWidth: 1,
                                          borderColor: "#DADADA",
                                          marginTop: 25
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
                                            value={this.state.password}
                                            placeholder="Password"
                                            placeholderTextColor={"#9E9E9E"}
                                            secureTextEntry={true}
                                            onChangeText={(e) =>  this.setState({password: e})}
                                        />
                                    </View>
                                    <View style={{ alignItems: "flex-end", marginTop: 10, marginRight:"2%" }}>
                                        <TouchableOpacity>
                                          <Text style={{ color: "#0b50aa", }}>
                                              Reset Password?
                                          </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 25, flexDirection: "row", alignSelf: "center", justifyContent:"space-around"}}>
                                        <TouchableOpacity onPress={this.handleRegister} style={{borderRadius: 8,  height: 47, backgroundColor: "#fff", borderColor:"#0b50aa", borderWidth: 1.1, width: "45%", marginRight:"2.5%", justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
                                            <Text style={{fontWeight: "bold", color: "#0b50aa", fontSize: 17, marginTop: -3,}}>Register</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.handleLogin} style={{borderRadius: 8,  height: 47, backgroundColor: "#0b50aa", width: "45%", marginLeft:"2.5%", justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
                                            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17, marginTop: -3,}}>Log In</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                          </View>
                      </View>
                  </ScrollView>
              </ImageBackground>
        </View>
        );
    }
}