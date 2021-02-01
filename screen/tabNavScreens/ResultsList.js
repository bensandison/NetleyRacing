import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import AppBarComponent from "../customComponents/appBarComponent";
import ResultsCard from "../customComponents/resultsCard";


export default function MyResults({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <AppBarComponent title="My Results" disabled={true}/>
            <ScrollView>
                <ResultsCard name="Race One" date="4th March" iconColor="red" 
                boat="Lazer 4.7" position="2nd" laps="3" time="41"/>
                <ResultsCard name="Race Two" date="5th March" iconColor="green" 
                boat="Lazer 4.7" position="4th" laps="2" time="36"/>
                <ResultsCard name="Race Three" date="12th March" iconColor="blue" 
                boat="29er" position="1st" laps="2" time="25"/>
                <ResultsCard name="Race Three" date="12th March" iconColor="red" 
                boat="29er" position="1st" laps="2" time="25"/>
                <ResultsCard name="Race Three" date="12th March" iconColor="purple" 
                boat="29er" position="1st" laps="2" time="25"/>
                <ResultsCard name="Race Three" date="12th March" iconColor="green" 
                boat="29er" position="1st" laps="2" time="25"/>
                <ResultsCard name="Race Three" date="12th March" iconColor="red" 
                boat="29er" position="1st" laps="2" time="25"/>
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
})