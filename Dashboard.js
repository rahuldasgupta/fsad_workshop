
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";

export default function Dashboard() {
  return (
    <ScrollView style={{flex: 1, backgroundColor:"#fff"}}>
      <View style={{marginTop: 70, marginLeft:25, marginRight: 25}}>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Image source={require("./assets/user.png")} style={{height: 60, width: 60, borderRadius: 100}}></Image>
        <FontAwesome name="search" size={24} color="black" style={{marginTop: 19}} />
      </View>
      <TextInput placeholder='Search' style={{borderColor:"gray", borderWidth: 2, padding: 13, paddingLeft: 20, marginTop: 20, borderRadius: 10}}></TextInput>
      <SliderBox ImageComponentStyle={{marginRight: "25%", marginTop: 30, borderRadius: 15}} images={[require("./assets/slider_1.jpg"), require("./assets/slider_2.png"), require("./assets/slider_3.jpg")]} autoplay={true} circleLoop={true} />
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{height: 192, borderRadius: 15, marginTop: 25, paddingLeft: 10, paddingRight: 10, width: "47%", borderWidth: 2, borderColor:"gray"}}>
          <Image style={{height: 100, width: 120, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 20}} source={require("./assets/apple.png")}></Image>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize: 17, fontWeight:"bold", marginTop: 15}}>Apple</Text>
            <Text style={{backgroundColor:"#92e3a9", color:"#fff", marginTop: 15, padding: 5, borderRadius: 5}}>Rs. 400/kg</Text>
          </View>
        </View>
        <View style={{height: 192, borderRadius: 15, marginTop: 25, paddingLeft: 10, paddingRight: 10, width: "47%", borderWidth: 2, borderColor:"gray"}}>
          <Image style={{height: 100, width: 120, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 20}} source={require("./assets/apple.png")}></Image>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize: 17, fontWeight:"bold", marginTop: 15}}>Apple</Text>
            <Text style={{backgroundColor:"#92e3a9", color:"#fff", marginTop: 15, padding: 5, borderRadius: 5}}>Rs. 400/kg</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{height: 192, borderRadius: 15, marginTop: 25, paddingLeft: 10, paddingRight: 10, width: "47%", borderWidth: 2, borderColor:"gray"}}>
          <Image style={{height: 100, width: 120, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 20}} source={require("./assets/apple.png")}></Image>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize: 17, fontWeight:"bold", marginTop: 15}}>Apple</Text>
            <Text style={{backgroundColor:"#92e3a9", color:"#fff", marginTop: 15, padding: 5, borderRadius: 5}}>Rs. 400/kg</Text>
          </View>
        </View>
        <View style={{height: 192, borderRadius: 15, marginTop: 25, paddingLeft: 10, paddingRight: 10, width: "47%", borderWidth: 2, borderColor:"gray"}}>
          <Image style={{height: 100, width: 120, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 20}} source={require("./assets/apple.png")}></Image>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize: 17, fontWeight:"bold", marginTop: 15}}>Apple</Text>
            <Text style={{backgroundColor:"#92e3a9", color:"#fff", marginTop: 15, padding: 5, borderRadius: 5}}>Rs. 400/kg</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom: 20}}>
        <View style={{height: 192, borderRadius: 15, marginTop: 25, paddingLeft: 10, paddingRight: 10, width: "47%", borderWidth: 2, borderColor:"gray"}}>
          <Image style={{height: 100, width: 120, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 20}} source={require("./assets/apple.png")}></Image>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize: 17, fontWeight:"bold", marginTop: 15}}>Apple</Text>
            <Text style={{backgroundColor:"#92e3a9", color:"#fff", marginTop: 15, padding: 5, borderRadius: 5}}>Rs. 400/kg</Text>
          </View>
        </View>
        <View style={{height: 192, borderRadius: 15, marginTop: 25, paddingLeft: 10, paddingRight: 10, width: "47%", borderWidth: 2, borderColor:"gray"}}>
          <Image style={{height: 100, width: 120, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 20}} source={require("./assets/apple.png")}></Image>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize: 17, fontWeight:"bold", marginTop: 15}}>Apple</Text>
            <Text style={{backgroundColor:"#92e3a9", color:"#fff", marginTop: 15, padding: 5, borderRadius: 5}}>Rs. 400/kg</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}