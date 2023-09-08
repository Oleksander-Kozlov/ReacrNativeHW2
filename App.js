import React from "react";

import { useFonts } from "expo-font"; 

import RegistrationScreen from "./Screens/RegistrationScreen.jsx"
import { ImageBackground, StyleSheet, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen.jsx";
import PostsScreen from "./Screens/PostsScreen.jsx";
// const image = require("./assets/img/BG.jpg");

export default App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ImageBackground
        source={require("./assets/img/BG.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <RegistrationScreen style={styles.regScreen} />
        {/* <LoginScreen/> */}
        {/* <PostsScreen/> */}
      </ImageBackground>
    </>
  );
}

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

