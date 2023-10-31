import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
} from 'react-native';



export default class DrawerContent extends Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.profileContainer}>
                    <View>
                        <Image source={require('../../assets/crown.png')} style={style.image}/>
                        <TouchableHighlight style={style.inviteButton}>
                            <Text>Invite</Text>
                        </TouchableHighlight>
                        
                    </View>
                    <View style={style.rightContainer}>
                        <View style={{marginTop: 20}}>
                            <Text style={{fontSize:18,color:'#fff'}}>Favas</Text>
                            <TouchableHighlight style={style.goldButton}>
                                <Text style={style.text}>Gold</Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={style.textContainer}>
                            <Text style={style.text}>Total Coin</Text>
                            <Text style={style.text}>coin : 20000</Text>
                        </View>
                       
                    </View>
                    
                    
                </View>
                <Text style={style.menu}>Home</Text>
                <Text style={style.menu}>Profile</Text>
                <Text style={style.menu}>Wallet Ballence</Text>
                <Text style={style.menu}>Records</Text>
                <Text style={style.menu}>Refund and policies</Text>
                <Text style={style.menu}>Settings</Text>
                <Text style={style.menu}>About US</Text>
                <Text style={style.menu}>Help</Text>
                <View style={style.logout}>
                    <Text style={style.logoutText}>Logout</Text>
                </View>
               
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff',
    },
    profileContainer : {
        height:'30%',
        width:'100%',
        backgroundColor:'#2a2728',
        flexDirection:'row',
        
        
    },
    menu : {
        fontSize: 14,
        marginTop:25,
        marginLeft:30,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    logout : {
        alignItems:'center', 
    },
    logoutText : {
        fontSize:14,
        marginTop:30,
        
    },
    image : {
        height:80,
        width:80,
        marginLeft:20,
        marginTop:20,
    },
    inviteButton  : {
        height:20,
        width:80,
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'yellow',
        marginLeft:20,
        marginTop:50,
    },
    goldButton : {
        height:20,
        width:50,
        backgroundColor:'#52595d',
        alignItems:'center',
        borderRadius:5
    },
    text : {
        color:'#fff',
        textAlign:'right'
    },
    textContainer : {
        marginTop:70,
    },
    rightContainer : {
        width:'50%',
        alignItems:'flex-end',
    }
    

})