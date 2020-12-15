import React, { Component, useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import * as firebase from 'firebase';
import {Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import {loggingOut} from '../API/firebaseMethods'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileRide from '../components/ProfileRide'
const _font = 'San Francisco';
const _fontSize = 32;
const mapColor = "#262f3d";
const mapTextColor = "#818996";



export default function ProfileScreen ( {navigation}) {
    let currentUserUID = firebase.auth().currentUser.uid;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [rides, setRides] = useState([]);
    const [allRideIds, setAllRideIds] = useState([]);
    const [onlyCurrentRides, setOnlyCurrentRides] = useState([]);

    StatusBar.setBarStyle('dark-content', true);

    const ref = firebase.firestore().collection('rides');
    useEffect(() => {

        async function getRideInfo() {
            return ref.onSnapshot((querySnapshot) => {
                let _list = [];
                querySnapshot.forEach(doc => {
                    let {id, date, dest, name, start, phoneNumber} = doc.data();
                    _list.push({
                        id: id,
                        date,
                        dest, 
                        name,
                        start,
                        phoneNumber
                    })
                })
                setRides(_list)
            })
        }
        async function getUserInfo() {
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
                setFirstName(dataObj.firstName);
                setLastName(dataObj.lastName);
                setPhoneNumber(dataObj.phoneNumber);
                setEmail(dataObj.email);
            }
            } catch (err){
            Alert.alert('There is an error.', err.message);
            }
        }
        
        getRideInfo();
        getUserInfo();
    }, []);
    let firstInitial = firstName.charAt(0);
    let lastInitial = lastName.charAt(0);

    const handlePress = () => {
        loggingOut()
    }
    

    // let thing = JSON.parse(rides);
    // console.log(thing)    


    return ( 

        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Text
                        label={`${firstInitial}${lastInitial}`}

                        />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop: 15, 
                            marginBottom: 5,
                            }]}>{firstName} {lastName}</Title>
                        <Caption style={styles.caption}>Member</Caption>
                    </View>
                    <TouchableOpacity style={[styles.container, {
                        marginTop: 15,
                        marginBottom: 5
                    }]}>
                        <Text onPress={handlePress}style={styles.optionText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size='20'/>
                    <Text style={{color:"#777777", marginLeft: 20, marginTop: 3}}>{phoneNumber}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size='20'/>
                    <Text style={{color:"#777777", marginLeft: 20, marginTop: 3}}>{email}</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Title>Your Rides</Title>
            </View>
            <View style={styles.infoBoxWrapper}>
            <FlatList
                style={{flex: 1}}
                data={rides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProfileRide {...item} />}
            />
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    optionText: {
        fontFamily: _font.loadAsync,
        fontSize: 25,
        color: "black",
        marginLeft: 40
    },
    infoBoxWrapper: {
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 300
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
}) 
