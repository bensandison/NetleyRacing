import React from "react"
import {StyleSheet, View, Text} from "react-native"

export default function SignOnForm() {
    return (
        <View style={styles.container}>
            <Text>Sign On Form Here</Text>
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