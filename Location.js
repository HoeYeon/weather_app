import Axios from "axios";
import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";
import axios from "axios";
import { userName } from "./apikey";

export class Location extends React.Component {
  state = {
    location: null,
    isLoading: true,
  };
  getCountryName = async (lat, long) => {
    console.log(lat, long, userName);
    try {
      const {
        data: { countryName },
      } = await axios.get(
        `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=${userName}`
      );
      console.log(countryName);
      this.setState({ isLoading: false, location: countryName });
    } catch (error) {
      Alert.alert("error");
    }
  };
  componentDidMount() {
    this.getCountryName(this.props.lat, this.props.long);
  }
  render() {
    const { isLoading } = this.state;
    const styles = StyleSheet.create({
      location: {
        fontSize: 22,
        color: "white",
      },
    });
    return (
      <View>
        {isLoading ? (
          <Text style={styles.location}>Checking where you are... </Text>
        ) : (
          <Text style={styles.location}>
            Now you are in {this.state.location}
          </Text>
        )}
      </View>
    );
  }
}
