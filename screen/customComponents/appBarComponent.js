import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function AppBarComponent ({title, disabled=true}) {

  return(
 <Appbar style={styles.appBar}>
    <Appbar.BackAction onPress={() => console.log("back button pressed")} disabled={disabled}/>
    <Appbar.Content title={title}/>
  </Appbar>
 );
}

const styles = StyleSheet.create({
  appBar: {
    marginBottom: 10,   //prevents items being placed directly bellow app bar
  },
});