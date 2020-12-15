import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";


export async function getRideData() {
  try { 
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    const ridesRef = db.collection('rides');
    const queryRef = ridesRef.where('userId', '==', currentUser)
    queryRef.get()
    db.collection("rides")
      .doc()

  } catch (err) {
    Alert.alert("Something went wrong", err.message)
  }
}

export async function registration(email, password, lastName, firstName, phoneNumber) {
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
        phoneNumber: phoneNumber
      });
  } catch (err) {
    Alert.alert("Something went wrong.", err.message);
  }
}

export async function createRide(name, start, dest, date, phoneNumber) {
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
        phoneNumber: phoneNumber,
      });
    db.collection("users").doc(currentUser.uid).collection("currUserRides").add({
      start: start,
      dest: dest,
      date: date
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

