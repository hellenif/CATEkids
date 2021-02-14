import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity onPress = {onPress}>
            <View style = {{ borderRadius:8, borderWidth:5,borderColor:"white", marginTop:-40, paddingVertical:15,marginVertical:70, paddingHorizontal:100,
            backgroundColor:'#5ca5e6'}}>
                <Text style = {{textAlign: "center", fontSize:20, color:"white"}}> JOGAR </Text>

            </View>
        </TouchableOpacity>
        
    )
}
//touch=botao