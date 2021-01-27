import React, {useState} from 'react';
import { Platform, StatusBar } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from 'react-native-paper';

export default function LoginScreen ({navigation}) {
    //this is only being used to test
    const [name, setName] = useState('');
    //saveData(name);
    //navigation.replace('TabBarNav');
    
    return(
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          label="Full Name"
          value={name}
          onChangeText={name => setName(name)}
          mode="outlined"

        />
        <Text>Hello?</Text>
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

    }
})