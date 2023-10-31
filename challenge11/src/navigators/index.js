import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import MyTab from '../navigators/MyTab'

import { FirstPage} from '../screens';
import {VerifyPage} from '../screens';
import {StudemtDetails} from '../screens';
import {SchoolBoard} from '../screens';
import {AppDescription} from '../screens';
import {HomePage} from '../screens';

import {Homey} from '../screens';
import {Recent} from '../screens';
import {Exams} from '../screens';
import {Profiles} from '../screens';
import {Contact} from '../screens';

import {DrawerContent} from '../screens';
import { MyDrawer } from '../screens';

import {Biology} from '../screens';
import {BiologyCards} from '../screens';
import {BiologyClass} from '../screens';
import {BiologyCourseCards} from '../screens';
import {ClassVedio} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="VerifyPage" component={VerifyPage} />
      <Stack.Screen name="StudemtDetails" component={StudemtDetails} />
      <Stack.Screen name="SchoolBoard" component={SchoolBoard} />
      <Stack.Screen name="AppDescription" component={AppDescription} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="MyTab" component={MyTab} /> 
      <Stack.Screen name="Homey" component={Homey} /> 
      <Stack.Screen name="Recent" component={Recent} /> 
      <Stack.Screen name="Exams" component={Exams} /> 
      <Stack.Screen name="Profiles" component={Profiles} /> 
      <Stack.Screen name="Contact" component={Contact} /> 
      <Stack.Screen name="DrawerContent" component={DrawerContent} /> 
      <Stack.Screen name="MyDrawer" component={MyDrawer}  /> 
      <Stack.Screen name="BiologyCards" component={BiologyCards} /> 
      <Stack.Screen name="Biology" component={Biology} /> 
      <Stack.Screen name="BiologyClass" component={BiologyClass} /> 
      <Stack.Screen name="BiologyCourseCards" component={BiologyCourseCards} /> 
      <Stack.Screen name="ClassVedio" component={ClassVedio} /> 
      {/* <Stack.Screen name="Biology" component={Biology} />  */}
      {/* <Stack.Screen name="Biology" component={Biology} />  */}

        

      </Stack.Navigator>
    </NavigationContainer>
  );
};










//  const MyTab = () => {
//     return (
//      <Tab.Navigator>
//        <Tab.Screen name="Hoome" component={Hoome} />
//        <Tab.Screen name="Account" component={Account} />
//     </Tab.Navigator>
//    );
//   };

export default Navigators ;
