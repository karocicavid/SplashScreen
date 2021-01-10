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
        fontWeight:'900'
    },
    loadingText:{
        fontSize:32,
    },
    entertaimentView:{
        marginBottom:400,
    },
    loadingView:{
        alignItems:'center',
        paddingBottom:90
    },
    animationView:{
        flexDirection:'row',
    },
    animatedView:{
        height: 16, 
        width: 16, 
        backgroundColor: 'black',
        borderRadius:30, 
        marginLeft: 3, 
        marginTop: 3
    }
});
