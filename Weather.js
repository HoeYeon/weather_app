import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Location } from "./Location";

const weatherIcons = {
  Thunderstorm: {
    icon: "weather-lightning",
    color: ["#2b5876", "#4e4376"],
  },
  Drizzle: {
    icon: "weather-rainy",
    color: ["#314755", "#26a0da"],
  },
  Rain: {
    icon: "weather-pouring",
    color: ["#314755", "#26a0da"],
  },
  Snow: {
    icon: "weather-snowy",
    color: ["#076585", "#fff"],
  },
  Mist: {
    icon: "weather-cloudy",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Smoke: {
    icon: "weather-fog",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Haze: {
    icon: "weather-hazy",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Dust: {
    icon: "weather-fog",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Fog: {
    icon: "weather-fog",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Sand: {
    icon: "weather-fog",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Ash: {
    icon: "weather-fog",
    color: ["#c9d6ff", "#e2e2e2"],
  },
  Squall: {
    icon: "weather-windy",
    color: ["#36d1dc", "#5b86e5"],
  },
  Tornado: {
    icon: "weather-tornado",
    color: ["#283c86", "#45a247"],
  },
  Clear: {
    icon: "weather-sunny",
    color: ["#f2994a", "#f2c94c"],
  },
  Clouds: {
    icon: "weather-cloudy",
    color: ["#c9d6ff", "#e2e2e2"],
  },
};

export default function Weather({ temp, condition, lat, long }) {
  return (
    <LinearGradient
      colors={weatherIcons[condition].color}
      style={styles.container}
    >
      <StatusBar barStyle="white"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherIcons[condition].icon}
          size={80}
          color="white"
        />
        <Text style={styles.celsious}>{temp}℃</Text>
        <Location lat={lat} long={long}></Location>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{condition}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  celsious: {
    fontSize: 26,
    color: "white",
  },

  textContainer: {
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 50,
  },
});
