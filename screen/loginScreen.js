import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput, Button } from 'react-native-paper';

import AppBarComponent from './customComponents/appBarComponent';
import CustomHeader from './customComponents/customHeader'
import AppContext from "./customComponents/appContext";

export default function LoginScreen ({navigation}) {
  const myContext = useContext(AppContext);
  
  const saveData = async () => {  //function used to set a userName
    //checks name is not empty
    //sets async and global variable to name
    //navigates to home
    if(myContext.userName === "" || null){
      console.log("enter a name") //TODO: need to add propper name checking and error message
      return;
    }
    try {
      await AsyncStorage.setItem("userName", myContext.userName)
      navigation.replace('TabBarNav');
    } catch (err) {
      alert(err)
    }
  }

    return(
      <SafeAreaView style={styles.container}>
        <AppBarComponent title="Login" disabled={true}/>
        <CustomHeader>Login:</CustomHeader>
        <TextInput
          label="Full Name"
          placeholder="Enter Name"
          value={myContext.userName}
          onChangeText={myContext.setUserName}
          style={styles.input}
          mode="outlined"
        />
        <Button mode="contained" onPress={() => saveData()} style={styles.button} labelStyle={{fontSize: 20}}>
          Login
        </Button>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    input: {
      margin: 10,
    },
    button:{
      margin: 20,
      alignSelf: 'center'
    }
})