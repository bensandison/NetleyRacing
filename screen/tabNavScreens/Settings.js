import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List } from 'react-native-paper';

import AppBarComponent from "../customComponents/appBarComponent";

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBarComponent title="Settings" disabled={true}/>
            <ScrollView>
                <List.Section title="Settings:" titleStyle={{fontSize : 23, fontWeight : "bold", color:"#222"}}>
                <List.Item
                    title={name}
                    description="Click To Change User Account"
                    left={() => <List.Icon icon="person-outline" style={{backgroundColor:"#ff8080", borderRadius:30}}/>}
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