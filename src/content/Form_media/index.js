import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import styles from './style'; //importando o style

export default function Form_media () {

  const [Media1, setMedia1] = useState('');
  const [Media2, setMedia2] = useState('');
  const [Media3, setMedia3] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x / 3;

  function gerarResultado() {
      setTotal(Number(Media1) + Number(Media2) + Number(Media3));
      Keyboard.dismiss();
  }

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 value={Media1}
                 placeholder='Digite a primeira nota.'
                 keyboardType='numeric'//determinado o tipo de teclado
                 onChangeText={(int) => setMedia1(int)}
                 maxLength={4}
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   value={Media2}
                   placeholder='Digite a segunda nota.'
                   keyboardType='numeric'//determinado o tipo de teclado
                   onChangeText={(int) => setMedia2(int)}
                   maxLength={4}
                 />


                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}   
                   value={Media3}
                   placeholder='Digite a terceira nota.'
                   keyboardType='numeric'//determinado o tipo de teclado
                   onChangeText={(int) => setMedia3(int)}
                   maxLength={4}
                 />

           <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.7}
            onPress={gerarResultado}>
            <Text style={styles.textbuttonCalculator}>Calcular Média</Text>
           </TouchableOpacity>
 
            </View>

            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 

          <View>
			      	<Text style={styles.numberResult}>
				     	Total:
				    	{' '}
				    	{total.toFixed(1)}
			    	</Text>
			    	<Text style={styles.numberResult}>
			    		Média:
			    		{' '}
			    		{por.toFixed(1)}
		   	    </Text>
		    	</View>

			{por < 5 && por > 0 && (
				<Text style={styles.information}>Reprovado</Text>
			)}

			{por >= 5 && por < 7 && (
				<Text style={styles.information}>Recuperação</Text>
			)}

			{por >= 7 && (
				<Text style={styles.information}>Aprovado</Text>
			)}

      </View>

    );
  }