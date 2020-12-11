import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'


export default function JoinPlaceholder() {
    return (
        <View style={styles.style}>
            <Text style = {styles.text}>Joined!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 150,
        top:-100,
        width:100,
        height:100,
    },

    text: {
        color: 'white'
    }
})


