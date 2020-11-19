import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>now is {temp}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
