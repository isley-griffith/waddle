import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import React, { useState, Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import JoinButton from '../components/JoinButton';
import JoinPlaceholder from '../components/JoinPlaceholder';

const _font = "San Francisco";

export default function TripCard(props) {
    const [dataVisibility, setDataVisibility] = useState(false);
    return (
        <View>
            <Card>
                <Text style={styles.cardFont}>USER is going to DESTINATION on DATE at TIME</Text>
                <View style={styles.spacer}></View>
                <Card.Divider></Card.Divider>
                <Card.Title></Card.Title>
                <View style={styles.cardStyle}>
                    <View>
                    <JoinButton
                    title="Join" 
                    type="clear"
                    style={styles.buttonStyle}
                    dataVisibility={dataVisibility} setDataVisibility={setDataVisibility} 
                    />
                    </View>
                    <Button
                    title="Itinerary"
                    type="clear"
                    style={styles.buttonStyle}
                    />
                </View>
                <View style={styles.data}>
                    {dataVisibility ? <JoinPlaceholder /> : null}
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
        justifyContent: 'center',
        zIndex: 3,
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
    data: {
        width: '100%',
        backgroundColor: 'black'
    }

})
