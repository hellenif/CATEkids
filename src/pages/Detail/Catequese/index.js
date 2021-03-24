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

        <View style ={{flex:1, marginTop:-200}}>
        
       <Image style = {{ resizeMode: "cover",
                   height:'13%',
                   width: '100%',  
                   marginTop:90,
                   marginLeft:10, marginVertical:-530}} resizeMode = "contain" 
                   source = {require('./10.png') }/>

       
        <View style ={{flex:1, paddingVertical:10, marginTop:550,  justifyContent:"center"}} >
        
           
            <Button color= "#87cefa"
           onPress={questaoErrada.bind(this)} title="Ana e Joaquim"></Button>
            <Button color= "#31aefc" onPress={() => questaoCerta()} title="Maria e José" ></Button>
            <Button color= "#3a9fde" onPress={questaoErrada.bind(this)} title="Adão e Eva"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Isabel e Zacarias"></Button>
           

            <View style ={{flex:1, marginTop:-80, marginVertical:50}}></View>
            <Image style = {{ 
                   height:'13%',
                   width: '90%',  
                   marginTop:50,
                   marginLeft:20, marginVertical:450}} resizeMode = "contain" source = {require('./22.png')} />

<View style ={{flex:1, paddingVertical:10, marginTop:-20,  justifyContent:"center"}} > 
            <Button
            onPress={() => questaoCerta()} title="Gabriel"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Rafael"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Miguel"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Daniel"></Button>
           
            
        
            <View style ={{flex:1, marginTop:-10, marginVertical:-70}}></View>
            <Image style = {{ resizeMode: "cover",
                   height:'13%',
                   width: '100%',  
                   marginTop:100,
                   marginLeft:20, marginVertical:-50}} resizeMode = "cover" source = {require('./23.png')} />
           
            <Button
            onPress={() => questaoCerta()} title="Ave, Maria, cheia de graça!"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Ave, Maria, o Senhor é teu Pai"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Maria, eis aí teu filho"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Mulher, minha hora ainda não chegou"></Button>
            

            
            <View style ={{flex:1, marginTop:50, marginVertical:-150}}></View>
            <Image style = {{ resizeMode: "cover",
                   height:'13%',
                   width: '100%',  
                   marginTop:150,
                   marginLeft:20, marginVertical:-50}} resizeMode = "cover" source = {require('./24.png')} />
        

        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>


        <View style ={{flex:1, marginTop:250, marginVertical:-140}}></View>
       
            <Image style = {{ resizeMode: "cover",
                   height:'13%',
                   width: '100%',  
                   marginTop:-70,
                   marginLeft:20, marginVertical:-50}} resizeMode = "cover" source = {require('./25.png')} />
        


        
        <Button onPress={questaoErrada.bind(this)} title="Ouro,mirra e prata"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Diamantes, esmeraldas e caviar"></Button>
        <Button onPress={questaoErrada.bind(this)} title="incenso, joias e temperos"></Button>
        <Button onPress={() => questaoCerta()} title="Mirra, ouro e inceso"></Button>

        <View style ={{flex:1, marginTop:250, marginVertical:-140}}></View>
       
            <Image style = {{ resizeMode: "cover",
                   height:'13%',
                   width: '100%',  
                   marginTop:-70,
                   marginLeft:20, marginVertical:-50}} resizeMode = "cover" source = {require('./27.png')} />
        

        

        <Button onPress={questaoErrada.bind(this)} title="Maria e Joaquim"></Button>
        
        <Button
        onPress={() => questaoCerta()} title="Ana e Joaquim"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Ana e José"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Rebeca Isaac"></Button>

        
        <View style ={{flex:1, marginTop:250, marginVertical:30}}></View>
        <View style ={{flex:1, marginTop:200, marginVertical:-200}}></View>
            <Image style = {{ resizeMode: "cover",
                   height:'13%',
                   width: '100%',  
                   marginTop:50,
                   marginLeft:20, marginVertical:-90}} resizeMode = "cover" source = {require('./mae.png')} />
        

        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>

        

        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>

        
        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>

  
        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>
        
        
        <Button
        onPress={() => questaoCerta()} title="juazeiro"></Button>
        <Button onPress={questaoErrada.bind(this)} title="paraiba"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Natal"></Button>
        <Button onPress={questaoErrada.bind(this)} title="Nazaré"></Button>

                
        


        
        
        
            <View style= {{position: 'absolute', marginLeft:150, borderRadius:30,paddingBottom:25, marginEnd:10, marginTop:-900}}>
               
            
            
            </View>
            </View>
            </View>
            </View>
            </View>
       
        </ScrollView>
    );

}