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
},
botaoNasc:{
    marginTop: 50,
   marginHorizontal:-10,
    marginRight:80,
      borderRadius:8,
       borderWidth:5,
      borderColor:"white",
      paddingVertical:15,
     paddingHorizontal:10,
     backgroundColor:'#5ca5e6',
     marginLeft: 100,

    flexDirection: "column"
   

},
botaoVida:{
    marginTop: 20,
   marginHorizontal:-10,
   marginVertical:30,
   marginRight:80,
   borderRadius:8,
   borderWidth:5,
   borderColor:"white",
   paddingVertical:15,
   paddingHorizontal:10,
   backgroundColor:'#4682B4',
   marginLeft: 100,

    flexDirection: "column"
   

},
textCate:{
    fontSize:20,
     fontWeight:"bold",
     justifyContent:"center" ,
     alignItems: "center",
     color: "blue"


},
botaoMorte:{
    marginTop: -15,
   marginHorizontal:-10,
   marginVertical:30,
   marginRight:80,
   borderRadius:8,
   borderWidth:5,
   borderColor:"white",
   paddingVertical:15,
   paddingHorizontal:10,
   backgroundColor:'#836FFF',
   marginLeft: 100,

    flexDirection: "column"
   

},
botaoSacramento:{
    marginTop: -15,
    marginHorizontal:-10,
    marginVertical:30,
    marginRight:80,
    borderRadius:8,
    borderWidth:5,
    borderColor:"white",
    paddingVertical:15,
    paddingHorizontal:10,
    backgroundColor:'#4169E1',
    marginLeft: 100,
 
     flexDirection: "column"
    


}
  


      
   

    

  });
  export {css};