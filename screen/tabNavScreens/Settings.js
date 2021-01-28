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
                    title="Ben Sandison"
                    description="Click To Change User Account"
                    left={() => <List.Icon icon="person-outline" style={{backgroundColor:"#F8F", borderRadius:30}}/>}
                    onPress={() => console.log("press")}    //TODO:Change user name
                />
                <List.Item
                    title="Delete User Data"
                    description="This will remove all data from past sign on's"
                    left={() => <List.Icon icon="trash-outline" style={{backgroundColor:"#F55", borderRadius:30}}/>}
                    onPress={() => console.log("press")}//TODO: Delete user data
                />
                <List.Item
                    title="Theme"
                    description="Light Mode"
                    left={() => <List.Icon icon="sunny-outline" style={{backgroundColor:"#8FF", borderRadius:30}}/>}
                    onPress={() => console.log("press")}//TODO: Add dark mode ( + changing list icon)
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