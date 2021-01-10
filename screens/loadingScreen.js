import React from 'react'
import { ImageBackground,Image,Text, Animated, TouchableOpacity} from 'react-native'
import { styles } from "../styles";
import { SecondScreen } from "./secondScreen";
export function Screen(props){
    if(props.isFirstScreen){
        return(
        <ImageBackground source={require('../image/back.jpg')} style={styles.imageMain}>
            <Animated.View style={{opacity:props.opacity}}>
                <Image  source={require('../image/critical.png')} style={styles.entertaimentImage}/>
            </Animated.View>
            <Animated.View style={{opacity:props.opacity2}}>
                <TouchableOpacity onPress={()=>props.secondScreen()} style={styles.entertaimentButton}><Text style={styles.entertaimentText}>Start</Text></TouchableOpacity>
            </Animated.View>
        </ImageBackground>
        )
    }
    else{
        return( <ImageBackground source={require('../image/back.jpg')} style={styles.imageSecond}>
                    <SecondScreen/>
                </ImageBackground>)
    }
}