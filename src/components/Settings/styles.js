import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:50,
        backgroundColor: '#e4e8f5',
        flex:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    description:{
        fontSize: 17,
        color: '#777777',
        marginBottom:10
    },
    options:{
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: '#e4e8f5',
        },
        label:{
            marginLeft:10,
            fontSize:17
        },
    },
    
});