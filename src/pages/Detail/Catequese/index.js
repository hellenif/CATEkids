import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import {View, Text, Button, Image, Alert, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';

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
           
            
            <Image style = {{ width:400,height:350, marginTop:-480}}
            resizeMode = "contain" 
            source = {require('./29.png')}/>

        <View style ={{flex:1, marginTop:-250}}>
       <Image style = {{ resizeMode: "cover",
                   height:'15%',
                   width: '100%',  
                   marginTop:90,
                   marginLeft:20, marginVertical:-500}} resizeMode = "contain" source = {require('./mae.png')} />

       
        <View style ={{flex:1, paddingVertical:10, marginTop:515,  justifyContent:"center"}} >
        <Image style = {{ resizeMode: "cover",
                   height:'15%',
                   width: '100%',
                   marginTop:120,
                   marginLeft:20, marginVertical:-700}} resizeMode = "contain" source = {require('./mae.png')} />
           
            <Button color= "#87cefa"
           onPress={questaoErrada.bind(this)} title="Ana"></Button>
            <Button color= "#31aefc" onPress={() => questaoCerta()} title="Maria" ></Button>
            <Button color= "#3a9fde" onPress={questaoErrada.bind(this)} title="Isabel"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Tereza"></Button>
           
            
            <View style ={{flex:1, marginTop:100, marginVertical:30}}></View>
            
            <Button
            onPress={() => questaoCerta()} title="Gabriel"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Rafael"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Miguel"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Daniel"></Button>
           
            <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        

            <Button
            onPress={() => questaoCerta()} title="juazeiro"></Button>
            <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>
            

            <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        

        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>


        <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        

        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>

        <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        

        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>

        
        <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>


        <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>
        


        
        
        
            <View style= {{position: 'absolute', marginLeft:150, borderRadius:30,paddingBottom:25, marginEnd:10, marginTop:-700}}>
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