import React, {useState} from 'react';
import {View, Text, Image,Button} from 'react-native';
import * as Speech from "expo-speech";


export default function JogoPai ({navigation}) {
    const [text, setText] = useState ('Pai   Nosso    que     estais       nos     Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal  . Amém ');
    function speak(){
        Speech.speak(text, {
            language: 'pt-BR'
           
        });

    }
    return(

        <View  >
           <Image style = {{ width:400,height:300, marginTop:-5, marginRight: 50}}
            resizeMode = "contain" 
            source = {require('./16.png')}/>

        <Image style = {{ width:400,height:300, marginTop:-120, marginHorizontal:-40}}
            resizeMode = "contain" 
            source = {require('./17.png')}/>

             <Image style = {{ width:400,height:300, marginTop:-150, marginHorizontal:-4}}
            resizeMode = "contain" 
            source = {require('./18.png')}/>

            <Button
            title = "FALAR"
            onPress={speak}/>
            <Button
            title = "PRÓXIMO"
            onPress = {() => navigation.navigate('PaiJogo')}
            
            />
        </View>
    )
}