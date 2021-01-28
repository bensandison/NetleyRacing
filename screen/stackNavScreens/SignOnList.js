import React from "react";
import { Platform, StatusBar } from "react-native";
import {StyleSheet, SafeAreaView, Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List } from 'react-native-paper';

import RaceListItem from "../customComponents/RaceListItem"
import AppBarComponent from "../customComponents/appBarComponent";

export default function SignOnList() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBarComponent title="Sign On" disabled={true}/>
            <ScrollView>
                <List.Section title="Summer Series" titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}>
                    <RaceListItem raceName="Race One" raceDate = "17 June" iconColor = "red"/>
                    <RaceListItem raceName="Race Two" raceDate = "17 June" iconColor = "red"/>
                    <RaceListItem raceName="Race Three" raceDate = "17 June" iconColor = "red"/>
                </List.Section>
                <List.Section title="Regatta" titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}>
                    <RaceListItem raceName="Race One" raceDate = "17 June" iconColor = "blue"/>
                    <RaceListItem raceName="Race Two" raceDate = "17 June" iconColor = "blue"/>
                    <RaceListItem raceName="Race Three" raceDate = "17 June" iconColor = "blue"/>
                </List.Section>
                <List.Section title="Frostbite" titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}>
                    <RaceListItem raceName="Race One" raceDate = "17 June" iconColor = "green"/>
                    <RaceListItem raceName="Race Two" raceDate = "17 June" iconColor = "green"/>
                    <RaceListItem raceName="Race Three" raceDate = "17 June" iconColor = "green"/>
                </List.Section>
                <Divider/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
})