import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Title_Media() {
    
    //aqui fica o titulo dos forms

    return (

      <View style={styles.boxTitle}>

             <br />
             <br />
             <br />
             <br />
             <br />
             <br />

        <Text style={styles.textTitle}>Atividade de Desenvolvimento Mobile</Text>

        <Icon name="mobile" size={260} color="#000" />

        <Text style={styles.textExplica}>Atividade solicitada pelo professor Rafael Soares no dia 05/04/2022 <br></br>
       que vale a nota da prova, Linguagem utilizada JavaScript com framework React-native e TypeScript.
        </Text>

      </View>

    );
  }