import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";


export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert("Something went wrong.", err.message);
  }
}

export async function createRide(name, start, dest, date, time) {
  try {
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();


    db.collection("rides")
      .add({
        userId: currentUser.uid,
        name: name,
        start: start,
        dest: dest,
        date: date,
        time: time
      });
  } catch (err) {
   Alert.alert('Something went wrong.', err.message)
 }}

export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("Something went wrong.", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('Something went wrong.', err.message);
  }
}

