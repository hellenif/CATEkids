import React from 'react';
import {View,Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { css } from '../../assets/css/Css';

export default  class ProfileScreen extends  React.Component{
    static navigationOptions = { 
        drawerLabel : 'Profile',
    }
    render (){
        return (
            <View Style = {{flex:1,justifyContent:'center'}}>
                <View Style = {{margin:80}} >
                   <Image source = {require('../assets/3.png')} /> 
                </View>
                <View style = {{alignItems: 'center'}}>
                    <Text style = {css.text}> Tela Perfil </Text>
                    

                </View>


            </View>

        );
    }

   
}
    