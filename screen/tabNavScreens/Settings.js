import React, {useContext} from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, List } from 'react-native-paper';

import AppBarComponent from "../customComponents/appBarComponent";
import AppContext from "../customComponents/appContext";

export default function Settings({ navigation }) {
    const myContext = useContext(AppContext);   //import global context variables
    return (
        <SafeAreaView style={styles.container}>
            <AppBarComponent title="Settings" disabled={true}/>
            <ScrollView>
                <List.Section title="Settings:" titleStyle={{fontSize : 23, fontWeight : "bold", color:"#222"}}>
                <List.Item
                    title={myContext.userName}
                    description="Click To Change User Account"
                    left={() => <List.Icon icon="person-outline" style={{backgroundColor:"#F8F", borderRadius:30}}/>}
                    onPress={() => console.log("change name")}    //TODO:Change user name
                />
                <List.Item
                    title="Delete User Data"
                    description="This will remove all data from past sign on's"
                    left={() => <List.Icon icon="trash-outline" style={{backgroundColor:"#F55", borderRadius:30}}/>}
                    onPress={() => console.log("delete user data")}//TODO: Delete user data
                />
                <List.Item
                    title="Theme"
                    description="Light Mode"
                    left={() => <List.Icon icon="sunny-outline" style={{backgroundColor:"#0C0", borderRadius:30}}/>}
                    onPress={() => console.log("toggle theme")}//TODO: Add dark mode ( + changing list icon)
                />
                </List.Section>
                <Card style = {styles.cardContainer} onPress={() => console.log("results card pressed")}>
                    <Card.Title
                        title="App Info:"
                        subtitle="Netley Sailing Club App Info:"
                        left={() => <List.Icon icon="information-outline" color={"#000"} style={{backgroundColor:"#0CF", borderRadius:30}}/>}
                        />
                    <Card.Content>
                        <Text style={{fontSize: 15}}>
                        This is an app used to easily sign on for racing at Netley Sailing Club. The back-end of the app is not currently functional so feel free to submit a sign-form to properly test the app. Because the backend is not currently functioning, I added some dummy data to give a good indication of how the app navigation will work.
                        </Text>
                    </Card.Content>
                </Card>
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
    cardContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        margin: 10,
        borderRadius: 10,
        borderColor: "#999",
        borderWidth: 2
    }
})