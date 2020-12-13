import React from 'react';
import * as firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import { List, Card } from 'react-native-paper';

function messageUser() {

}

function Ride({ id, date, dest, name, start, time }) {
    async function toggleComplete() {
        await firestore()
          .collection('rides')
          .doc(id)
          .update({
            time: time
          });
      }
  return (
      <View style={styles.container}>
            <Card>
            <List.Item
                title={`${start} to ${dest}`}
                description={`on ${date} at ${time}`}
                
                right={props => (
                    <List.Icon {...props} icon='message'/> 
                )}
            />

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