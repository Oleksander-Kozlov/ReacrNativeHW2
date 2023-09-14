import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen.jsx";
import {LogOutButton} from "../components/LogOutButton";
import { BackButton } from "../components/BackButton";

const Home = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      {/* <PostsScreen /> */}
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "ProfileScreen") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "CreatePostsScreen") {
              iconName = focused ? "trash-2" : "plus";
            } else if (route.name === "Публікації") {
              iconName = "grid";
            }

            return (
              <View
                style={
                  route.name === "CreatePostsScreen"
                    ? styles.iconWrapper
                    : styles.iconWrapperHidden
                }
              >
                <Feather
                  name={iconName}
                  size={size}
                  color={route.name === "CreatePostsScreen" ? "white" : color}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 9,
          },
          headerShown: true,
          headerStyle: {
            borderBottomWidth: 1,
          },
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "black",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        })}
        // tabBarOptions={{
        //   activeTintColor: "#FF6C00",
        //   inactiveTintColor: "black",
        // }}
      >
        <Tabs.Screen
          name="Публікації"
          component={PostsScreen}
          options={{
            // tabBarLabel: "",
            headerRight: () => <LogOutButton />,
          }}
        />
        <Tabs.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            title: "Створити публікацію",
            // tabBarLabel: "",
            tabBarStyle: { display: "none" },
            headerLeft: () => <BackButton />,
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "",
            headerRight: () => <LogOutButton />,
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: "#FF6C00",

    width: 70,
    height: 40,
    borderRadius: 20, 
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapperHidden: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
