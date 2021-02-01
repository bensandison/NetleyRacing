import React, { useState, useContext } from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import { Platform, StatusBar, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

import AppBarComponent from "../customComponents/appBarComponent";
import AppContext from '../customComponents/appContext';
import CustomSubHeader from '../customComponents/customSubHeader';
import SignOnList from "./SignOnList";
import { useEffect } from "react/cjs/react.development";

export default function SignOnForm({ route, navigation }) {
    const myContext = useContext(AppContext); //get global vars
    const { raceName, raceDate} = route.params;  //get navigation parameters

    //function to submit form:
    function SubmitForm(boatName, sailNumber, helmName, crewName) {
      //set userBoatData object from parameters
      let stringData = {
        "boatName" : boatName,
        "sailNumber" : sailNumber,
        "helmName" : helmName,
        "crewName" : crewName,
      };
      //convert user boat data to string:
      stringData = JSON.stringify(stringData);
      //pass stringData to saveAsync function:
      saveAsync(stringData);
      //navigate back to home screen:
      navigation.navigate("SignOnList");
    }

    //useState variables for text input vars
    const[boatName, setBoatName] = useState();
    const[sailNumber, setSailNumber] = useState();
    const[helmName, setHelmName] = useState();
    const[crewName, setCrewName] = useState();

    //get recent boat data from async
    let recentBoatData = GetData(); //get object of recent boat data
    //if (recentBoatData.helmName === "") recentBoatData.helmName = myContext.userName; //if recent helm name is empty, set helm name to user name

    return (
    <SafeAreaView style={styles.container}>
        <AppBarComponent title="Sign On" disabled={false}/>
        <ScrollView>
          <CustomSubHeader>Sign On - {raceDate}, {raceName}:</CustomSubHeader>
          <TextInput
            label="Boat Name"
            placeholder="Enter Boat Name"
            value={boatName}
            defaultValue={recentBoatData[boatName]}
            onChangeText={() => setBoatName(boatName)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Sail Number"
            placeholder="Enter Sail Number"
            keyboardType = "number-pad"
            value={sailNumber}
            defaultValue={recentBoatData.sailNumber}
            onChangeText={() => setSailNumber(sailNumber)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Helm Name"
            placeholder="Enter Helm Name"
            value={helmName}
            defaultValue={recentBoatData.helmName}
            onChangeText={() => setHelmName(helmName)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Crew Name"
            placeholder="Enter Crew Name"
            value={crewName}
            defaultValue={recentBoatData.crewName}
            onChangeText={() => setCrewName(crewName)}
            style={styles.input}
            mode="outlined"
          />
          <Button
          mode="contained" 
          onPress={() =>SubmitForm()} 
          style={styles.button} 
          labelStyle={{fontSize: 20}}
          >
            Login
          </Button>
        </ScrollView>
    </SafeAreaView>
    )
}

const GetData = async () => {
  AsyncStorage.getItem('userBoatData').then((value) => {
    //parse async object to string
    const userBoatData = JSON.parse(value);
    //if no recent boat data is stored return values as empty strings
    if (value === null) {
      return {
        "boatName" : "",
        "sailNumber" : "",
        "helmName" : "",
        "crewName" : ""
    };
    } else {
      return
    }
  });
}

const saveAsync = async (stringData) => {
  //save user boat data in async
  try {
    await AsyncStorage.setItem('userBoatData', stringData);
  } catch (err) {
    alert(err);
    return err;
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
  button:{
    margin: 20,
    alignSelf: 'center'
  }
})