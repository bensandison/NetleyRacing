import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';   //import vector icons

import SignOn from "./tabNavScreens/SignOnStack";
import MyResults from "./tabNavScreens/ResultsStack";
import Settings from "./tabNavScreens/Settings";

const Tab = createBottomTabNavigator();  //outside fn as it only needs to happen once

export default function MyTabs() {
  return (
      <Tab.Navigator
          initialRouteName="SignOnStack"
          backBehavior="history"
          tabBarOptions={{
            inactiveTintColor: "gray",
            activeTintColor: '#6200EE',
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
            name="SignOnStack" //sign on tab
            component={SignOn}
            options={{
              tabBarLabel: 'Sign On',
              tabBarIcon: ({color, size }) => (
                <Ionicons name="book-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="ResultsStack" //results tab
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
            name="Settings" //settings tab
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
  )
}