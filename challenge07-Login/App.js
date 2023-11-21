import React,{Component} from "react"
import { View,
StyleSheet,Button, 
ImageBackground,Image,Text,TextInput,TouchableHighlight} from "react-native"
 export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
       <ImageBackground source={require('./assests/image.jpg')} style={styles.background_image}>
        <Image source={require('./assests/logo.png')} style={styles.logo}>

        </Image>
        <Text style={styles.textview}>Hello Its Manukrishnan here,Please Login</Text>
        <TextInput style={styles.inputview} 
        placeholder='Username' placeholderTextColor="green">
          
        </TextInput>
        <TextInput style={styles.inputview} placeholder="password" placeholderTextColor="green" secureTextEntry={true} maxLength={10}>

          </TextInput>
          <TouchableHighlight
activeOpacity={0.6}
underlayColor="#DDDDDD"
onPress={() => alert('Pressed!')}>
            <Text>Login</Text>
          </TouchableHighlight>
          <Button
title="Submit"
onPress={() => Alert.alert('Simple Button pressed')}>
</Button>
        </ImageBackground> 
      </View>
    )
  }
 }
 const styles=StyleSheet.create(
  {
    container:{
      height:'100%',
      width:'100%',

      backgroundColor:'#ffffff'
     },
     background_image:{
      height:'100%',
      width:'100%',
      alignItems:'center',
      justifyContent:"center"
     }
     ,logo:{
      height:100,
      width:100
     },
     textview:{
      fontSize:20,
      fontWeight:'bold',
      marginTop:20

     }
     ,inputview:{
      height:"8%",
      width:"80%",
      backgroundColor:"#ffffff",
      borderWidth:2,
      borderColor:"blue",
      marginTop:50,
      color:"red",
      padding:20
     }
     ,button:{
      height:'60%'
      ,width:'55',

      backgroundColor:'green'
      ,borderRadius:8,
      marginTop:8
      
     }
  }
 )
