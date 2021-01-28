import React from "react"
import {StyleSheet, View, Text} from "react-native"

export default function ResultsList() {
    return (
        <View style={styles.container}>
            <Text>Your Results Here</Text>
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