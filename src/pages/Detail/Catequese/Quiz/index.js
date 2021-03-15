import React, {useState} from 'react';
import {View, Text, Image,Button, TouchableOpacity } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import { css } from '../../../../../assets/css/Css';
import * as Animatable  from "react-native-animatable";






export default function Quiz ({navigation}) {
    const [tela, setTela] = useState('menu');
    const [jogadorAtual, setJogadorAtual] = useState('');
    const [tabuleiro, setTabuleiro] = useState([]);
    const [jogadasRestantes, setJogadasRestantes] = useState([0]);
    const [ganhador, setGanhador] = useState(''); 

    function iniciarJogo (jogador){
        setJogadorAtual(jogador);
        
        setJogadasRestantes(9);
        setTabuleiro ([
                        ['','',''],
                        ['','',''],
                        ['','',''],
                        ]);
        setTela('jogo');
    }
    function jogar ( linha, coluna){
        tabuleiro[linha] [coluna] =jogadorAtual;
        setTabuleiro([...tabuleiro]);
        
        setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');

        verificarGanhador( tabuleiro, linha, coluna);
    } 
    function verificarGanhador(tabuleiro, linha, coluna){
        //linhas
        if (tabuleiro [linha] [0] !== ''&& tabuleiro [linha] [0]  === tabuleiro [linha] [1] && tabuleiro [linha] [1] === tabuleiro [linha] [2]){
            return finalizarJogo (tabuleiro[linha] [0]); 
        }
        //COLUNAS
        if (tabuleiro[0] [coluna] !== '' && tabuleiro[0] [coluna] === tabuleiro [1] [coluna] && tabuleiro [1] [coluna] === tabuleiro [2] [coluna]){
            return finalizarJogo (tabuleiro[0] [coluna]); 
        }
        //DIAGONAL1
        if (tabuleiro[0] [0] !== '' && tabuleiro[0] [0] === tabuleiro [1] [1] && tabuleiro [1] [1] === tabuleiro [2] [2]){
            return finalizarJogo (tabuleiro[0] [0]); 
        }//DIAGONAL2
        if (tabuleiro[0] [2] !== '' && tabuleiro[0] [2] === tabuleiro [1] [1] && tabuleiro [1] [1] === tabuleiro [2] [0]){
            return finalizarJogo (tabuleiro[0] [2]); 
        }// NENHUM GANHADOR
        if ((jogadasRestantes -1) === 0 ){
            return finalizarJogo('');
        }
        //Jogo não finalizado

        setJogadasRestantes((jogadasRestantes - 1))

    }
    function finalizarJogo(jogador){
        setGanhador(jogador);
        setTela('ganhador');

    }
    
     
    switch(tela){
        case'menu':
            return getTelaMenu();
        case 'jogo' :
            return getTelaJogo ();
        case   'ganhador':
            return getTelaGanhador ();
    }
    function getTelaMenu (){
        return(
            <View style = {{flex:1, justifyContent:"center", alignItems: "center"}} >
            <Text style = {{fontSize: 30, fontWeight:"bold"}}>Jogo da Velha</Text>
            <Text style = {{fontSize: 20, color:'#555',margin:5, marginTop: 20}}>Selecione o primeiro jogador</Text>

            <View style={{ flexDirection: 'row'}}> 
            <TouchableOpacity 
            style={css.boxJogador}
            onPress= {() => iniciarJogo ('X')}>
              <Image
             style = {{marginTop: 40, width:100,height:80,marginVertical:40 }}
            source = {require('./terezinha.png')} />
            </TouchableOpacity>

            <TouchableOpacity 
            style={css.boxJogador}
                onPress= {() => iniciarJogo ('O')}>  
                 <Image
             style = {{marginTop: 40, width:100,height:90,marginVertical:40 }}
            source = {require('./francisco.png')} />
                
            </TouchableOpacity>
            </View>
            </View>
        );

    }
    function getTelaJogo (){
        return(
            <View style = {{flex:1, justifyContent:"center", alignItems: "center"}} >
            <Text style = {{fontSize: 30, fontWeight:"bold"}}>Jogo da Velha</Text>

            {
                tabuleiro.map((linha, numeroLinha) => {
                    return(
                        <View key= {numeroLinha} style={{ flexDirection: 'row'}}> 
                        {
                             linha.map((coluna, numeroColuna) =>{
                                 return(
                                    <TouchableOpacity 
                                    key= {numeroColuna}
                                    style={css.boxJogador} 
                                    onPress={() => jogar( numeroLinha, numeroColuna)}
                                    disabled= {coluna !== ''}
                                    >
                                        <Text style = {coluna === 'X' ? css.jogadorX : css.jogadorY} > {coluna} </Text>
                                    </TouchableOpacity>

                                 )
                             }
                             )
                        }



                        </View>
                    )
                     })
            }

            <TouchableOpacity style = {css.botaoMenu} onPress = { () => setTela('menu')}>
                <Text style={css.textoBotaoMenu}> Voltar </Text>

            </TouchableOpacity>

            </View>

           
            
        );

    }
    function getTelaGanhador (){
        return(
            <View style = {{flex:1, justifyContent:"center", alignItems: "center"}} >
            <Text style = {{fontSize: 30, fontWeight:"bold"}}>Resultado Final</Text>
            

            {
                ganhador === '' && 
                <Animatable.Image style = {{ width:400,height:300, marginTop:15}}
                animation= "flipInY"
                duration = {1500}
                resizeMode = "contain" 
                source = {require('./23.png')}/>
               
            }
            {
                ganhador!== '' &&
                <View>
                <Text> Ganhador</Text>

                <View
                                   
                                    style={css.boxJogador} 
                                    
                                    disabled= {true}
                                    >
                                        <Text style = {ganhador === 'X' ? css.jogadorX : css.jogadorY} > {ganhador} </Text>
                                    </View>
                                    </View>
            }

            <TouchableOpacity style = {css.botaoMenu} onPress = { () => setTela('menu')}>
                <Text style={css.textoBotaoMenu}> Voltar </Text>

            </TouchableOpacity>
            </View>
            
            
        );

    }
    

}

