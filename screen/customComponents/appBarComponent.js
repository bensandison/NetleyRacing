import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function AppBarComponent ({title, disabled=true}) {

  return(
 <Appbar style={styles.bottom}>
    <Appbar.BackAction onPress={() => console.log("back button pressed")} disabled={disabled} style={styles.backButton}/>
    <Appbar.Content title={title}/>
    
  </Appbar>
 );
}

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  backButton: {
  }
});