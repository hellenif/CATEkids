import React from 'react';
import {View, Text, Image,Button, ScrollView} from 'react-native';
import * as Animatable from "react-native-animatable";


export default function Pai ({navigation}) {
    return(
        <ScrollView>
        <View>
            <Image style = {{ width:400,height:300, marginTop:-25}}
            resizeMode = "contain" 
            source = {require('./14.png')}/>
        </View>
        
     <Animatable.View style = {{padding:15,borderRadius:30, backgroundColor:'#babcf7', margin:5,marginTop:-70, flexDirection:'row',
        justifyContent: 'flex-start', marginRight:50, marginVertical:15}}
        animation = "fadeIn"
        useNativeDriver
        duration = {1000}>
        <Text style = {{fontSize:16 }}
        >
             Você sabia que o Pai Nosso é a oração que Jesus nos ensinou?
             </Text> 
        
        </Animatable.View>

       <Animatable.View style = {{padding:15, backgroundColor:'#73f979', borderRadius:30, marginLeft:80, flexDirection:'row',
       justifyContent: 'flex-end' }}
       animation = "fadeIn"
       useNativeDriver
       duration = {6000}>

     <Text style = {{fontSize:16 }}> Ela se encontra no evangelho de São Mateus.</Text> 
        </Animatable.View>


        <Animatable.View style = {{padding:15,borderRadius:30, backgroundColor:'#babcf7', margin:10,marginTop:20, flexDirection:'row',
        justifyContent: 'flex-start', marginRight:50, marginVertical:50}}
        animation = "fadeIn"
        useNativeDriver
        duration = {20000}>
        <Text style = {{fontSize:16 }}
        >
             Jesus disse: "Quando rezar, diga: Pai Nosso".
             </Text> 
        
        </Animatable.View>
        <Animatable.View style = {{padding:15, backgroundColor:'#73f979', borderRadius:30, marginLeft:60, flexDirection:'row',
       justifyContent: 'flex-end', marginTop:-35 }}
       animation = "fadeIn"
       useNativeDriver
       duration = {30000}>

     <Text style = {{fontSize:16 }}> Por isso que ela é a oração universal.</Text> 
        </Animatable.View>

        <Animatable.View style = {{padding:15,borderRadius:30, backgroundColor:'#babcf7', margin:5,marginTop:10, flexDirection:'row',
        justifyContent: 'flex-start', marginRight:60, marginVertical:30}}
        animation = "fadeIn"
        useNativeDriver
        duration = {50000}>
        <Text style = {{fontSize:16 }}
        >
            Isso! E não esqueça: sempre reze antes de dormir.
             </Text> 
        
        </Animatable.View>
        <View style= {{marginLeft:150, borderRadius:30,paddingBottom:25, marginEnd:50, marginTop:25}}>
        <Button
            title = "Próximo"
            onPress = {() => navigation.navigate('OracoesPai')}
            
            />
        </View>
        

       

    </ScrollView>
  
   
      
       
       

            
       
    )
}