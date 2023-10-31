import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

export default class Bank extends Component{
    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>QN Bank</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0000ff',
    },
    text : {
        color:'black',
        fontSize:20,
    }
})