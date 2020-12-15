import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import MapView from "react-native-maps";
import ShowSearchBars from "../components/ShowSearchBars";
import RideData from "../components/RideData.js";

export default function MapScreen() {
  const [dataVisibility, setDataVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        loadingEnabled={true}
        provider={MapView.PROVIDER_GOOGLE}
        region={{
          // Initial location when phone opens (change to current location)
          latitude: 38.84568,
          longitude: -104.81987,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}
        showUserLocation={true}
        customMapStyle={mapStyleNight}
      />

      <View style={styles.data}>{dataVisibility ? <RideData /> : null}</View>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: Dimensions.get("window").width / 2 - 35,
        }}
      >
        <ShowSearchBars
          dataVisibility={dataVisibility}
          setDataVisibility={setDataVisibility}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  mapStyle: {
    flex: 1,
  },
  data: {
    position: "absolute",
    top: 800,
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});

var mapStyleNight = [
  // JSON for Night map
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];
