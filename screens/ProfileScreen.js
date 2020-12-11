import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Avatar, Accessory, Divider, Card } from 'react-native-elements'
import * as firebase from 'firebase';

import {loggingOut} from '../API/firebaseMethods'

const _font = 'San Francisco';
const _fontSize = 32;
const mapColor = "#262f3d";
const mapTextColor = "#818996";



export default function ProfileScreen ( {navigation}) {
    let currentUserUID = firebase.auth().currentUser.uid;

    const [firstName, setFirstName] = useState('');

    StatusBar.setBarStyle('dark-content', true);

    useEffect(() => {
        async function getUserInfo(){
            try {
            let doc = await firebase
                .firestore()
                .collection('users')
                .doc(currentUserUID)
                .get();
    
            if (!doc.exists){
                Alert.alert('No user data found!')
            } else {
                let dataObj = doc.data();
                setFirstName(dataObj.firstName)
            }
            } catch (err){
            Alert.alert('There is an error.', err.message)
            }
        }
        getUserInfo();
    })

    const handlePress = () => {
        loggingOut()
    }
    return ( 
        <SafeAreaView >
            <StatusBar backgroundColor={mapColor}></StatusBar>
            <View style={styles.divider}></View>
            <Text style={styles.baseText}>{firstName}'s Profile</Text>
            <View style={styles.divider}></View>
            <Divider style={{ backgroundColor: 'grey' }} />
            <View>
                <Image source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        style = {styles.image} />
            </View>
            <View style = {{height:10}}></View>
                <TouchableOpacity>
                    <Text style = {styles.optionText}>My Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.optionText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.optionText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={handlePress}style={styles.optionText}>Log Out</Text>
                </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: _font.loadAsync,
        fontSize: _fontSize,
        textAlign: 'center',
        fontWeight: "bold",
        color: "black",
    },
    divider: {
        height: 12
    },
    contentBody: {
        height: "100%",
    },
    optionText: {
        fontFamily: _font.loadAsync,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "justify",
        color: "black",
        paddingLeft: 50,
        marginTop: 25
    },
    fakeButton: {
        alignItems: "center",
        backgroundColor: "white",
    },
    image: {
        width: 100,
        height:100,
        marginTop:30,
        marginLeft: 50
    }

}) 
