import React from "react";
import * as firebase from "firebase";
import { View, Text, StyleSheet } from "react-native";
import { List, Card, Button, Avatar } from "react-native-paper";
import * as SMS from "expo-sms";

function ProfileRide({ date, dest, name, start }) {
  const toDate = date.toDate(); // converting from firestore Timestamp to JS Date object

  return (
    <View style={styles.container}>
      <Card style={{ borderRadius: 30 }}>
        <List.Item title={`To ${dest}`} description={`From ${start}`} />
        <List.Item title={`${toDate}`} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
  },
  iconSubtitle: {
    fontSize: 11,
    paddingLeft: 6,
    textDecorationLine: "underline",
  },
  icons: {
    // position: 'absolute',
    flex: 1,
    flexDirection: "row",
  },
  plusIcon: {
    position: "absolute",
    right: 0,
  },
  messageIcon: {
    position: "absolute",
    right: 40,
  },
});

export default ProfileRide;
