import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'


export default function RideData() {
    return (
        <View style={styles.style}>
            <Card></Card>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 100
    }
})


