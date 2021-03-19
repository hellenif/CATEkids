
import React, {useState} from 'react';
import { render } from 'react-dom';
import { Touchable } from 'react-native';
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Audio} from 'expo-av';


const slides =[
    {
        key: '1',
        title: 'Vamos lá?',
        text: "Lembre-se: reze em um lugar silencioso.",
        image: require('./pai.png'),
       
       

    },
    {
        key: '2',
        image: require('./1.png')
        
    },
    {
        key: '3',
        image: require('./3.png')
        
    },
    {
        key: '4',
        image: require('./4.png')
        
    },
    {
        key: '5',
        image: require('./5.png')
        
    },
    {
        key: '6',
        image: require('./6.png')
        
    },
    {
        key: '7',
        image: require('./7.png')
        
    },
    {
        key: '8',
        image: require('./8.png')
        
    },
    {
        key: '9',
        image: require('./9.png')
        
    }
]

export default function OracoesPai ({navigation}) {
    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('./10.mp4')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
  

  
    const [showHome,setShowHome] = useState (false);
    function renderSlides({item}){
        return( 
            <View style ={{flex:1}}>
                <Image source ={item.image}
                style= {{resizeMode: 'cover', 
                height:'54%',
                marginLeft: 10,
                width:'100%', marginTop: 50, marginRight:50
                }} /> 
               <Text style={{paddingTop:25, 
                paddingBottom: 10,
                fontSize: 23,
                fontWeight: 'bold',
                color:"#b786ea",
                alignSelf: 'center',
                fontSize: 40}}> {item.title}</Text>
                <Text style={{
                    textAlign:'center',paddingHorizontal:25, fontSize:25, color:'#5678e1'
                }}> {item.text}</Text>
                {
                    item.key== 2 && (
                        <TouchableOpacity onPress={playSound} 
                        style = {{marginTop:-30, width:200,borderColor:"white",paddingVertical:10, borderRadius:8, borderWidth:5,marginLeft:120, backgroundColor: "#87cefa"}}>
                            <Text style= {{fontSize:25, marginLeft: 45, color:"white"}}> {"Escute"} </Text>
                        </TouchableOpacity>
                    )
                        
                    
                }
               
               

            </View>
        )

    }



    if(showHome){
        return <Text> Entrou na Home</Text>
    }else{
        return (
           <AppIntroSlider
            renderItem={renderSlides}
            data= {slides}
            activeDotStyle = {{backgroundColor: '#009CFF', width: 30}}
            renderNextButton={ () => <Text> PRÓXIMO</Text>}
            renderDoneButton= {() => <Text> ACESSAR</Text>}
            onDone= { () => navigation.navigate('JogoPai')}
            />

           
          );

    }


}