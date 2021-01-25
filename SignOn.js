import React from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List } from 'react-native-paper';
import RaceListItem from "./components/RaceListItem"
import races from "./data/races.json"

export default function SignOn() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <List.Section title="Summer Series" titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}>
                    <RaceListItem raceName="Race One" raceDate = "17 June" iconColor = "red"/>
                    <RaceListItem raceName="Race Two" raceDate = "17 June" iconColor = "red"/>
                    <RaceListItem raceName="Race Three" raceDate = "17 June" iconColor = "red"/>
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
    },
})