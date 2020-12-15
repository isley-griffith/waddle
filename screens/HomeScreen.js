import React, { setState, useState, Component, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

import Ride from "../components/Ride.js";
const _font = "San Francisco";
const _fontSize = 32;

export default function HomeScreen() {
  const Stack = createStackNavigator();
  const [date, setDate] = useState("");
  const [dest, setDest] = useState("");
  const [firstName, setFirstName] = useState("");
  const [start, setStart] = useState("");
  const [time, setTime] = useState("");
  const [userId, setUserId] = useState("");
  const [rides, setRides] = useState([]);

  let currentUserUID = firebase.auth().currentUser.uid;
  const ref = firebase.firestore().collection("rides");
  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      let list = [];
      querySnapshot.forEach((doc) => {
        let { date, dest, name, start, phoneNumber } = doc.data();
        list.push({
          id: doc.id,
          date, // must turn into Date -- currently Timestamp object
          dest,
          name,
          start,
          phoneNumber,
        });
      });
      setRides(list);
    });
  }, []);

  return (
    // <ScrollView style={styles.container}>
    <>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <View style={styles.headerText}>
        <Text style={styles.headerTitle}> Rides</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={rides}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Ride {...item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    fontSize: 30,
    // alignItems: "center",
    // justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D64",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "500",
  },

  categoryText: {
    fontFamily: _font.loadAsync,
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    fontFamily: _font.loadAsync,
    fontSize: 15,
    textAlign: "center",
  },
  divider: {
    height: 12,
  },
});
