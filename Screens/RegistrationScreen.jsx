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
} from "react-native";

import SvgAdd from "../components/SvgAdd";

const RegistrationScreen = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  const svg = require("../assets/svg/add.svg");
  const handleSignInPress = () => {
    // Implement your sign-in navigation logic here
    // For example, you can use React Navigation to navigate to the sign-in screen
    // navigation.navigate("LoginScreen");
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...styles.container,
              paddingBottom: isShowKeybord ? 0 : 42,
            }}
          >
            <View style={styles.avatar}>
              <SvgAdd style={styles.svgAdd}></SvgAdd>
            </View>
            <Text style={styles.formTitle}>Реєстрація</Text>

            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeybord ? -100 : 42,
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Логiн"
                placeholderTextColor="#BDBDBD"
                value={userName}
                onChangeText={setUserName}
                onFocus={() => {
                  setIsShowKeybord(true);
                }}
                onBlur={() => {
                  setIsShowKeybord(false);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                value={userMail}
                onChangeText={setUserMail}
                onFocus={() => {
                  setIsShowKeybord(true);
                }}
                onBlur={() => {
                  setIsShowKeybord(false);
                }}
              />
              <View>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => {
                    setIsShowKeybord(true);
                  }}
                  onBlur={() => {
                    setIsShowKeybord(false);
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.toggleButton}
                  onFocus={() => {
                    setIsShowKeybord(true);
                  }}
                >
                  <Text style={styles.toggleButtonText}>
                    {showPassword ? "Сховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.regButton}>
                <Text style={styles.regButtonText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSignInPress}>
                <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
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
    right: -12.5,
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
  form: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 16,
    textAlignVertical: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    backgroundColor: "#F6F6F6",
  },

  passwordInput: {
    position: "relative",
    justifyContent: "center",

    width: "100%",
    height: 50,
    marginBottom: 43,
    padding: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",

    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
  },

  toggleButton: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 16,
  },

  toggleButtonText: {
    justifyContent: "center",
    color: "#1B4371",
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
});

export default RegistrationScreen;
