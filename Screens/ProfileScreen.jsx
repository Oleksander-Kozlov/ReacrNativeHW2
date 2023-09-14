import { View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from "react-native";
import SvgXclose from "../components/SvgXclose";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground
        source={require("../assets/img/BG.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...styles.container,
              paddingBottom: 42,
            }}
          >
            <View style={styles.avatar}>
              <Image
                source={require("../assets/img/bigUserAvatar.png")}
                resizeMode="stretch"
                // style={styles.image}
              ></Image>
              <SvgXclose style={styles.svgAdd}></SvgXclose>
            </View>
            <Text style={styles.formTitle}>Natali Romanova</Text>
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
                  <Feather
                    name="message-circle"
                    size={18}
                    color="#FF6C00"
                    stroke="#FF6C00"
                  />
                  <Text>8</Text>
                  <Feather name="thumbs-up" size={18} color="#FF6C00" />
                  <Text>153</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    aliginItems: "center",
                  }}
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.textLocation}>Ukraine</Text>
                </View>
              </View>
            </View>
            <View style={{ marginBottom: 34 }}>
              <Image
                style={styles.PostPicture}
                source={require("../assets/img/sunset.png")}
                resizeMode="stretch"
              ></Image>
              <Text>Захід на Чорному морі</Text>
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
                  <Feather
                    name="message-circle"
                    size={18}
                    color="#FF6C00"
                    stroke="#FF6C00"
                  />
                  <Text>8</Text>
                  <Feather name="thumbs-up" size={18} color="#FF6C00" />
                  <Text>153</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    aliginItems: "center",
                  }}
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.textLocation}>Ukraine</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 42,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal:16,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#rgba(246, 246, 246, 1)",
    position: "absolute",
    top: -60,
    alignSelf: "center",
    borderRadius: 16,
    marginBottom: -66,
    zIndex: 1000,
  },
  svgAdd: {
    position: "absolute",
    bottom: 14,
    right: -19,
  },

  formTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white",
  },
  

  regButton: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",

    padding: 10,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },

  regButtonText: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    alignContent: "center",
    color: "white",
  },
  textLocation:{
color: "#212121",
textAlign: "right",
fontFamily: "Roboto",
fontSize: 16,
fontStyle: "normal",
fontWeight: 400,
lineHeight:18.75,
textDecorationLine: "underline",
  },

  linkText: {
    color: "#1B4371", // Color of the link text
    textDecorationLine: "none", // Underline the link text
    alignSelf: "center",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    alignContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
export default ProfileScreen;
