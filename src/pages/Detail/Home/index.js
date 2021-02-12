import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { css } from '../../../../assets/css/Css';
import FlatButton from './button';

export default function  Home({navigation}) {
   
    return(
        <View style ={{flex:1, alignItems: 'center', justifyContent:"center"}} >
            <Image style = {{flex: 1, width:350,height:10, marginTop:20, marginRight:20}}source ={ require('./7.png')}
            />
            <FlatButton title = 'Jogar'
            onPress ={() => navigation.navigate("Sobre")} /> 
             <FlatButton title ="Sobre" 
            onPress ={() => navigation.navigate("Sobre")} /> 
        </View>
    );

}
