import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import Home from "./Home.js"
import Tab2 from "./Tab2"

const Tab = createBottomTabNavigator()  //outside fn as it only needs to happen once

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#00f",
          tabStyle:{backgroundColor: "#ddd"},
          labelStyle:{fontSize:18, paddingBottom: 15},
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
