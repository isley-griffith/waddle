import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registration } from "../API/firebaseMethods";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else if (!phoneNumber) {
      Alert.alert("Phone number field is required.");
    } else {
      registration(email, password, lastName, firstName, phoneNumber);
      navigation.navigate("Loading");
      emptyState();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account </Text>

        {/* onBlur={Keyboard.dismiss} */}
        <ScrollView keyboardShouldPersistTaps="always">
          <TextInput
            style={styles.textInput}
            returnKeyType="next"
            placeholder="Phone number i.e. 1115551111"
            value={phoneNumber}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.firstTextInput.focus();
            }}
          />
          <TextInput
            ref={(input) => {
              this.firstTextInput = input;
            }}
            style={styles.textInput}
            returnKeyType="next"
            placeholder="First name*"
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
          <TextInput
            ref={(input) => {
              this.secondTextInput = input;
            }}
            style={styles.textInput}
            placeholder="Last name"
            returnKeyType="next"
            value={lastName}
            onChangeText={(name) => setLastName(name)}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.emailInput.focus();
            }}
          />

          <TextInput
            ref={(input) => {
              this.emailInput = input;
            }}
            style={styles.textInput}
            placeholder="Enter your email*"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
          />

          <TextInput
            ref={(input) => {
              this.passwordInput = input;
            }}
            style={styles.textInput}
            placeholder="Enter your password*"
            returnKeyType="next"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.confirmPassword.focus();
            }}
          />
          <TextInput
            ref={(input) => {
              this.confirmPassword = input;
            }}
            style={styles.textInput}
            placeholder="Retype your password to confirm*"
            returnKeyType="done"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
            blurOnSubmit={true}
            onBlur={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Sign In")}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: "#172235",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "5%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  inlineText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    textAlign: "center",
    marginTop: "5%",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    margin: "5%",
    marginTop: "15%",
    fontWeight: "bold",
    color: "grey",
  },
  textInput: {
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#a4eddf",
    padding: 10,
    margin: 5,
  },
});
