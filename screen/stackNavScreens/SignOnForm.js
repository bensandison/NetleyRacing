import React from "react"
import {StyleSheet, View, Text, SafeAreaView} from "react-native"
import { Platform, StatusBar } from "react-native";

import AppBarComponent from "../customComponents/appBarComponent";

export default function SignOnForm({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
        <AppBarComponent title="Sign On" disabled={false}/>
        <View style={styles.container}>
            <Text>Sign On Form Here</Text>
        </View>
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