
import React from 'react'
import {View} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
//importando componentes
import Title_media from '../components/Title_media'

//importando o conteudo
import Form_media from '../content/Form_media'

export function Media() {
  
    return (

        <LinearGradient 
        style={{
        height: '100%', 
        width: '100%', 
        marginTop: 15, 
        borderRadius: 5}}
     
        colors={['#fff','#FF7F00']}>

        <View style={{ flex: 1}}>

            <Title_media/>

            <Form_media/>

        </View>

        </LinearGradient>
    )
    
    
  }