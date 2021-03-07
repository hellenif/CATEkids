import React from 'react';
import {View, Text, Image,Button, ScrollView} from 'react-native';
import * as Animatable from "react-native-animatable";

export default function Alma () {
    return(
        <ScrollView>
        <View  >
        <Image style = {{ width:400,height:300, marginTop:-25, marginLeft:10}}
            resizeMode = "contain" 
            source = {require('./15.png')}/>
        </View>

        <Animatable.View style = {{padding:15,borderRadius:30, backgroundColor:'#babcf7', margin:5,marginTop:-70, flexDirection:'row',
        justifyContent: 'flex-start', marginRight:50, marginVertical:15}}
        animation = "fadeIn"
        useNativeDriver
        duration = {1000}>
        <Text style = {{fontSize:16 }}>
            Você sabia que a Alma de Cristo é rezada depois da Sagrada Comunhão?
        </Text>
         </Animatable.View>

         <Animatable.View style = {{padding:15, backgroundColor:'#73f979', borderRadius:30, marginLeft:130, flexDirection:'row',
       justifyContent: 'flex-end' }}
       animation = "fadeIn"
       useNativeDriver
       duration = {6000}>

     <Text style = {{fontSize:16 }}> Ela lembra a Paixão de Cristo.</Text> 
        </Animatable.View>
        <Animatable.View style = {{padding:15,borderRadius:30, backgroundColor:'#babcf7', margin:5,marginTop:20, flexDirection:'row',
        justifyContent: 'flex-start', marginRight:50, marginVertical:50}}
        animation = "fadeIn"
        useNativeDriver
        duration = {20000}>
        <Text style = {{fontSize:16 }}
        >Então, depois da Comunhão, é bom ficar atento:
             </Text> 
             </Animatable.View>
             <Animatable.View style = {{padding:15, backgroundColor:'#73f979', borderRadius:30, marginLeft:90, flexDirection:'row',
       justifyContent: 'flex-end', marginTop:-35 }}
       animation = "fadeIn"
       useNativeDriver
       duration = {30000}>

     <Text style = {{fontSize:16 }}> NÃO esqueça de REZAR a Alma de Cristo.</Text> 
        </Animatable.View>

        </ScrollView>
    )
}