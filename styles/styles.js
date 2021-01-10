import {StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    imageMain:{
        flex:1,
        width:'100%',
        height:900,
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    imageSecond:{
        flex:1,
        width:'100%',
        height:900,
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'center'
    },
    entertaimentImage:{
        width:120,
        height:120,
        backgroundColor:'white',
    },
    entertaimentButton:{
        paddingTop:500
    },
    entertaimentText:{
        fontSize:28,
        backgroundColor:'orange',
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        fontWeight:'900',
        fontStyle:"italic"
    },
    loadingText:{
        fontSize:32,
        fontStyle:"italic"
    },
    entertaimentView:{
        marginBottom:400,
    },
    loadingView:{
        justifyContent:'center',
        alignItems:'center'
    },
    animationView:{
        flexDirection:'row',
    }
});
