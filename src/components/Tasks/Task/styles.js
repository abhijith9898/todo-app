import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {    
      backgroundColor: '#596796',
      width: '98%',
      display: 'flex',
      padding: '2%',
      margin: '3%',
    },
    title: {
      color: '#fff',
    },
    popTitle: {
      color: '#000',
      backgroundColor:'#ced6ed',
      padding:10,
      fontSize:15,
      textAlign:'center'
    },
    sub: {
        color: '#ced6ed'
    },
    modelPopUp: {
      height:'30%',
      width: '80%',
      backgroundColor:'#e4e8f5',
      borderRadius: 20,
      position:'absolute',
      left:'10%',
      top:'30%'
    },
    closeContainer:{
      display:'flex',
      alignItems:'flex-end',
      width:'95%',
      height:'30%',
      top:'12%',
    },
    closeIcon:{
      position:'absolute',
      backgroundColor:'red',
      color:'white',
      left:'22%',
      height:'100%',
      padding:8
    },
    switch: {
      marginTop:20,
      gap:10,
      color:'#fff',
      alignItems:'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    removeButton: {
      backgroundColor:'#596796',
      padding:10,
      marginLeft:6,
      borderRadius:8      
    },
    removeLabel:{
      color:'#ced6ed'
    }
});