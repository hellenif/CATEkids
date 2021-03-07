import React from 'react';
import {View, Text, Image,Button} from 'react-native';





export default function Catequese ({navigation}) {
    return(
        <View  >
        
      
            
            <Button 
                   
                    
                    title = "Consagração a Nossa Senhora"
                    onPress = {() => navigation.navigate('Consagracao')}/>


           

           
            
        </View>
        
    );

}