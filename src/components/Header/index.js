import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, BackgroundPropType, TouchableOpacity,} from 'react-native';
import styles from './style';
import  {LinearGradient}  from 'expo-linear-gradient';

export default function App() {
  return (

    <LinearGradient
    colors={['#fc4a1a','#f7b733']} style={styles.LinearGradient}
    start={{x:0.0, y:0.0}}
    end={{x:1.0, y:0.0}}
    >

    <View style={styles.header}>
      
      <SafeAreaView>
       <Text style={styles.text}>Rafa</Text>
      </SafeAreaView> 

    </View>

    </LinearGradient>

  );
}

