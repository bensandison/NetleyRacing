import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

//import screens
import TabBarNav from "./screen/tabBarNav";
import SplashScreen from "./screen/splashScreen"
import LoginScreen from "./screen/loginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* splash screen appears for 5 seconds*/}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/*sent here if user.name is not saved*/}
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
  )
}