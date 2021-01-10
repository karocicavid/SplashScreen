import React, { Component } from 'react'
import { Animated, Easing} from 'react-native'
import { Screen } from "./loadingScreen";

export  class MainScreen extends Component {
    constructor(){
        super()
        this.state={
            firstScreen:true
        }
        this.secondScreen=this.secondScreen.bind(this);
        this.animatedValue= new Animated.Value(0);
        this.animatedValue2= new Animated.Value(0);

    }
    componentDidMount(){
        this.animate();
    }
    secondScreen(){
        this.setState({
            firstScreen:false
        })
    }
    animate(){
        const createAnim = function(value,duration,easing,delay=0){
        return Animated.timing(
            value,{
                toValue:1,
                duration,
                easing,
                delay,
                useNativeDriver:true
            }
        )}
        Animated.sequence([
            createAnim(this.animatedValue,5000,Easing.ease),
            createAnim(this.animatedValue2,2000,Easing.ease),
        ]).start()
    }
    render() {
        const opacity = this.animatedValue.interpolate({
            inputRange:[0,1],
            outputRange:[0,1]
        })
        const opacity2 = this.animatedValue2.interpolate({
            inputRange:[0,1],
            outputRange:[0,1]
        })
        return (
        <Screen opacity={opacity} opacity2={opacity2} secondScreen={this.secondScreen} isFirstScreen={this.state.firstScreen}/>
        )
    }
}

