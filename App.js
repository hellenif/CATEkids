import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet, Image }from 'react-native';
import Routes from './src/roter';
import {css} from './assets/css/Css';
import Home  from './src/pages/Detail/Home/index';
import Sobre from './src/pages/Detail/Sobre';





const Stack = createStackNavigator();



export default function App(){
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name ="Home" component = {Home}
        options = {{
          title: 'CATEkids',
          headerStyle:{
            backgroundColor: "#87cefa"
          },
          headerTitle:(
           
            <Image style = {{ height:50, backgroundColor: '#fff'}}
            resizeMode = "contain"
            source = {require('./src/assets/1.png')}
          
            />
        
          ),

          headerTintColor: "#FFF"

        }}
        />
        <Stack.Screen name ="Sobre" component = {Sobre}
         options = {{
          title: 'CATEkids',
          headerStyle:{
            backgroundColor: "#87cefa"
          },
          headerTitle:(
           
            <Image style = {{ height:50, backgroundColor: '#fff'}}
            resizeMode = "contain"
            source = {require('./src/assets/1.png')}
          
            />
        
          )
         }}
        />
          
          
       
         
          
          
        
        
         </Stack.Navigator>
    </NavigationContainer>

    
  );}


   