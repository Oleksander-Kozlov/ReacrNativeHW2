import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import SvgLogOut from "../components/SvgLogOut";
import SvgToolbarGrid from "../components/SvgToolbarGrid";
import SvgToolbarUser from "../components/SvgToolbarUser";
import SvgBtnAddPlus from "../components/SvgBtnAddPlus";
const PostsScreen = () => {
  return (
    <SafeAreaView
      style={styles.safeAreaView}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.userListContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Публікації</Text>
            <SvgLogOut style={styles.svgLogOut} />
          </View>
          {/* <View Style={styles.postsContainer}> */}
          <View style={styles.singlePostContainer}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/img/BG.jpg")}
              resizeMode="cover"
            ></Image>
            <View style={styles.infoUserBlock}>
              <Text>Natali Romanova</Text>
              <Text>email@example.com</Text>
            </View>
          </View>
          <View style={styles.singlePostContainer}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/img/edvard.png")}
              resizeMode="cover"
            ></Image>
            <View style={styles.infoUserBlock}>
              <Text>Edvard Hill</Text>
              <Text>Edvard@Edvard.com</Text>
            </View>
          </View>
          <View style={styles.singlePostContainer}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/img/Letov1.png")}
              resizeMode="cover"
            ></Image>
            <View style={styles.infoUserBlock}>
              <Text style={styles.userName}>Egor Letov</Text>
              <Text style={styles.userMail}>Letov@Letov.com</Text>
            </View>
          </View>
          {/* <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/BG.jpg")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Natali Romanova</Text>
                <Text>email@example.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/edvard.png")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Edvard Hill</Text>
                <Text>Edvard@Edvard.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/Letov1.png")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Egor Letov</Text>
                <Text>Letov@Letov.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/BG.jpg")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Natali Romanova</Text>
                <Text>email@example.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/edvard.png")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Edvard Hill</Text>
                <Text>Edvard@Edvard.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/Letov1.png")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Egor Letov</Text>
                <Text>Letov@Letov.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/BG.jpg")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Natali Romanova</Text>
                <Text>email@example.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/edvard.png")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Edvard Hill</Text>
                <Text>Edvard@Edvard.com</Text>
              </View>
            </View>
            <View style={styles.singlePostContainer}>
              <Image
                style={styles.avatarImage}
                source={require("../assets/img/Letov1.png")}
                resizeMode="cover"
              ></Image>
              <View style={styles.infoUserBlock}>
                <Text>Egor Letov</Text>
                <Text>Letov@Letov.com</Text>
              </View>
            </View> */}
          {/* </View> */}
        </View>
        <View style={styles.footer}>
          <SvgToolbarGrid />

          <TouchableOpacity
            onPress={() => {
              alert("ADD SOME");
            }}
          >
            <SvgBtnAddPlus />
          </TouchableOpacity>
          <SvgToolbarUser />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView:{
        backgroundColor: "white",
        flex: 1,
      },
  scrollViewContent: {
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    flex: 1,
  },
  userListContainer: {
    backgroundColor: "white",

    flex: 1,

    // // justifyContent: "space-between",
    // paddingHorizontal: 16,
  },

  headerContainer: {
    backgroundColor: "white",
    position: "relative",
    alignItems: "center",
    paddingHorizontal: 49,
    paddingVertical: 11,
    borderBottomWidth: 1, // Border bottom width
    borderBottomColor: "rgba(0, 0, 0, 0.30)",
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: "center",
  },
  svgLogOut: {
    position: "absolute",
    top: "50%",
    right: 0,
  },
  postsContainer: {
    backgroundColor: "white", // Background color
    paddingTop: 32,
  },
  singlePostContainer: { flexDirection: "row", marginBottom: 8 },
  avatarImage: {
    width: 60,
    height: 60,
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
    paddingBottom:22,
    borderTopWidth: 1, // Border bottom width
    borderTopColor: "rgba(0, 0, 0, 0.30)",
  },
  
});
export default PostsScreen;
