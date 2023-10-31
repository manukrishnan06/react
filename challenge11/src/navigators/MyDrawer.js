 import React from "react";
 import {DrawerContent} from "../screens";

 import { createDrawerNavigator } from "@react-navigation/drawer";

 import { Homey } from "../screens";
 import {Profiles} from "../screens";
 import {MyTab} from "../screens";

 const Drawer = createDrawerNavigator()

 const MyDrawer = () => {
  return (
    <Drawer.Navigator  
    screenOptions={{headerShown: false}}
        drawerContent={()=> <DrawerContent/>} >
      <Drawer.Screen name="MyTab" component={MyTab}/>
      <Drawer.Screen name="Homey" component={Homey}/>
      <Drawer.Screen name="Profiles" component={Profiles}/>


    </Drawer.Navigator>
  )
 }

export default MyDrawer





