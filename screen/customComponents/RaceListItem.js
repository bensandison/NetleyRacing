import React from "react";
import { List} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RaceListItem( {raceName = "N/A", raceDate = "N/A", iconColor = "#000"}) {  //function to display races (icon colour changes per series)
    const navigation = useNavigation(); //TODO: give each race an ID to be identified by after navigation
    return(    
        <List.Item
            title={raceName}    //may also want to add some indication if the user is already signed up
            description={raceDate}
            left={() => <List.Icon icon="flag-outline" color={iconColor} />}
            onPress={() => console.log(navigation.navigate('SignOnForm'))}    //onPress could be determined by race name or we could pass a function / ID (include a default on press function in props so it wont break)
        />
    )
}