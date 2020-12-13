import React from 'react';
import * as firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import { List, Card } from 'react-native-paper';

function Ride({ id, date, dest, name, start}) {
  return (
      <View style={styles.container}>
            <Card>
            <List.Item
                title={`From ${start} to ${dest}`}
                left={props => (
                    <List.Icon {...props} icon='circle-outline' /> 
                )}
            />
            <List.Accordion
                title='Show Details'    
            >
               <List.Item title={`${date}`}
                right={props => (
                    <List.Icon {...props} icon='message-outline' />
                )}
               />
               
            </List.Accordion>
          </Card> 

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 2
    }
})


export default React.memo(Ride);