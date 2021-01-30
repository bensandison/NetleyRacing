import React, { useContext, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import AppLoading from 'expo-app-loading';
import AppContext from "./customComponents/appContext";

export default function SplashScreen({navigation}){
  const myContext = useContext(AppContext); //get global vars
  useEffect(() => {   //function starts on first render of AppLoading
      //Check if user login is saved
      //If not then send to login screen
      //else save to context variable and send to Home Screen
      AsyncStorage.getItem('userName').then((value) => {
      if (value === null) {
        navigation.replace('LoginScreen');
      } else {
        myContext.setUserName(value);
        navigation.replace('TabBarNav')
    }});
  }, []);

    return(
        <AppLoading/>   //default splash screen will be displayed while this component renders
    );
};