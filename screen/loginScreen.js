import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@save_name';

export default function LoginScreen ({navigation}) {
    //this is only being used to test

    const [name, setName] = useState('');
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, name)
        alert('Data successfully saved')
      } catch (e) {
        alert('Failed to save the data to the storage')
      }
    }
    navigation.replace('TabBarNav');
    return(
    <Text>Login Screen!!</Text>
    )
}

const saveData = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, name)
    alert('Data successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}