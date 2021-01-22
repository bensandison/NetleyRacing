import React from "react"
import {StyleSheet, View, Text} from "react-native"
import { exp } from "react-native/Libraries/Animated/src/Easing"

export default function Tab2() {
    return (
        <View style={styles.container}>
            <Text>Second Tab Content</Text>
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