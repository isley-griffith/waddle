import React, { Component, useState, useEffect, useRef } from 'react'
import { Text, View, StyleSheet, TextField, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {createRide} from '../API/firebaseMethods'

const GooglePlacesInputStart = () => {
    const ref = useRef();
    useEffect(() => {
      ref.current?.setAddressText('');
    }, []);
    
    return (
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder='Enter starting point'
        enablePoweredByContainer={false}
        fetchDetails={true}
        onChangeText={text => onChangeText(text)}
  
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          
  
        }}
        query={{
          key: 'AIzaSyBc1ARWe1pRX_xR5qyEyMBXE1-b5KKCcNU',
          language: 'en',
        }}
  
        currentLocation={true}
        currentLocationLabel='Current Location'
      />
    );
};
const GooglePlacesInputEnd = () => {
    const ref = useRef();
  
    useEffect(() => {
      ref.current?.setAddressText('');
    }, []);
  
    return (
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder='Enter destination'
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyBc1ARWe1pRX_xR5qyEyMBXE1-b5KKCcNU',
          language: 'en',
        }}
        currentLocation={true}
        currentLocationLabel='Current Location'
      />
    );
  };

function GetDateField() {
    return (
        <View style={styles.dateField}>
            <Input
                placeholder="Which day?: MM/DD/YYYY"
            >
            </Input>
        </View>
    )
}

function GetTimeField() {


    return (
        <View style={styles.dateField}>
            <Input
                placeholder="What time?: ex: 4:00"
            >
            </Input>
        </View>
    )
}

export default function RideData(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const emptyState = () => {
        setDate('');
        setTime('');
    };

    const handlePress = () => {
        if (!date) {
            Alert.alert('Date is required.');
        } else if (!time) {
            Alert.alert('Time is required.')
        } else {
            createRide(
                'fillerName',
                'fillerStart',
                'fillerDest',
                date,
                time
            )
        }
    };

    return (
        <View style={styles.style}>
            <GooglePlacesInputStart></GooglePlacesInputStart>
            <GooglePlacesInputEnd></GooglePlacesInputEnd>
           
            {/* GetDateField begins */}
            <View style={styles.dateField}>
                <Input
                    placeholder="Which day?: MM/DD/YYYY"
                    value={date}
                    onChangeText={(date) => setDate(date)}
                >
                </Input>
            </View>
            {/* GetDateField ends */}
            {/* GetTimeField begins */}
            <View style={styles.dateField}>
                <Input
                    placeholder="What time?: ex: 4:00"
                    value={time}
                    onChangeText={(time) => setTime(time)}

                >
            </Input>
        </View>
            {/* GetTimeField ends */}
            <View>
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
        backgroundColor: 'white'
    }
})


