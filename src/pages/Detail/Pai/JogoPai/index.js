import * as React  from 'react';
import {View, Text, Image,Button, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';


 

 
 export default function JogoPai ({navigation}){
    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('./22.mp4')
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
            title = "OUVIR"
            onPress={playSound} />
            <Button
            title = "PRÓXIMO"
            onPress = {() => navigation.navigate('PaiJogo')}
            
            />
        </View>
    )
    }