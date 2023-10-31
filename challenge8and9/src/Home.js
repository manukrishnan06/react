import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style={style.container}>
                
                <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('Drawer')}>
                    <Text style={style.btnText}>
                        Drawer page
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('Tab')}>
                    <Text style={style.btnText}>
                       Tab page
                    </Text>
                </TouchableHighlight>
               

            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    button : {
        height:50,
        width:'50%',
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        
        
    },
    btnText : {
        color:'#fff',
        fontSize:20,
    }
})