import React,{Component} from "react"
import { View,StyleSheet,Button,Alert,ImageBackground,Image,Text,TextInput,TouchableHighlight} from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from "./src/Home";
import Profile from "./src/Profile";
import Video from "./src/Tab/Video";

import DrawerContent from "./src/Drawer/DrawerContent";
import Resource from "./src/Tab/Resource";
import Chapter from "./src/Tab/Chapter";
import Bank from "./src/Tab/Bank";


const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown:false}} />
      <Stack.Screen name="Tab" component={MyTab} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

function MyTab(){
  return(
   
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle : {fontSize : 12},
      tabBarItemStyle : {width : 100,},
      tabBarStyle : {backgroundColor :'#fff'},
      
    }}>
      <Tab.Screen 
        name="Video"
        component={Video}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'#abb9be',
          
        }}
         />
      <Tab.Screen 
        name="Chapter"
        component={Chapter}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'#abb9be'
        }} />
        <Tab.Screen 
        name="Resoures"
        component={Resource}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'#abb9be'
        }} />
        <Tab.Screen 
        name="QN Bank"
        component={Bank}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'#abb9be'
        }} />
    </Tab.Navigator>
    
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props)=> <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}



export default function App(){
  return (
    <NavigationContainer>
      <View style={style.inputContainer}>
        <View style={style.container}>
          <Icon name='search' style={style.searchIcon} size={25} />
          <TextInput name="search" placeholder="Search for a service" style={style.searchInput} />
        </View>
        
      </View>
      <MyStack />
    </NavigationContainer>
  );
}



const style = StyleSheet.create({
  inputContainer : {
    
    alignItems:'center',
    justifyContent:'center',
    marginVertical: 10,
    
   
  },
  container : {
    width:'90%',
    flexDirection:'row',
    elevation:3,
    borderRadius:5,
  },
  searchInput : {
    width:'80%',
    height:38,
    backgroundColor:'#fff',
    paddingLeft:12,
    borderRadius:5,
    marginTop:5,
    marginBottom:5,
   
    
  },
  searchIcon : {
    color : 'gray',
    marginLeft : 18,
    marginTop:11,
  },
  
})







