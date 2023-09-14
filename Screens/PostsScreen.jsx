import React from "react";
import {
  StyleSheet,
  Text,
  View,
  
Dimensions, 
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as RootNavigation from "../midleware/RootNavigation.js";


const PostsScreen = () => {
  const logOut = () => {
    RootNavigation.navigate("LoginScreen");
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.userListContainer}>
          <View style={styles.singlePostContainer}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/img/userAvatar.png")}
              resizeMode="cover"
            ></Image>
            <View style={styles.infoUserBlock}>
              <Text>Natali Romanova</Text>
              <Text>email@example.com</Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 34 }}>
          <Image
            style={styles.PostPicture}
            source={require("../assets/img/photoForPost.png")}
            resizeMode="stretch"
          ></Image>
          <Text>Ліс</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              aliginItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "center",
                aliginItems: "center",
              }}
            >
              <Feather name="message-circle" size={18} color="#BDBDBD" />
              <Text>0</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "center",
                aliginItems: "center",
              }}
            >
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <Text>Ivano-Frankivs'k Region, Ukraine</Text>
            </View>
          </View>
        </View>
        <View style={styles.container1}>
          <MapView
            style={styles.mapStyle}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            mapType="standard"
            minZoomLevel={15}
            // onMapReady={() => console.log("Map is ready")}
            // onRegionChange={() => console.log("Region change")}
          >
            <Marker
              title="I am here"
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              description="Hello"
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  scrollViewContent: {
    backgroundColor: "white",
    // justifyContent: "space-between",
    paddingHorizontal: 16,
    // flex: 1,
  },
  userListContainer: {
    backgroundColor: "white",
    flex: 1,
  },

  postsContainer: {
    backgroundColor: "white",
    paddingTop: 32,
  },
  singlePostContainer: { flexDirection: "row", marginBottom: 8 },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  infoUserBlock: {
    justifyContent: "center",
    marginLeft: 8,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 20,
  },
  userMail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 20,
  },

  footer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 9,
    paddingBottom: 22,
    borderTopWidth: 1, // Border bottom width
    borderTopColor: "rgba(0, 0, 0, 0.30)",
  },
  PostPicture: {
    width: 343,
    height: 240,
  },
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    // width: Dimensions.get("window").width,
    width: 343,
    // height: Dimensions.get("window").height,
    height: 240
  },
});
export default PostsScreen;
