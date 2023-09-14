import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { navigationRef } from "./midleware/RootNavigation.js";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import { ImageBackground, StyleSheet, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen.jsx";
import PostsScreen from "./Screens/PostsScreen.jsx";
import Home from "./Screens/Home.jsx";
import CreateStackNavigator from "./components/createStackNavigator.jsx";
// const image = require("./assets/img/BG.jpg");

export default App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <CreateStackNavigator></CreateStackNavigator>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#eaeaea",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  regScreen: {
    justifyContent: "flex-end",
    // flex: 1,
  },
});
