import React from "react";
import Loading from "./Loading";
import { Alert, View, Text, BackHandler, ToastAndroid } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { APIkey } from "./apikey";
import Weather from "./Weather";

export default class extends React.Component {
  state = {
    isLoading: true,
    isExit: false,
  };
  backAction = () => {
    if (!this.state.isExit) {
      this.setState({ isExit: true });
      ToastAndroid.show("Back click for exit", 2000);
    } else if (this.state.isExit) {
      BackHandler.exitApp();
    }
    setTimeout(() => {
      this.setState({ isExit: false });
    }, 2000);

    // BackHandler.exitApp()
    return true;
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`
    );
    this.setState({ isLoading: false, temp: temp, condition: weather[0].main });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find ypu");
    }
  };
  componentDidMount() {
    this.getLocation();
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition}></Weather>
    );
  }
}
