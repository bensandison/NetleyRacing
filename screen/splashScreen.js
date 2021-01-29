import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import AppLoading from 'expo-app-loading';

export default function SplashScreen({navigation}){
    useEffect(() => {   //function starts on first render of AppLoading
          setAnimating(false);
          //Check if user.name is set or not
          //If not then send to login screen
          //else send to Home Screen
          AsyncStorage.getItem('userName').then((value) =>
            navigation.replace(
              value === null ? 'LoginScreen' : 'TabBarNav'
            ),
          );
      }, []);

    return(
        <AppLoading/>   //default splash screen will be displayed while this component renders
    );
};