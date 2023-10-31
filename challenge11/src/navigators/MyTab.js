import React from 'react';
import { View,Text,StyleSheet, } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import {Homey, MyDrawer} from '../screens';
import {Recent} from '../screens';
import {Exams} from '../screens';
import {Profiles} from '../screens';
import {Contact} from '../screens';

const BottamTab = createBottomTabNavigator();

const MyTab = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
    
    <BottamTab.Navigator 
      screenOptions={{
        tabBarItemStyle: {width: 100},
        tabBarStyle: {borderTopLeftRadius : 10,borderTopRightRadius: 10, position: 'absolute', marginLeft: 15, marginRight:15}
        //  tabBarShowLabel : false
      }}>
      <BottamTab.Screen
         name="Home" component={Homey}
        options={{
          // tabBarShowLabel : ({focused}) =>
          //    focused ?  false :   true ,
          tabBarActiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {fontSize:10,marginRight: 10},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="home" size={27} color="green" />
            ) : (
              <Icon name="home" size={24} />
            ),
            
            
        }}
      />

      <BottamTab.Screen
        name="Recent"
        component={Recent}
        options={{
          tabBarActiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {fontSize:10,marginRight: 10},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="play-arrow" size={33} color="green" />
            ) : (
              <Icon name="play-arrow" size={30} />
            ),}}
      />

      <BottamTab.Screen
        name="Exams"
        component={Exams}
        options={{
          tabBarActiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {fontSize:10,marginRight: 10},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="menu-book" size={27} color="green" />
            ) : (
              <Icon name="menu-book" size={24} />
            ),}}
      />

      <BottamTab.Screen
        name="Profiles"
        component={Profiles}
        options={{
          tabBarActiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {fontSize:10,marginRight: 10},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="account-circle" size={27} color="green" />
            ) : (
              <Icon name="account-circle" size={24} />
            ),}}
      />

      <BottamTab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarActiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {fontSize:10,marginRight: 0},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="email" size={27} color="green" />
            ) : (
              <Icon name="email" size={24} />
            ),}}
      />
    </BottamTab.Navigator>
    </View>
  );
  
};

export default MyTab;

const styles = StyleSheet.create({
  container: {
      flex: 1,
    },

  })   

// ({focused}) =>
//             focused ? (
//         tabBarItemStyle: {width: 100},
//         tabBarShowLabel : false),
//         : ( tabBarItemStyle: {width: 100},
//         tabBarShowLabel : false )
