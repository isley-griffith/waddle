import React, { Component } from 'react'
import { Text, View, StyleSheet, TextField } from 'react-native'
import { Card } from 'react-native-elements'
import GoogleInputStart from './GoogleInputStart'
import GoogleInputEnd from './GoogleInputEnd'



export default function RideData(props) {
    return (
        <View style={styles.style}>
            <GoogleInputStart></GoogleInputStart>
            <GoogleInputEnd></GoogleInputEnd>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        flex: 1,
        position: 'absolute',
        // backgroundColor: 'lightgrey',
        // bottom: 500,
        // bottom: 650,
        top: -750,
        borderRadius: 4,
        // padding: 5,
        width: "100%",
        left: 20
    },
    topHalf: {

    }
})


