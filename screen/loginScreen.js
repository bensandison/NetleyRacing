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

export default function LoginScreen ({navigation}) {
    //this is only being used to test
    const [name, setName] = useState('Ben Sandison');
    saveData(name);

    navigation.replace('TabBarNav');
    return(
    <Text>Login Screen!!</Text>
    )
}

const saveData = async (name) => {
  try {
    await AsyncStorage.setItem("userName", name)
    alert('Data successfully saved')
  } catch (err) {
    alert(err)
  }
}