import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";

const _width = 70;

export default function JoinButton(props) {
  return (
    <View style={styles.button}>
      <Button
        title="Join"
        type="clear"
        onPress={() => props.setDataVisibility(!props.dataVisibility)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 70,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 11,
    textAlign: "center",
  },
});
