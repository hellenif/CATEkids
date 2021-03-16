
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet, Image}from 'react-native';
import Routes from './src/roter';
import {css} from './assets/css/Css';
import Home  from './src/pages/Detail/Home/index';
import Sobre from './src/pages/Detail/Sobre';
import Pai from './src/pages/Detail/Pai';

import Alma from './src/pages/Detail/Alma';
import Ave from './src/pages/Detail/Ave';
import Ato from './src/pages/Detail/Ato';
import Invocacao from './src/pages/Detail/Invocacao';
import Credo from './src/pages/Detail/Credo';
import Consagracao from './src/pages/Detail/Consagracao';
import JogoPai from './src/pages/Detail/Pai/JogoPai';
import Catequese from './src/pages/Detail/Catequese/index';
import PaiJogo from './src/pages/Detail/Pai/PaiJogo';
import Quiz from './src/pages/Detail/Catequese/Quiz/index';
import Certa from './src/pages/Detail/Certa';
import Errada from './src/pages/Detail/Errada';
import Cate from './src/pages/Detail/Cate/index';
import Nascimento from './src/pages/Detail/Cate/Nascimento/index';
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
           
            <Image style = {{ width:300,height:50,marginTop:-30, backgroundColor: '#fff'}}
            resizeMode = "contain"
            source = {require('./src/assets/13.png')}
          
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
          }
        }}
        />
        <Stack.Screen name ="Catequese" component = {Catequese}
          initialParams = {{acertos:0,erros:0}}
         options = {{
          title: 'CATEkids',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
         <Stack.Screen name ="Quiz" component = {Quiz}
         options = {{
          title: 'QUIZ',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
        
        <Stack.Screen name ="Pai" component = {Pai}
          options = {{
            title: 'Pai nosso',
            headerStyle:{
              backgroundColor: "#87cefa"
            }
            
          }}

      
        />
         <Stack.Screen name ="Alma" component = {Alma}
           options = {{
            title: 'Alma de Cristo',
            headerStyle:{
              backgroundColor: "#87cefa"
            }
          }}
        />
        <Stack.Screen name ="Ave" component = {Ave}
        />
        
        
         <Stack.Screen name ="Ato" component = {Ato}
        />
        <Stack.Screen name ="Invocacao" component = {Invocacao}
        />
        <Stack.Screen name ="Credo" component = {Credo}
        />
         <Stack.Screen name ="Consagracao" component = {Consagracao}
        />
         <Stack.Screen name ="JogoPai" component = {JogoPai}
          options = {{
            title: 'Pai Nosso',
            headerStyle:{
              backgroundColor: "#87cefa"
            }
          }}
        /><Stack.Screen name ="PaiJogo" component = {PaiJogo}
        options = {{
          title: 'Pai Nosso',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
        <Stack.Screen name ="Certa" component = {Certa}
        initialParams = {{acertos:0,erros:0}}
        options = {{
          title: 'Pai Nosso',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
        <Stack.Screen name ="Errada" component = {Errada}
        initialParams = {{acertos:0,erros:0}}
        options = {{
          title: 'Pai Nosso',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
         <Stack.Screen name ="Cate" component = {Cate}
        initialParams = {{acertos:0,erros:0}}
        options = {{
          title: 'Cate',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
         <Stack.Screen name ="Nascimento" component = {Nascimento}
        
        options = {{
          title: 'Cate',
          headerStyle:{
            backgroundColor: "#87cefa"
          }
        }}
        />
        

          
          
       
        
         </Stack.Navigator>
    </NavigationContainer>

    
  );}


   