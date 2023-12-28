import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pages
import appIntro from './AppIntro';
import Dashboard from './Dashboard';

const AppLoad = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <AppLoad.Navigator initialRouteName='App Intro'>
        <AppLoad.Screen name="App Intro" component={appIntro} options={{headerShown: false}}/>
        <AppLoad.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
      </AppLoad.Navigator>
    </NavigationContainer>
  );
}