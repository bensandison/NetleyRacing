import React, {useState} from 'react';
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

export default function LoginScreen ({navigation}) {
  const [userName, setUserName] = useState('');

  const saveData = async (userName) => {  //function used to set a userName
    if(userName == ''){
      console.log("enter a name") //TODO: need to add propper name checking and error message
      return;
    }
    try {
      await AsyncStorage.setItem("userName", userName)
      console.log("userName saved");
      navigation.replace('TabBarNav', {userName});  //sends new user name as a navigation param to 'TabBarNav'
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
          value={userName}
          onChangeText={userName => setUserName(userName)}
          style={styles.input}
          mode="outlined"
        />
        <Button mode="contained" onPress={() => saveData(userName)} style={styles.button} labelStyle={{fontSize: 20}}>
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