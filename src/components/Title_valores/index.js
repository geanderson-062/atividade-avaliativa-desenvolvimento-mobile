import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function Title_Valores() {
    
    //aqui fica o titulo dos forms

    return (
      
      <View style={styles.boxTitle}>

        <Icon name="calculator" size={60} color="#000" />

        <Text style={styles.textTitle}>Calcular Valores</Text>

      </View>

    );
  }