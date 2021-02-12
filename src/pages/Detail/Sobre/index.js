import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Sobre() {
    return(
        
             <View style ={{flex:1, alignItems: 'center', justifyContent:"center"}} >
            <Image style = {{ width:350,height:400, marginRight:20}}
            source ={ require('./10.png')}
            />
        </View>
    );

}