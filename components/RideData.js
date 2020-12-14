import React, { Component, useState, useEffect, useRef } from 'react'
import { Text, View, StyleSheet, TextField, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements'
import * as firebase from 'firebase'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {createRide} from '../API/firebaseMethods'
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function RideData(props) {
    const [date, setDate] = useState(new Date(1598051730000));
    // const [time, setTime] = useState('');
    const [firstName, setFirstName] = useState('');

    // const [datePick, setDatePick] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dest, setDest] = useState('');
    const [start, setStart] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const refDest = useRef();
    useEffect(() => {
      refDest.current?.setAddressText('');
    }, []);

    const ref = useRef();
        useEffect(() => {ref
        ref.current?.setAddressText('');
    }, []);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    let currentUserUID = firebase.auth().currentUser.uid;
    useEffect(() => {
        async function getUserInfo() {
            let doc = await firebase
                .firestore()
                .collection('users')
                .doc(currentUserUID)
                .get();
            let dataObj = doc.data();
            setFirstName(dataObj.firstName);
            setPhoneNumber(dataObj.phoneNumber);
        }
        getUserInfo()
    })

    const handlePress = () => {
        if (!date) {
            Alert.alert('Date is required.');
        } else {
            createRide(
                firstName,
                start,
                dest,
                date,
                phoneNumber
            )
            Alert.alert('Ride Created!')
        }
    };

    return (
        <View style={styles.style}>
            {/* InputStart */}
            <GooglePlacesAutocomplete
                ref={ref}
                placeholder='Enter starting point'
                enablePoweredByContainer={false}
                fetchDetails={true}
                onChangeText={text => onChangeText(text)}
                onPress={(data, details = null) => {
                    setStart(data.description)
                    // console.log(data, details);
                }}
                query={{
                key: 'AIzaSyBc1ARWe1pRX_xR5qyEyMBXE1-b5KKCcNU',
                language: 'en',
                }}
                currentLocation={true}
                currentLocationLabel='Current Location'
            />
            {/* InputStart */}
            <GooglePlacesAutocomplete
                ref={refDest}
                placeholder='Enter destination'
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                    setDest(data.description);
                    // console.log(data, details);
                }}
                query={{
                key: 'AIzaSyBc1ARWe1pRX_xR5qyEyMBXE1-b5KKCcNU',
                language: 'en',
                }}
                currentLocation={true}
                currentLocationLabel='Current Location'
            />

            <View style={{backgroundColor:'white'}}>
                <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    is24Hour={true}
                    mode="datetime"
                    // display="compact"
                    onChange={onChange}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                title='Create Ride'
                onPress={handlePress}
                ></Button>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        flex: 1,
        position: 'absolute',
        top: -750,
        borderRadius: 4,
        width: "100%",
        left: 20
    },
    dateField: {
        backgroundColor: 'white',
    },
    buttonStyle: {
        marginTop: 5
    }
})


