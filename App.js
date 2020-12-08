import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from 'react-navigation'
import * as firebase from 'firebase'
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBxVL03euYnGOmRzq1jN208498mDn2wUGQ",
  authDomain: "waddle-174e1.firebaseapp.com",
  projectId: "waddle-174e1",
  storageBucket: "waddle-174e1.appspot.com",
  messagingSenderId: "1002851750050",
  appId: "1:1002851750050:web:689ecff32cada1c7c287fb",
  measurementId: "G-EZR10G30R3"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore()
const homescreenRef = db.collection('homescreen')
export default function App() {
  const [user, setUser] = useState(null)
  // const [email, setUser] = useState(null)
  const [name, setName] = useState('')

  const [rides, setRides] = useState([])

  useEffect(() => {
    readUser()
    const unsubscribe = homescreenRef.onSnapshot(querySnapshot => {
      const ridesFirestore = querySnapshot
                                .docChanges()
                                .filter(({type}) => type === 'added')
                                .map(({doc}) => {
                                  const ride = doc.data()
                                  return { ...ride, createdAt: ride.createdAt.toDate() }
                                }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime() )
                                setRides(ridesFirestore)          
    })
  }, []);

  async function readUser() {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }

  async function handlePress() {
    const _id = Math.random().toString(36).substring(7) //do this part with firebase auth
    const user = {_id, name}
    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  if(!user) {
    return <View style={styles.container}>
      <TextInput style={styles.input} 
      placeholder="Enter name" 
      value={name} 
      onChangeText={setName}
      ></TextInput>
      <Button 
      onPress={handlePress}
      title="Sign up">
      </Button>
    </View>
  }

  return (
    <View style={styles.container}>
      <Text>Worked</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: 'grey'
  }
});
