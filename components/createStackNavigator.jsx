import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen.jsx";
import RegistrationScreen from "../Screens/RegistrationScreen.jsx";
import Home from "../Screens/Home.jsx";
import { navigationRef } from "../midleware/RootNavigation.js";
import { Button, TouchableOpacity } from "react-native";
import LogOutButton from "./LogOutButton";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator initialRouteName="Home">
        
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ title: null, headerShown: false, headerLeft: false }}
        />
       
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: null, headerShown: false, headerLeft: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: null,            
            headerShown: false
                     
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
