import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const _font = "San Francisco";

export default function TripCard() {
    return (
        <View>
            <Card>
                <Text style={styles.cardFont}>USER is going to DESTINATION on DATE at TIME</Text>
                <View style={styles.spacer}></View>
                <Card.Divider></Card.Divider>
                <Card.Title></Card.Title>
                <View style={styles.cardStyle}>
                    <Button
                    title="Join"
                    type="clear"

                    style={styles.buttonStyle}
                    />
                    <Button
                    title="Itinerary"
                    type="clear"

                    style={styles.buttonStyle}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    spacer: {
        height: 12
    },
    cardStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        paddingLeft: 30,
        paddingRight: 30,
        // paddingBottom: 30
    },
    cardFont: {
        fontSize: 18,
        fontFamily: _font.loadAsync,
        fontWeight: "bold"
    },

})
