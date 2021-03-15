import React from 'react';
import {View, Text, Image,Button} from 'react-native';





export default function Sobre ({navigation}) {
    return(
        <View  >
        
        <Image
           style = {{width:350, height: 375, marginLeft:40, marginTop:30, marginVertical: 30}}
            source ={ require('./12.png')}
            /> 
            
            <Button 
                    title = "Pai Nosso" 
                    onPress = {() => navigation.navigate('Pai')}
                    color="#03afff"/>
                    <Button 
                    title = "Alma de Cristo"
                    onPress = {() => navigation.navigate('Alma')}
                    color="#38e8ff"/>
                     <Button 
                    title = "Ave Maria"
                    onPress = {() => navigation.navigate('Ave')}
                    color="#9596ff"/> 
                     <Button 
                    title = "Ato de Contrição"
                    onPress = {() => navigation.navigate('Ato')}
                    color="#f079c0"/>
                    <Button 
                    title = "Credo"
                    onPress = {() => navigation.navigate('Credo')}
                    color="#f6c72a"/> 
                    
           

           
            
        </View>
        
    );

}