import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { LinearGradient } from 'expo-linear-gradient';
//import Lottie from 'lottie-react-native';
import { Audio } from 'expo-av';


let gender = "Male"
let name = "Rahul DasGupta"
let isSongPlaying = false
let sound = null

function App() {
  
  NavigationBar.setBackgroundColorAsync("#eb585e");
  NavigationBar.setButtonStyleAsync("light");

  return (
    <View style={{backgroundColor:"#eb585e", flex: 1}}>
      <StatusBar backgroundColor='#eb585e' style={"light"} />
      <Image
        style={{height: 300, width: 300, marginTop: "15%", justifyContent:"center", alignItems:"center", alignSelf:"center"}}
        source={require('./assets/game_console.png')}
      />
      <Text style={{color: "white", fontSize: 28, fontWeight:"bold", marginLeft: "10%", marginRight:"10%", textAlign:"center", marginTop:"5%"}}>Become better in video games in a second</Text>
      <Text style={{color:"white", fontSize: 16, textAlign:"center", marginLeft:"10%", marginRight:"10%", marginTop:"3%", lineHeight: 25}}>Become a way better player with our mobile app. Never lose a game after our coaching from the best players in the world.</Text>
      <TouchableOpacity>
        <View style={{height: 70, width: 70, backgroundColor:"white", justifyContent:"center", alignItems:"center", alignSelf:"center", borderRadius: 100, marginTop: "15%"}}>
          <MaterialIcons name="arrow-forward-ios" size={26} color="#eb585e" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function gradientExample(){
  NavigationBar.setBackgroundColorAsync("#81d5ee");
  NavigationBar.setButtonStyleAsync("light");
  return(
    <View style={{flex: 1}}>
      <StatusBar backgroundColor='#c7a5fd' style={"light"} />
      <LinearGradient
        style={{flex: 1}}
        colors={['#c7a5fd', '#b6adfb', '#8dccf2', '#81d5ee']}
      >
        <View style={{marginTop: "15%", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <Text style={{color: "white", marginLeft:"4%", fontSize: 24, fontWeight:"bold"}}>Trending{'\n'}Collections</Text>
          <Feather name="search" size={24} color="white" style={{marginRight:"4%"}} />
        </View>
        <Text style={{color:"#fff", fontSize: 15, marginLeft:"4%", lineHeight: 24, marginTop:"3%"}}>Kogi Cosby sweater ethical squid{'\n'}disrupt, organic tote bag glu.</Text>
        <>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{height: 350, width:700, marginLeft:"3%", marginTop: "5%"}}>
          <TouchableOpacity>
            <View
              style={{
                height: 270,
                width: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop:"5%", marginLeft:"4%",
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                backgroundColor:"#fff", borderRadius: 10
              }}>
                <LinearGradient
                  colors={['#8c89f0', '#8e89f0', '#9f87ef', '#a685ee', '#9e7cde']}
                  style={{flex: 1, borderRadius: 10}}
                >
                  
                  <ImageBackground style={{flex: 1}} imageStyle={{borderRadius: 10}} source={require('./assets/cardBackground.png')}>
                    <Text style={{color:"white", fontSize: 24, textAlign:"center", marginTop: 20, fontWeight:"bold"}}>Hallowean</Text>
                    <Text style={{color:"white", fontSize: 15, textAlign:"center", marginTop: 4}}>92 Stories</Text>
                  </ImageBackground>
                </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 270,
                width: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop:"5%", marginLeft:"4%",
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                backgroundColor:"#fff", borderRadius: 10
              }}>
                <LinearGradient
                  colors={['#8c89f0', '#8e89f0', '#9f87ef', '#a685ee', '#9e7cde']}
                  style={{flex: 1, borderRadius: 10}}
                >
                  
                  <ImageBackground style={{flex: 1}} imageStyle={{borderRadius: 10}} source={require('./assets/cardBackground.png')}>
                    <Text style={{color:"white", fontSize: 24, textAlign:"center", marginTop: 20, fontWeight:"bold"}}>Hallowean</Text>
                    <Text style={{color:"white", fontSize: 15, textAlign:"center", marginTop: 4}}>92 Stories</Text>
                  </ImageBackground>
                </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 270,
                width: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop:"5%", marginLeft:"4%",
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                backgroundColor:"#fff", borderRadius: 10
              }}>
                <LinearGradient
                  colors={['#8c89f0', '#8e89f0', '#9f87ef', '#a685ee', '#9e7cde']}
                  style={{flex: 1, borderRadius: 10}}
                >
                  
                  <ImageBackground style={{flex: 1}} imageStyle={{borderRadius: 10}} source={require('./assets/cardBackground.png')}>
                    <Text style={{color:"white", fontSize: 24, textAlign:"center", marginTop: 20, fontWeight:"bold"}}>Hallowean</Text>
                    <Text style={{color:"white", fontSize: 15, textAlign:"center", marginTop: 4}}>92 Stories</Text>
                  </ImageBackground>
                </LinearGradient>
            </View>
          </TouchableOpacity>
        </ScrollView>
        </>
      </LinearGradient>
    </View>
  );
}

