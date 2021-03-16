import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { css } from '../../../../assets/css/Css';


export default function  Cate({navigation}) {
   
    return(
        <View style ={{flex:1, alignItems: 'center', justifyContent:"center"}} >
         <Image
             style = {{marginTop:-35, width:599,height:200,marginVertical:40 }}
            source = {require('./25.png')} />
            
            <View style={{ justifyContent:"center" , alignItems: "center"}} >
                
            < Text style= {css.textCate}> Aprender sobre Jesus sempre é bom! </Text>
            < Text style= {css.textCate}> Que tal escolher um tema? </Text>
            <View>
            <TouchableOpacity style = {css.botaoNasc} 
            onPress = {() => navigation.navigate('Nascimento')}
            >
                <Text style={{fontSize:15, color:"white", textAlign:"center", justifyContent:"center"}}> Nascimento de Jesus</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {css.botaoVida}>

             <Text style={{fontSize:15,color:"white", textAlign:"center", justifyContent:"center"}}> Vida de Jesus</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {css.botaoMorte}>

             <Text style={{fontSize:15,color:"white", textAlign:"center", justifyContent:"center"}}> Morte e Ressurreição de Jesus</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {css.botaoSacramento}>

        <Text style={{fontSize:15,color:"white", textAlign:"center", justifyContent:"center"}}> Sacramentos e Mandamentos da Igreja </Text>
        </TouchableOpacity>


            </View>
            </View>

             </View>
            
    );

}
