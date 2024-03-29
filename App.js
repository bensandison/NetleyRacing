import React from 'react';
import { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';   //import vector icons

//import screens
import AppContext from "./screen/customComponents/appContext";
import TabBarNav from "./screen/tabBarNav";
import SplashScreen from "./screen/splashScreen"
import LoginScreen from "./screen/loginScreen";

const Stack = createStackNavigator();

export default function App() {
  const [userName, setUserName] = useState(null);   //useState for user name (will be passed to the rest of the app using react context)
  const globalData = {userName, setUserName};       //creates object for storing user variables (sent through react context)
  return (
    <AppContext.Provider value={globalData}>
    <PaperProvider settings={{ icon: props => <Ionicons {...props} /> }} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* splash screen appears while checking for user login*/}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/*sent here if user is not logged in*/}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/*if user is logged in, send them to home screen*/}
        <Stack.Screen
          name="TabBarNav"
          component={TabBarNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </AppContext.Provider>
  )
}