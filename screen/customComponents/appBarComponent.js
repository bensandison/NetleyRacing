import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AppBarComponent ({title, disabled=true}) {  //back button is disabled by default
  const navigation = useNavigation(); //allows app bar back functionalty

  return(
 <Appbar style={styles.appBar}>
    <Appbar.BackAction onPress={() => navigation.goBack()} disabled={disabled}/>
    <Appbar.Content title={title}/>
  </Appbar>
 );
}

const styles = StyleSheet.create({
  appBar: {
    //marginBottom: 10,   //prevents items being placed directly bellow app bar
  },
});