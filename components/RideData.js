import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function RideData() {
    return (
        <View style={styles.style}>
            <Text> textInComponent </Text>
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


