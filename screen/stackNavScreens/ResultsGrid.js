import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { Divider, List } from 'react-native-paper';

import AppBarComponent from "../customComponents/appBarComponent";

export default function ResultsGrid() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBarComponent title="My Results" disabled={false}/>
            
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