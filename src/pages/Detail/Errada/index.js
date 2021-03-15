import React from 'react';
import * as Animatable  from "react-native-animatable";

import {View, Text, Button, Image} from 'react-native';



export default function  Errada({navigation, route}) {
    const { acertos, erros } = route.params;
    return(
        <View style ={{flex:1, marginTop:200,marginVertical:30, alignItems: 'center', justifyContent:"center"}} >
             <Text >Acertos:{acertos}</Text>
            <Text>Erros:{erros}</Text>
            <View  style = {{marginTop: -450, width:400,height:300,  marginRight: 50}}>
            <Animatable.Image
             style = {{marginTop: 40, width:400,height:300,marginVertical:30,  marginLeft:30 }}
             animation= "flipInY"
             duration = {1500}
             resizeMode = "contain" 
            source = {require('./22.png')} />
            </View>
         </View>
    );

}