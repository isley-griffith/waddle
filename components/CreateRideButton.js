import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import { Button } from 'react-native-elements'

const _width = 70;

export default function CreateRideButton(props) {
    return (

        <Button
            // title='create'
            titleStyle={styles.buttonText}
            style={styles.button}
            type='outline'
            onPress={() => 
                props.setDataVisibility(!props.dataVisibility)}
        />


    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        position: 'absolute',
        left: Dimensions.get('window').width/2 - _width/2,
        top: Dimensions.get('window').height - 120,
        width: _width,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 11,
        textAlign: 'center'
    }
})

