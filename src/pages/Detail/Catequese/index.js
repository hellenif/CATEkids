import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import {View, Text, Button, Image, Alert, ScrollView} from 'react-native';
import { css } from '../../../../assets/css/Css';




export default function  Catequese({navigation, route}) {

    function questaoCerta(){
        navigation.push("Catequese",{acertos:acertos+1, erros:erros});
    }


    function questaoErrada(){
        navigation.push("Catequese",{acertos:acertos, erros:erros+1});
    }

    const { acertos, erros } = route.params;

    return(
        <View style ={{flex:1, alignItems: 'center', justifyContent:"center"}} >
           
           

            <Text>quantos são os mandamentos da igreja católica? </Text>
            <Button onPress={() => questaoCerta()} title="Alternativa 1"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Alternativa 2"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Alternativa 3"></Button>
            <Button onPress={questaoErrada.bind(this)} title="Alternativa 4"></Button>
            <Text>Acertos:{acertos}</Text>
            <Text>Erros:{erros}</Text>

        </View>
    );

}