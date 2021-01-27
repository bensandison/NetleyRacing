import React, {useState} from 'react';
import { Platform, StatusBar } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput} from 'react-native-paper';

import AppBarComponent from './customComponents/appBarComponent';

export default function LoginScreen ({navigation}) {
    //this is only being used to test
    const [name, setName] = useState('');
    //saveData(name);
    //navigation.replace('TabBarNav');
    
    return(
      <SafeAreaView style={styles.container}>
        <AppBarComponent title="Login" disabled={true}/>
        <Text styles={{fontSize: 200}}>Login:</Text>
        <TextInput
          label="Full Name"
          placeholder="Enter Name"
          value={name}
          onChangeText={name => setName(name)}
          style={styles.input}
          mode="outlined"
        />
      </SafeAreaView>
    )
}

const saveData = async (name) => {  //function used to set a members name
  try {
    await AsyncStorage.setItem("userName", name)
    alert('Data successfully saved')
  } catch (err) {
    alert(err)
  }
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
    header: {
      margin: 20,
      fontSize : 200,
      fontWeight : "bold", 
      color:"#222"
    }
})