import React, {useState} from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
        key: '1',
        title: 'Nascimento de Jesus ',
        text: "Aprenda sobre o nascimento de Jesus",
        image: require ('./Maria.png')
    },
    {
        key: '2',
        title: 'Nascimento de Jesus ',
        text: "Aprenda sobre o nascimento de Jesus",
        image: require ('./Gabriel.png')
      
    },
    {
        key: '3',
        title: 'Nascimento de Jesus ',
        text: "Aprenda sobre o nascimento de Jesus",
        image: require ('./26.png')
      
    },
    {
        key: '4',
        title: 'Nascimento de Jesus ',
        text: "Aprenda sobre o nascimento de Jesus",
        image: require ('./27.png')
      
    },
    {
        key: '5',
        title: 'Nascimento de Jesus ',
        text: "Aprenda sobre o nascimento de Jesus",
        image: require ('./28.png')
      
    },
    {
        key: '6',
        title: 'Nascimento de Jesus ',
        text: "Aprenda sobre o nascimento de Jesus",
        image: require ('./29.png')
      
    },
];

export default function Nascimento({navigation}) {
    const [showHome, setShowHome] = useState (false);

   function  renderSlides({item}){
       return(
           <View style={{flex:1}}>
               <Image
               source = {item.image}
               style = {{
                   resizeMode: "cover",
                   height:'41%',
                   width: '100%',
                   marginTop:100,
                   marginRight:-40
               }} />
               
               <Text style={{
                   paddingTop:25,
                   paddingBottom: 10,
                   fontSize: 23,
                   fontWeight: "bold",
                   textAlign: "center"
               }}>{item.title}</Text>

               <Text
               style ={{
                   textAlign: 'center',
                   paddingHorizontal: 25,
                   fontSize: 15
               }}>{item.text}</Text>

           </View>
       )

   }

    if (showHome){
        return <Text>  ENTROU NA HOME </Text>
    }
    else {
        return(
           <AppIntroSlider 
           renderItem = {renderSlides}
           data= {slides}
           activeDotStyle= {{
               backgroundColor:"#009CFF",
               width: 30
           }}
           renderNextButton= {() => <Text style= {{color:"black"}}> PRÓXIMO</Text>}
           renderPrevButton = {() => <Text style= {{color:"black"}}> VOLTAR </Text>}
           renderDoneButton = {() => <Text style= {{color:"black"}}> JOGAR </Text>}
           onDone = { () => navigation.navigate('Catequese')}
            />
            
     
                
                 
         );

    }
   
    

}
