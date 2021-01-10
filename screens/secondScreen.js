import React, { Component } from 'react';
import { Animated} from 'react-native';
import { View } from "react-native";

const loadingArr = [];
for(let i = 0; i < 4 ; i++ ){
    loadingArr.push(i)
}

export  class SecondScreen extends Component {
    constructor(){
        super()
        this.loadingValue = [];
        loadingArr.forEach((value)=>{
            this.loadingValue[value]=new Animated.Value(0);
        })
    }
    componentDidMount(){
        this.animate();
    }
    animate(){
       const animations = loadingArr.map((value)=>{
           return (Animated.timing(
               this.loadingValue[value],{
                   toValue:1,
                   duration:4000,
                   useNativeDriver:true
               }
           ))
       })
       Animated.stagger(10,animations).start()
    }
    render() {
        const animations = loadingArr.map((a,i)=>{
            return <Animated.View key={i} style={{opacity:this.loadingValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}}/>
        })
        return (
        <View>
            {animations}
          </View>
        )
    }
}

