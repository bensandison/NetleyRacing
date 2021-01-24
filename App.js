import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {NavigationContainer, ThemeProvider} from "@react-navigation/native"
import SignOn from "./SignOn.js"
import MyResults from "./MyResults"
import Settings from "./Settings"
import Ionicons from 'react-native-vector-icons/Ionicons';   //import vector icons

const Tab = createBottomTabNavigator();  //outside fn as it only needs to happen once

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SignOn"
        backBehavior="history"
        tabBarOptions={{
          inactiveTintColor: "gray",
          activeTintColor: "blue",
          labelPosition: 'below-icon',
          keyboardHidesTabBar: "true",
          style: {
            height: 60,
            backgroundColor: 'white',
          },
          labelStyle: {
            fontSize: 12,
            marginBottom: 6,
          }
        }}
      >
        <Tab.Screen 
          name="SignOn" 
          component={SignOn}
          options={{
            tabBarLabel: 'Sign On',
            tabBarIcon: ({color, size }) => (
              <Ionicons name="book-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="MyResults" 
          component={MyResults}
          options={{
            tabBarLabel: 'My Results',
            tabBarIcon: ({color, size }) => (
              <Ionicons name="eye-outline" color={color} size={size} />
            ),
            //tabBarBadge: 1, //may want to add this for dealing with notifications
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}