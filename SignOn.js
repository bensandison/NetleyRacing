import React from "react";
import {StyleSheet, View} from "react-native";
import { Divider, List } from 'react-native-paper';
import RaceListItem from "./components/RaceListItem"

const Races = {
    "Summer Series" : ["17 June", "18 June", "19 June"],
    "Regatta" : ["20 Aug", "21 Aug", "22 Aug"],
};

export default function SignOn() {
    return (
        <View>
            <List.Section
                title="Summer Series"
                titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}
            >
                <RaceListItem raceName="Race One" raceDate = "17 June" iconColor = "red"/>
                <RaceListItem raceName="Race Two" raceDate = "17 June" iconColor = "red"/>
                <RaceListItem raceName="Race Three" raceDate = "17 June" iconColor = "red"/>
            </List.Section>
            <Divider/>
            <List.Section
                title="Regatta"
                titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}
            >
            <RaceListItem raceName="Race One" raceDate = "22 Aug" iconColor = "blue"/>
                <RaceListItem raceName="Race Two" raceDate = "23 Aug" iconColor = "blue"/>
                <RaceListItem raceName="Race Three" raceDate = "24 Aug" iconColor = "blue"/>
            </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})