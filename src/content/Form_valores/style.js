import { StyleSheet } from 'react-native'


// css style 

const styles = StyleSheet.create( {

   formContext:{

      width: "100%",
      bottom: 0,
      alignItems: "center",//centralizando
      borderTopLeftRadius: 30,//bordas arredondadas
      borderTopRightRadius: 30,//bordas arredondadas 
      marginTop: 30,
    
   },

   form:{

      width: "100%",
      height: "auto",
      marginTop: "30",
      padding: 10,

   },

   formLabel:{ //label de altura e peso

      color: "#000000",
      fontSize: 18,
      paddingLeft: 20,

   },

   input:{ 

      width: "90%",
      borderRadius: 50,
      backgroundColor: "#f6f6f6",
      height: 40,
      margin: 12,
      paddingLeft: 10,

   },

   buttonCalculator:{

      borderRadius: 50, 
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      backgroundColor: "#FF7F00",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 12,
      marginTop: 30, 
      
   },

   textbuttonCalculator:{ //nome dentro do botão

      fontSize: 20,
      color: "#ffffff",

   },



  numberResult:{ //resultado / cor e tamanho
      
      fontSize: 30,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",

  },

  information:{ //informação do que e para fazer

      fontSize: 20,
      color: "black",
      fontWeight: "bold",

  },

  });

  export default styles