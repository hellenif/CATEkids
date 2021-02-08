import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'expo-status-bar';


import {View, Text, StyleSheet }from 'react-native';
import Routes from './src/roter';
import {css} from './assets/css/Css';
import {index, ProfileScreen, SettingScreen} from './src/screens';


export default function App(){
 

  
  
  return (
   // <View style = {css.container}>
   <>
  
      <StatusBar style = "light" backgroundColor="#7ecbfa" translucent = {true}/>
      <Routes/>
      </>

    //  </View>
    
  );}


   