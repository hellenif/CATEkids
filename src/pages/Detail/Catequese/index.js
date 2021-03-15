import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import {View, Text, Button, Image, Alert, StyleSheet, ScrollView} from 'react-native';

import { css } from '../../../../assets/css/Css';




export default function  Catequese({navigation, route}) {
    

    function questaoCerta(){
        navigation.push("Certa",{acertos:acertos+1, erros:erros});
    }


    function questaoErrada(){
        navigation.push("Errada",{acertos:acertos, erros:erros+1});
    }

    const { acertos, erros } = route.params;

    return(
        <ScrollView>
        <View style ={{flex:1,borderBottomEndRadius:10, marginTop:470,   justifyContent:"center"}}>
            <Image style = {{ width:400,height:300, marginTop:-500}}
            resizeMode = "contain" 
            source = {require('./20.png')}/>

        <View style ={{flex:1, marginTop:250, marginVertical:30}}>
        <Text style= {{ fontSize:20}}> Onde Jesus nasceu? </Text>

       
        <View style ={{flex:1, paddingVertical:10, marginTop:10,   justifyContent:"center"}} >
           
           
            <Button
           onPress={questaoErrada.bind(this)} title="Jerusalém"></Button>
            <Button onPress={() => questaoCerta()} title="Belém" ></Button>
            <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>
           
            
            <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
            <Text style= {{ fontSize:20}}> Onde Jesus nasceu? </Text>

            <Button
            onPress={() => questaoCerta()} title="Belém"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Jerusalém"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>
           
            <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
            <Text style= {{ fontSize:20}}> Onde Jesus nasceu? </Text>

            <Button
            onPress={() => questaoCerta()} title="juazeiro"></Button>
            <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>
            
            <View style= {{marginLeft:150, borderRadius:30,paddingBottom:25, marginEnd:10, marginTop:80}}>
            <Button
            title = "Próximo" 
             onPress = {() => navigation.navigate("Quiz")}/>
            
            </View>
            </View>
            </View>
        </View>
        </ScrollView>
    );

}