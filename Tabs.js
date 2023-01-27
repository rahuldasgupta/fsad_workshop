import React from 'react';
import {
  View, Text,
  SafeAreaView
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';


//Pages
import Dashboard from './src/pages/Dashboard';
import Practise from './src/pages/Practise';
import Workshop from './src/pages/Workshop';
import AsyncStorageScreen from './src/pages/AsyncStorage';
import ImagePickerScreen from './src/pages/ImagePicker';
import DocumentPickerScreen from './src/pages/DocumentPicker';
import sendDataAPI from './src/pages/sendDataAPI';
import sendDataProps from './src/pages/sendDataProps';
import modalPopup from './src/pages/modalPopup';
import Calender from './src/pages/calender';

const Tab = createBottomTabNavigator();

const DashboardStack = createStackNavigator();
const PractiseStack = createStackNavigator();
const WorkshopStack = createStackNavigator();


const DashboardStackScreen = ({navigation}) => {
  return (
    <DashboardStack.Navigator initialRouteName='Dashboard'>
        <DashboardStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
          })}
        />
    </DashboardStack.Navigator>
  );
};
const PractiseStackScreen = ({navigation}) => {
    return (
      <PractiseStack.Navigator initialRouteName='Dashboard'>
        <PractiseStack.Screen
          name="Practise"
          component={Practise}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
          })}
        />
      </PractiseStack.Navigator>
    );
};
const WorkshopStackScreen = ({navigation}) => {
  return (
    <WorkshopStack.Navigator initialRouteName='Dashboard'>
        <WorkshopStack.Screen
          name="Workshop"
          component={Workshop}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="AsyncStorage"
          component={AsyncStorageScreen}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="ImagePicker"
          component={ImagePickerScreen}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="DocumentPicker"
          component={DocumentPickerScreen}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="SendDataAPI"
          component={sendDataAPI}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="sendDataProps"
          component={sendDataProps}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="modalPopup"
          component={modalPopup}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
        <WorkshopStack.Screen
          name="Calender"
          component={Calender}
          options={() => ({
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#005da4',
              elevation: 5,
              height: 85
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            marginLeft: 7,
            textAlign: "left",
            fontSize: 20,
            },
         })}
        />
      </WorkshopStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            height: 65,
            backgroundColor: '#005da4',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: "100%"
          },
        }}>
          <Tab.Screen
            name="Dashboard"
            component={DashboardStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <MaterialIcons name="dashboard" size={24} color="#fff" />
                      <Text style={{color:"#fff", fontWeight:"bold", fontSize: 12}}>Dashboard</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <MaterialIcons name="dashboard" size={24} color="#fff" />
                      <Text style={{color:"#fff", fontSize: 12}}>Dashboard</Text>
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Practise"
            component={PractiseStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Feather name="edit" size={24} color="#fff" />
                      <Text style={{color:"#fff", fontWeight:"bold", fontSize: 12}}>Practise</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Feather name="edit" size={24} color="#fff" />
                      <Text style={{color:"#fff", fontSize: 12}}>Practise</Text>
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Workshop"
            component={WorkshopStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <MaterialCommunityIcons name="tools" size={24} color="#fff" />
                      <Text style={{color:"#fff", fontWeight:"bold", fontSize: 12}}>Workshop</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <MaterialCommunityIcons name="tools" size={24} color="#fff" />
                      <Text style={{color:"#fff", fontSize: 12}}>Workshop</Text>
                    </View>
                  ),
              })}
          />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;