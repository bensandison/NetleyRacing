import React from "react";
import { ColorPropType } from "react-native";
import { List, Avatar } from 'react-native-paper';
import { color } from "react-native-reanimated";

export default function RaceListItem( {raceName = "N/A", raceDate = "N/A", iconColor = "#000"}) {  //function to display races (icon colour changes per series)
    return(    
        <List.Item
            title={raceName}    //may also want to add some indication if the user is already signed up
            description={raceDate}
            left={() => <List.Icon icon="flag-outline" color={iconColor} />}
            onPress={() => console.log(raceName + " selected.")}    //onPress could be determined by race name or we could pass a function / ID (include a default on press function in props so it wont break)
        />
    )
}