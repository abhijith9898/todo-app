import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#262f4f',
      width: '100%',
      display: 'flex',
      alignItems: 'stretch',
      padding:'8%',
      
    },
    text: {
      color: '#fff',
    },
    input: {
      backgroundColor: '#e4e8f5',
      color: '#141a2e',
      width: '100%',
      padding: '2%',
      marginTop: '2%'
    },
    switchContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '10%',
      marginBottom: '5%',
      width: '90%',
      
    },
    switch: {
      color: '#8d9bc9',    
    },
    button: {
      width: '100%',
      backgroundColor: '#8d9bc9'
    },
    red: {
      color: 'red'
    }
});