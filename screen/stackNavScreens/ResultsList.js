import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List } from 'react-native-paper';

import AppBarComponent from "../customComponents/appBarComponent";

export default function MyResults() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBarComponent title="My Results" disabled={true}/>
            <ScrollView>
                <List.Section title="Recent Race Results:" titleStyle={{fontSize : 23, fontWeight : "bold", color:"#222"}}>
                <List.Item
                    title="Race 1"
                    description="Date"
                    left={() => <List.Icon icon="flag-outline"/>}
                    onPress={() => console.log("press")}
                />
                </List.Section>
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