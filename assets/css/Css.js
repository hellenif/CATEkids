import {Button, StyleSheet} from "react-native";


const css = StyleSheet.create ({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        
    },
   header:{
       marginBottom:8
   },
   textContainer:{
       flexDirection:'row',
      justifyContent: 'center',
   },
   text:{
       fontSize: 26,
      

   },
   button:{
     paddingVertical:10

   },
   jogadorX:{
       fontSize:40,
       color: "#553fda"
   },
   jogadorY:{
    fontSize:40,
    color: "#da3f3f"
},
boxJogador:{
    width:80,
    margin:10,
    height:80, 
    backgroundColor: "#ddd",
    alignItems: "center", 
    justifyContent:"center"
},
botaoMenu:{
    marginTop:20
},
textoBotaoMenu: {
    color: "#4e6fe4"
}
  


      
   

    

  });
  export {css};