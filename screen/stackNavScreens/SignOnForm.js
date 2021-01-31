import React, { useState, useContext, useEffect } from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import { Platform, StatusBar, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";

import AppBarComponent from "../customComponents/appBarComponent";
import AppContext from '../customComponents/appContext';
import CustomSubHeader from '../customComponents/customSubHeader';

export default function SignOnForm({ route, navigation }) {
    const myContext = useContext(AppContext); //get global vars
    const {raceName, raceDate} = route.params;  //get navigation parameters

    const[boatName, setBoatName] = useState();
    const[helmName, setHelmName] = useState(myContext.userName);
    const[crewName, setCrewName] = useState();

    return (
    <SafeAreaView style={styles.container}>
        <AppBarComponent title="Sign On" disabled={false}/>
        <ScrollView>
          <CustomSubHeader>Sign On - {raceDate}, {raceName}:</CustomSubHeader>
          <TextInput
            label="Boat Name"
            placeholder="Enter Boat Name"
            value={boatName}
            onChangeText={() => setBoatName(boatName)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Helm Name"
            placeholder="Enter Helm Name"
            value={helmName}
            onChangeText={() => setHelmName(helmName)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Boat Name"
            placeholder="Enter Boat Name"
            value={crewName}
            onChangeText={() => setCrewName(crewName)}
            style={styles.input}
            mode="outlined"
          />
          <Button mode="contained" onPress={console.log("send sign on")} style={styles.button} labelStyle={{fontSize: 20}}>
            Login
          </Button>
        </ScrollView>
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