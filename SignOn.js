import React from "react";
import { render } from "react-dom";
import {StyleSheet, FlatList} from "react-native";
import { Divider, List } from 'react-native-paper';
import RaceListItem from "./components/RaceListItem"
import races from "./data/races.json"

export default function SignOn() {
    return (
        <FlatList style={styles.container}
            data={races}
            renderItem={({item}) => {
                return (
                    <RaceListItem key={item.id} raceName={item.name} raceDate={item.date} iconColor="red"/>
                )
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})