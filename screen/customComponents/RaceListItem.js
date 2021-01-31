import React from "react";
import { List} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RaceListItem( {raceName = "N/A", raceDate = "N/A", iconColor = "#000"}) {  //function to display races (icon colour changes per series)
    const navigation = useNavigation();
    return(    
        <List.Item
            title={raceName}    //may also want to add some indication if the user is already signed up
            description={raceDate}
            left={() => <List.Icon icon="flag-outline" color={iconColor} />}
            onPress={() => {navigation.navigate('SignOnForm', {"raceName" : raceName, "raceDate" : raceDate,}); //TODO: pass in race series name
            }}    //on press passes name and date through navigation so we can determine the race
        />
    )
}