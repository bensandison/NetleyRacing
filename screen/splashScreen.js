import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function SplashScreen({navigation}){
    //state for activity indicator animation:
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        //setTimeout(() => {
          setAnimating(false);
          //Check if user.name is set or not
          //If not then send to login screen
          //else send to Home Screen
          AsyncStorage.getItem('userName').then((value) =>
            navigation.replace(
              value === null ? 'LoginScreen' : 'TabBarNav'
            ),
          );
        //}, 5000);
      }, []);

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/splash.png')}
                style={{width: '100%', resizeMode: 'contain', alignSelf: 'center'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});