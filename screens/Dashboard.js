import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import * as firebase from 'firebase';
import {loggingOut} from '../API/firebaseMethods';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MapScreen from './MapScreen'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

const TabMember = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
      }
    }
    getUserInfo();
  })

  // loggingOut();
  // navigation.replace('Home')

  const handlePress = () => {
    loggingOut();
    navigation.replace('Home');
  };

  return ( //Tab navigator goes here

    <NavigationContainer independent={true}>
      <TabMember.Navigator tabBarOptions ={{
            keyboardHidesTabBar: "true:",
            inactiveTintColor: '#c0c0c0',
            activeTintColor: '#696969'
          }}>
            <TabMember.Screen name='Home' component={HomeScreen} options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/> ),
              }}
            />
            <TabMember.Screen name='Map' component={MapScreen} options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="map" color={color} size={size}/> ),
              }}
            />
            <TabMember.Screen name="Profile" component={ProfileScreen} options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={size}/> ),
              }}
            />
      </TabMember.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
    button: {
      width: 150,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
    },
    buttonText: {
      fontSize:20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'italic',
      marginTop: '2%',
      marginBottom: '10%',
      fontWeight: 'bold',
      color: 'black',
    },
    titleText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#2E6194',
    },
  });