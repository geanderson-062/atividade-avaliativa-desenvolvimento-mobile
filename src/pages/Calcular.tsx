
import React from 'react'
import {View} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
//importando componentes
import Title_Valores from '../components/Title_valores'

//importando o conteudo
import Form_valores from '../content/Form_valores'

export function Calcular() {
  
    return (

        <LinearGradient 
        style={{
        height: '100%', 
        width: '100%', 
        marginTop: 15, 
        borderRadius: 5}}
     
        colors={['#fff','#FF7F00']}>

        <View style={{ flex: 1}}>

             <br />
             <br />
             <br />

            <Title_Valores />

            <Form_valores/>
           
        </View>

        </LinearGradient>
    )
    
    
  }
