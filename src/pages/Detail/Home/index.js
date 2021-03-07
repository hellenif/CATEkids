import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { css } from '../../../../assets/css/Css';
import FlatButton from './button';

export default function  Home({navigation}) {
   
    return(
        <View style ={{flex:1, alignItems: 'center', justifyContent:"center"}} >
            <Image style = {{flex:1, width:500,height:20, marginTop:-20, marginRight:20}}source ={ require('./7.png')}
            />
            <FlatButton title = 'ORAÇÕES'
            onPress ={() => navigation.navigate("Sobre")} /> 
            
            <View>
             <FlatButton text = 'ORAÇÕES'
            onPress ={() => navigation.navigate("Catequese")} /> 
             </View>
             </View>
    );

}
