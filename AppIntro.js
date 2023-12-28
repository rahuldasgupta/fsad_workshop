
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function appIntro() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor:"#fff"}}>
      <Image source={require("./assets/fruits.gif")} style={{height: 350, width: 350, justifyContent:"center", alignItems:"center", alignSelf:"center", marginTop: 100}}></Image>
      <Text style={{textAlign:"center", fontSize: 25, fontWeight:"bold", marginTop: 35}}>Fresh Vegetables & Fruits</Text>
      <Text style={{textAlign:"center", marginLeft: 50, marginRight: 50}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <View style={{marginTop: 50, height: 55, width:"80%", backgroundColor:"#92e3a9", justifyContent:"center", alignItems:"center", alignSelf:"center", borderRadius: 15}}>
          <Text style={{color: "white", fontSize: 20, fontWeight:"500"}}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}