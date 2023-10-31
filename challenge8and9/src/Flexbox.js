import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native'


class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.contentStyle}>Hello my name is {this.props.name}</Text>
            </View>
        )
    }
}


export default class Flexbox extends Component{

    constructor(){
        super();
        this.state = {
            main_txt: 'Hiii',
            sub_txt:'react native'
        }
    }

    updateText(){
        console.log("Button presssed")
        this.setState({
            main_txt:'hello',
            sub_txt:'what is react native',
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textView}>{this.state.main_txt} </Text>
                <Text style={styles.textView}>{this.state.sub_txt}</Text>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText} onPress={()=> this.updateText()}>Update</Text>
                </TouchableHighlight>
                <FlexContent name="Sreehari"></FlexContent>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        
    },
    textView : {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonText : {
        fontSize:20,
        fontWeight:'bold',
        color:'yellow'

    },
    button : {
        backgroundColor:'green',
        height:50,
        width: '60%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:5,
        
    },
    contentStyle : {
        fontSize:20,
        marginTop:20,
        color:'violet'
    }
})