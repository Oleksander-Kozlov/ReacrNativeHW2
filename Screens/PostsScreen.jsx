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
} from "react-native";
import SvgLogOut from "../components/SvgLogOut";
const PostsScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "pink",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          flex: 1,
        }}
      >
        <View
          style={
            {
              // backgroundColor: "brown",
              // justifyContent: "space-between",
              // paddingHorizontal: 16,
            }
          }
        >
          <View
            style={{
              backgroundColor: "white",
              position: "relative",
              alignItems: "center",
              paddingHorizontal: 49,
              paddingVertical: 11,
              borderBottomWidth: 1, // Border bottom width
              borderBottomColor: "rgba(0, 0, 0, 0.30)",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 22,
                letterSpacing: -0.41,
                textAlign: "center",
              }}
            >
              Публікації
            </Text>
            <SvgLogOut
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
              }}
            />
          </View>
          <ScrollView style={styles.postsContainer}>
            <Text>Posts</Text>
            <Text>Posts</Text>
            <Text>Posts</Text>
            <Text>Posts</Text>
            <Text>Posts</Text>
          </ScrollView>
        </View>
        <View style={{ backgroundColor: "green" }}>
          <Text>Footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  postsContainer: {
    backgroundColor: '#FFF', // Background color
    shadowColor: 'rgba(0, 0, 0, 0.30)', // Box shadow color
    
    shadowOffset: { width: 0, height: 0.5 }, // Box shadow offset
    shadowOpacity: 1, // Box shadow opacity
    shadowRadius: 0, // Box shadow radius}
  }
})
export default PostsScreen;
