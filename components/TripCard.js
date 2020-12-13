import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import React, { useState, Component, useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet, Alert, FlatList } from 'react-native';
import JoinButton from '../components/JoinButton';
import JoinPlaceholder from '../components/JoinPlaceholder';
import * as firebase from 'firebase'
import Ride from './Ride'

import getRideData from '../API/firebaseMethods'


const _font = "San Francisco";


export default function TripCard(props) {
    const [dataVisibility, setDataVisibility] = useState(false);
    const [date, setDate] = useState('');
    const [dest, setDest] = useState('');
    const [firstName, setFirstName] = useState('');
    const [start, setStart] = useState('');
    const [time, setTime] = useState('');
    const [userId, setUserId] = useState('');
    const [rides, setRides ] = useState([]);


    let currentUserUID = firebase.auth().currentUser.uid;
    const ref = firebase.firestore().collection('rides');
    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
            const list = [];
            querySnapshot.forEach(doc => {
                const {date, dest, name, start, time } = doc.data();
                list.push({
                    id: doc.id,
                    date,
                    dest,
                    name,
                    start,
                    time,
                })
            })
            setRides(list);
        });
    }, []);

    return (
        <View>
            <FlatList
                style={{flex: 1}}
                data={rides}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Ride {...item} /> }
            >

            </FlatList>
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
