import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import SignOnList from "../stackNavScreens/SignOnList";
import SignOnForm from "../stackNavScreens/SignOnForm";

const Stack = createStackNavigator();

export default function SignOnStack({Navigation}) {
    return (
        <Stack.Navigator initialRouteName="SignOnList">
          <Stack.Screen
            name="SignOnList"
            component={SignOnList}
            options={{headerShown: false}}  //do not need header as I am using my own custom app bar
          />
          <Stack.Screen
            name="SignOnForm"
            component={SignOnForm}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    )
  }