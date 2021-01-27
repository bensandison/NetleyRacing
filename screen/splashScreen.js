import React, { useState, useEffect } from "react";
import {
    ActivityIndicator,
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
                source={require('../assets/icon.png')}
                style={{width: '90%', resizeMode: 'contain', margin: 30}}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFF"
                size="large"
                style={styles.ActivityIndicator}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});