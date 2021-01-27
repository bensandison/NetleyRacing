import React from 'react';
import {Text, StyleSheet} from 'react-native';

//this is a custom component that allows users to pass in their text as a child prop.
export default function customText(props) {
    return(
        <Text style={styles.standard}>
            {props.children}
        </Text>
    )
}




const styles = StyleSheet.create({
    standard: {
        margin: 15,
        fontSize : 20, 
        color:"#222"   
    },
})