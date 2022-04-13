import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import styles from './style'; //importando o style

export default function Form_valores () {

  const [Valor1, setValor1] = useState('');
  const [Valor2, setValor2] = useState('');
  const [Valor3, setValor3] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x ;

  function gerarResultado() {
      setTotal(Number(Valor1) + Number(Valor2) + Number(Valor3));
      Keyboard.dismiss();
  }

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 value={Valor1}
                 placeholder='Digite o primeiro valor.'
                 keyboardType='numeric'//determinado o tipo de teclado
                 onChangeText={(int) => setValor1(int)}
                 maxLength={4}
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   value={Valor2}
                   placeholder='Digite o segundo valor.'
                   keyboardType='numeric'//determinado o tipo de teclado
                   onChangeText={(int) => setValor2(int)}
                   maxLength={4}
                 />


                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}   
                   value={Valor3}
                   placeholder='Digite o terceiro valor.'
                   keyboardType='numeric'//determinado o tipo de teclado
                   onChangeText={(int) => setValor3(int)}
                   maxLength={4}
                 />

           <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.10}
            onPress={gerarResultado}>
            <Text style={styles.textbuttonCalculator}>Calcular Valores</Text>
           </TouchableOpacity>
 
            </View>

            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 

          <View>
			      <Text style={styles.numberResult}>
				     	Soma dos Valores = 
				    	{' '}
				    	{total.toFixed(1)}
			     	</Text>
		    	</View>

			{por < 10 && por > 0 && (
				<Text style={styles.information}>Este numero está entre o intervalo de  0 a 10</Text>
			)}

			{por >= 11 && por < 20 && (
				<Text style={styles.information}>Este numero está entre o intervalo de 11 a 20</Text>
			)}

			{por >= 21 &&  (
				<Text style={styles.information}>Este numero está entre o intervalo de 21 a infinito</Text>
			)}

      </View>

    );
  }