export default function spotify(){
  /*<Lottie source={require('./assets/profile.json')} style={{height: 300, width:"100%", justifyContent:"center", alignItems:"center", alignSelf:"center"}} autoPlay loop />*/
  NavigationBar.setBackgroundColorAsync("#11132b");
  NavigationBar.setButtonStyleAsync("light");

  buttonPressed = () => {
    alert("Button Was Pressed")
  }
  playMusic = async(songName) => {
    if(isSongPlaying == true){
      await sound.stopAsync();
    }

    if(songName == "Perfect"){
      sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Perfect.mp3'), {shouldPlay: true});
      await sound.setPositionAsync(0);
      await sound.playAsync();
      isSongPlaying = true
    }
    else if(songName == "Ilahi"){
      sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Ilahi.mp3'), {shouldPlay: true});
      await sound.setPositionAsync(0);
      await sound.playAsync();
      isSongPlaying = true
    }
    
  }
  return(
    <View style={{flex: 1}}>
      <StatusBar backgroundColor='#193277' style={"light"} />
      <LinearGradient
        colors={['#193277', '#1a347a', '#183083', '#16276c', '#111639', '#11132b']}
      >
        <ScrollView>
          {
            gender == "Male" ?
              <Image
                source={require('./assets/male.png')}
                style={{height: 100, width: 100, marginTop:"17%", justifyContent:"center", alignItems:"center", alignSelf:"center"}}
              ></Image>
              :
              <></>
          }
          {
            gender == "Female" ?
              <Image
                source={require('./assets/female.png')}
                style={{height: 100, width: 100, marginTop:"17%", justifyContent:"center", alignItems:"center", alignSelf:"center"}}
              ></Image>
            :
              <></>
          }
          {
            gender == "Trans" ?
              <Image
                source={require('./assets/male.png')}
                style={{height: 100, width: 100, marginTop:"17%", justifyContent:"center", alignItems:"center", alignSelf:"center"}}
              ></Image>
            :
              <></>
          }
          <Text style={{color:"#fff", marginTop: -50, textAlign:"center", fontWeight:"bold", fontSize: 24}}>{name}</Text>
          <View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:"7%"}}>
            <View>
              <Text style={{color: "#fff", fontSize: 20, textAlign:"center", fontWeight:"bold"}}>10</Text>
              <Text style={{color: "#fff", fontSize: 16, textAlign:"center", opacity: 0.5}}>FOLLOWERS</Text>
            </View>
            <View style={{borderLeftWidth: 1.6, borderRightWidth: 1.6, borderLeftColor:"#8795be", borderRightColor:"#8795be", paddingLeft: "5%", paddingRight:"5%"}}>
              <Text style={{color: "#fff", fontSize: 20, textAlign:"center", fontWeight:"bold"}}>17</Text>
              <Text style={{color: "#fff", fontSize: 16, textAlign:"center", opacity: 0.5}}>FOLLOWING</Text>
            </View>
            <View>
              <Text style={{color: "#fff", fontSize: 20, textAlign:"center", fontWeight:"bold"}}>5</Text>
              <Text style={{color: "#fff", fontSize: 16, textAlign:"center", opacity: 0.5}}>PLAYLISTS</Text>
            </View>
          </View>
          <Text style={{color:"#fff", marginTop:"8%", marginLeft:"5%", fontWeight:"bold", fontSize: 23}}>Top Artists</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{width: 630}}>
            <View
              style={{
                height: 250,
                width: 180,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop:"4%", marginLeft:"3.5%",
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                backgroundColor:"#fff", borderRadius: 15
              }}
            >
              <ImageBackground source={require('./assets/ed.jpg')} style={{flex: 1}} imageStyle={{borderRadius: 15}}>
                <View style={{backgroundColor: 'rgba(52, 52, 52, 0.6)', flex: 1, borderRadius: 15 }}>
                  <Text style={{color:"#fff", fontSize: 24, fontWeight: "bold", marginLeft: 15, marginTop:"95%"}}>Ed{'\n'}Sheeran</Text>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                height: 250,
                width: 180,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop:"4%", marginLeft:"4%",
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                backgroundColor:"#fff", borderRadius: 15
              }}
            >
              <ImageBackground source={require('./assets/kenny.jpeg')} style={{flex: 1}} imageStyle={{borderRadius: 15}}>
                <View style={{backgroundColor: 'rgba(52, 52, 52, 0.6)', flex: 1, borderRadius: 15 }}>
                  <Text style={{color:"#fff", fontSize: 24, fontWeight: "bold", marginLeft: 15, marginTop:"95%"}}>Kenny{'\n'}G</Text>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                height: 250,
                width: 180,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop:"4%", marginLeft:"4%",
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                backgroundColor:"#fff", borderRadius: 15
              }}
            >
              <ImageBackground source={require('./assets/arijit.webp')} style={{flex: 1}} imageStyle={{borderRadius: 15}}>
                <View style={{backgroundColor: 'rgba(52, 52, 52, 0.6)', flex: 1, borderRadius: 15 }}>
                  <Text style={{color:"#fff", fontSize: 24, fontWeight: "bold", marginLeft: 15, marginTop:"95%"}}>Arijit{'\n'}Singh</Text>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
          <Text style={{color:"#fff", marginTop:"8%", marginLeft:"5%", fontWeight:"bold", fontSize: 23}}>Your Favorites</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 15,}}>
            <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center", marginLeft:"5%", marginRight:"5%"}}>
              <Image source={require('./assets/perfect.jpg')} style={{height: 50, width: 50, borderRadius: 5}}></Image>
              <View>
                <Text style={{color:"#fff", fontWeight:"bold", marginLeft: 10}}>Perfect</Text>
                <Text style={{color: "#fff", opacity: 0.5, marginLeft: 10}}>Ed Sheeran</Text>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
              <Feather name="heart" size={24} color="white" style={{marginRight: 17, marginTop: 18}} />
              <TouchableOpacity onPress={() => playMusic("Perfect")}>
                <View style={{height: 50, width: 50, backgroundColor:"white", justifyContent:"center", alignItems:"center", alignSelf:"center", borderRadius: 100, marginTop: "15%", marginRight:"5%"}}>
                  <Ionicons name="play" size={28} color="#193277" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 8}}>
            <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center", marginLeft:"5%", marginRight:"5%"}}>
              <Image source={require('./assets/yjhd.jpg')} style={{height: 50, width: 50, borderRadius: 5}}></Image>
              <View>
                <Text style={{color:"#fff", fontWeight:"bold", marginLeft: 10}}>Ilahi</Text>
                <Text style={{color: "#fff", opacity: 0.5, marginLeft: 10}}>Arijit Singh</Text>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
              <Feather name="heart" size={24} color="white" style={{marginRight: 17, marginTop: 18}} />
              <TouchableOpacity onPress={() => playMusic("Ilahi")}>
                <View style={{height: 50, width: 50, backgroundColor:"white", justifyContent:"center", alignItems:"center", alignSelf:"center", borderRadius: 100, marginTop: "15%", marginRight:"5%"}}>
                  <Ionicons name="play" size={28} color="#193277" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 8}}>
            <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center", marginLeft:"5%", marginRight:"5%"}}>
              <Image source={require('./assets/kedarnath.jpg')} style={{height: 50, width: 50, borderRadius: 5}}></Image>
              <View>
                <Text style={{color:"#fff", fontWeight:"bold", marginLeft: 10}}>Qafirana</Text>
                <Text style={{color: "#fff", opacity: 0.5, marginLeft: 10}}>Arijit Singh</Text>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
              <Feather name="heart" size={24} color="white" style={{marginRight: 17, marginTop: 18}} />
              <TouchableOpacity onPress={() => playMusic("Qafirana")}>
                <View style={{height: 50, width: 50, backgroundColor:"white", justifyContent:"center", alignItems:"center", alignSelf:"center", borderRadius: 100, marginTop: "15%", marginRight:"5%"}}>
                  <Ionicons name="play" size={28} color="#193277" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}