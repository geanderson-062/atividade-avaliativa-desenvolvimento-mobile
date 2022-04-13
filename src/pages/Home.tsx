
import React from 'react'
import {View} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
//importando os componentes 
import Title_home from '../components/Title_home'

export function Home() {
  
    return (

        <LinearGradient 
        style={{
        height: '100%', 
        width: '100%', 
        marginTop: 15, 
        borderRadius: 5}}
     
        colors={['#fff','#FF7F00']}>
    
        <View style={{ flex: 1}}>

         <Title_home/>

        </View>

        </LinearGradient>

       
    )
    
    
  }