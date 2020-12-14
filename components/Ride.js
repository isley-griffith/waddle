import React from 'react';
import * as firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import { List, Card, Button } from 'react-native-paper';
import * as SMS from 'expo-sms';

function Ride({ id, date, dest, name, start, phoneNumber }) {
    const toDate = date.toDate(); // converting from firestore Timestamp to JS Date object
    
    onPress = async() => {
        const isAvailable = await SMS.isAvailableAsync();
        console.log(phoneNumber);
        if (isAvailable) {
            const status = await SMS.sendSMSAsync(
                `${phoneNumber}`,
                `Hey, ${name}! I would like to join your trip on Rideshare. 
                Could you tell me more about your trip to ${dest}?`
            )
        } else {
            Alert.alert("Sorry this number is currently unavailable.");
        }
        // console.log(phoneNumber)
    }
     return (
        <View style={styles.container}>
            <Card>
            <List.Item
                title={`To ${dest}`}
                description={`From ${start}`}
                left={props => (
                    <List.Icon {...props} icon='circle-outline' /> 
                )}
            />
            <List.Accordion
                title='Show Details'    
            >
               <List.Item title={`${toDate}`}/>
               <List.Item title={`Driver: ${name}`} />
               <List.Item right={props => (
                   <View style={styles.icons}>
                        <View style={styles.plusIcon}>
                            <Button style={{width: 20, height: 20}} icon="plus"/>

                        </View>

                        <View style={styles.messageIcon}>
                            <Button style={{width: 20, height: 20}} icon="message-outline" onPress={onPress}/>

                        </View>
                   </View>
                )}/>
            </List.Accordion>
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


export default React.memo(Ride);