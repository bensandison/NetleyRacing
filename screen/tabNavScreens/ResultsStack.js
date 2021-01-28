import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import ResultsList from "../stackNavScreens/ResultsList";
import ResultsGrid from "../stackNavScreens/ResultsGrid";

const Stack = createStackNavigator();

export default function ResultsStack() {
    return (
        <Stack.Navigator initialRouteName="ResultsList">
          <Stack.Screen
            name="ResultsList"
            component={ResultsList}
            options={{headerShown: false}}  //do not need header as I am using my own custom app bar
          />
          <Stack.Screen
            name="ResultsGrid"
            component={ResultsGrid}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    )
  }