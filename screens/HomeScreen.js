import React, { setState, useState, Component } from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import JoinPlaceholder from '../components/JoinPlaceholder';
import TripCard from '../components/TripCard.js';

const _font = 'San Francisco';
const _fontSize = 32


const styles = StyleSheet.create({
    headerText: {
        fontFamily: _font.loadAsync,
        fontSize: _fontSize,
        textAlign: 'center',
        fontWeight: "bold"
    },
    categoryText: {
        fontFamily: _font.loadAsync,
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        fontFamily: _font.loadAsync,
        fontSize: 15,
        textAlign: "center",
    },
    divider: {
        height: 12
    }
})

export default function HomeScreen() {
    const Stack = createStackNavigator();

    return (

        <ScrollView style={styles.container}>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
            />
            <View style={styles.divider}></View>
            <View style={styles.divider}></View>
            <View style={styles.divider}></View>
            <Text style={styles.headerText}>Home</Text>
            <View style={styles.divider}></View>
            <Divider style={{ backgroundColor: 'grey' }} />
            <View style={styles.divider}></View>

            <TripCard></TripCard>
            <TripCard></TripCard>
            <TripCard></TripCard>
            <TripCard></TripCard>
            <TripCard></TripCard>
            <TripCard></TripCard>
            <TripCard></TripCard>
            <TripCard></TripCard>
        </ScrollView>
    );
}
