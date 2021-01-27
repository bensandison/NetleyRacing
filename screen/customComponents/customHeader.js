import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//custom component for a custom header style
export default function customHeader(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
    },
    header: {
        fontSize : 30,
        fontWeight : "bold", 
        color:"#222"   
    }
})