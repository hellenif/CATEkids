import React from 'react';
import {View, Text, Image,Button} from 'react-native';





export default function Sobre(navigation) {
    return(
        <View  >
           

        
             
            <Image
           style = {{width:350, height: 375, marginLeft:40, marginTop:20, marginVertical: 30}}
            source ={ require('./12.png')}
            /> 
            <Button 
                    title = "Pai Nosso" 
                    onPress = {() => navigation.navigate('Pai')}
                    color="#03afff"/>
                    <Button 
                    title = "Alma de Cristo"
                    color="#38e8ff"/>
                     <Button 
                    title = "Ave Maria"
                    color="#9596ff"/> 
                     <Button 
                    title = "Salve Rainha"
                    color="#b7a5ff"/>
                     <Button 
                    title = "Santo Anjo"
                    color="#facfff"/>
                    <Button 
                    title = "Ato de Contrição"
                    color="#e6cfff"/>
                     <Button 
                    title = "Invocação ao Espírrito Santo"
                    color="#ffe3b1"/>
                    <Button 
                    title = "Credo"
                    color="#ffe473"/>

           

           
            
        </View>
        
    );

}