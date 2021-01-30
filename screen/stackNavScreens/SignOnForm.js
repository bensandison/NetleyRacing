import React from "react"
import {StyleSheet, View, Text, SafeAreaView} from "react-native"
import { Platform, StatusBar } from "react-native";
import { TextInput, Button } from 'react-native-paper';

import AppBarComponent from "../customComponents/appBarComponent";
import CustomHeader from '../customComponents/customHeader'

export default function SignOnForm({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
        <AppBarComponent title="Sign On" disabled={false}/>
        <TextInput
          label="Boat"
          placeholder="Enter Boat"
          //value={}
          //onChangeText={}
          autoComplete="on"
          style={styles.input}
          mode="outlined"
        />
        <Button mode="contained" onPress={console.log("send sign on")} style={styles.button} labelStyle={{fontSize: 20}}>
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