import React from "react";
import {StyleSheet, View} from "react-native";
import { ActivityIndicator, Divider, Text, List } from 'react-native-paper';

export default function SignOn() {
    return (
        <View>
            <List.Section
                title="Summer Series"
                titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}
            >
                <List.Item 
                    title="Race One"
                    description="17 June"
                    left={() => <List.Icon icon="flag-outline" />}
                    onPress={() => console.log("Race 1 Selected")}
                />
                <List.Item
                    title="Race One"
                    description="18 June"
                    left={() => <List.Icon color="#000" icon="flag-outline" />}
                    onPress={() => console.log("Race 2 Selected")}
                />
            </List.Section>
            <Divider/>
            <List.Section
                title="Reggatta"
                titleStyle={{fontSize : 20, fontWeight : "bold", color:"#222"}}
            >
                <List.Item 
                    title="Race One"
                    description="21 August"
                    left={() => <List.Icon icon="flag-outline" />}
                    onPress={() => console.log("Race 1 Selected")}
                />
                <List.Item
                    title="Race One"
                    description="22 August"
                    left={() => <List.Icon color="#000" icon="flag-outline" />}
                    onPress={() => console.log("Race 2 Selected")}
                />
            </List.Section>
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