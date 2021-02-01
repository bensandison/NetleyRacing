import React from "react";
import { Card, List, DataTable } from 'react-native-paper';
import {StyleSheet} from "react-native";

export default function resultsCard({name, date, iconColor, boat, position, laps, time}) {
    
    return(
        <Card style = {styles.cardContainer} onPress={() => console.log("results card pressed")}>
            <Card.Title 
                title={name}
                subtitle={date}
                left={() => <List.Icon icon="flag-outline" color={iconColor} />}
                />
            <Card.Content>
                        <DataTable.Header>
                            <DataTable.Title>Boat:</DataTable.Title>
                            <DataTable.Title numeric>Position:</DataTable.Title>
                            <DataTable.Title numeric>Laps:</DataTable.Title>
                            <DataTable.Title numeric>Time:</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                            <DataTable.Cell>{boat}</DataTable.Cell>
                            <DataTable.Cell numeric>{position}</DataTable.Cell>
                            <DataTable.Cell numeric>{laps}</DataTable.Cell>
                            <DataTable.Cell numeric>{time}m</DataTable.Cell>
            </DataTable.Row>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        margin: 10,
        borderRadius: 10,
        borderColor: "#999",
        borderWidth: 2
    },
})