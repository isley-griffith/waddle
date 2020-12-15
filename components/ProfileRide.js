import React from 'react';
import * as firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import { List, Card, Button, Avatar } from 'react-native-paper';
import * as SMS from 'expo-sms';

function ProfileRide({ id, date, dest, name, start, phoneNumber }) {
    

    const toDate = date.toDate(); // converting from firestore Timestamp to JS Date object
    
    onPress = async(_id, _date, _dest, _name, _start, _phoneNumber) => {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            let status = await SMS.sendSMSAsync(
                `${_phoneNumber}`,
                `Hey, ${_name}! I would like to join your trip on Rideshare. Could you tell me more about your trip to ${_dest}?`
            )
        } else {

            Alert.alert("Sorry this number is currently unavailable.");
        }
        // console.log(phoneNumber)
    }
     return (
        <View style={styles.container}>
            <Card style={{borderRadius: 30}}>
            <List.Item
                title={`To ${dest}`}
                description={`From ${start}`}
            />
            <List.Item title={`${toDate}`}/>
            <List.Item title={`${name}`} />
          </Card> 
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 2
    },
    iconSubtitle: {
        fontSize: 11,
        paddingLeft: 6,
        textDecorationLine: 'underline'
    },
    icons: {
        // position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        
    }, 
    plusIcon: {
        position: 'absolute',
        right: 0,

        
    },
    messageIcon: {
        position: 'absolute',
        right: 40,

    }

    
})


export default ProfileRide;