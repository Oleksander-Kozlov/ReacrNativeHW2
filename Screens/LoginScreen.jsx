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
  ImageBackground,
} from "react-native";
import * as RootNavigation from "../midleware/RootNavigation.js";
import { useNavigation } from "@react-navigation/native";

import { Formik } from "formik";
import * as Yup from "yup";
// import ImgBackground from "../components/ImgBackground.jsx";

const LoginSchema = Yup.object().shape({
  
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginScreen = () => {
 
  // const [userMail, setUserMail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [isShowKeybord, setIsShowKeyboard] = useState(false);

  const handleSignInPress = () => {
    // Implement your sign-in navigation logic here
    // For example, you can use React Navigation to navigate to the sign-in screen
    // navigation.navigate("LoginScreen");
     RootNavigation.navigate("RegistrationScreen");
  };
  return (
    <>
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
              paddingBottom: isShowKeybord ? 0 : 42,
            }}
          >
            <Text style={styles.formTitle}>Увійти</Text>
            <Formik
              initialValues={{
                email: "",
                password: "",
                showPassword: false,
              }}
              validationSchema={LoginSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                alert(` Name:${values.email},  Password: ${values.password}`);
                resetForm();
                RootNavigation.navigate("Home");
              }}
            >
              {({
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
                // handleBlur,
                values,
                errors,
                touched,
              }) => (
                <View
                  style={{
                    ...styles.form,
                    marginBottom: isShowKeybord ? -100 : 42,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onBlur={() => {
                      setIsShowKeyboard(false);
                    }}
                  />
                  {errors.email && touched.email ? (
                    <Text>{errors.email}</Text>
                  ) : null}
                  <View>
                    <TextInput
                      style={styles.passwordInput}
                      onChangeText={handleChange("password")}
                      placeholder="Пароль"
                      placeholderTextColor="#BDBDBD"
                      secureTextEntry={!values.showPassword}
                      value={values.password}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                      }}
                      onBlur={() => {
                        setIsShowKeyboard(false);
                      }}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setFieldValue("showPassword", !values.showPassword)
                      }
                      style={styles.toggleButton}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                      }}
                    >
                      <Text style={styles.toggleButtonText}>
                        {values.showPassword ? "Сховати" : "Показати"}
                      </Text>
                    </TouchableOpacity>
                    {errors.password && touched.password ? (
                      <Text>{errors.password}</Text>
                    ) : null}
                  </View>
                  <TouchableOpacity
                    style={styles.regButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.regButtonText}>Увійти</Text>
                  </TouchableOpacity>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Text
                      style={{ ...styles.linkText, textDecorationLine: "none" }}
                    >
                      {" "}
                      Немає акаунту?{" "}
                    </Text>
                    <TouchableOpacity onPress={handleSignInPress}>
                      <Text style={styles.linkText}> Зареєструватися</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
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
    paddingTop: 32,
    paddingBottom: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  registrationText: {
    color: "#1B4371", // Color of the link text
    // flex:3,
    // alignSelf: "center",/
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    alignContent: "center",
  },
  linkText: {
    color: "#1B4371", // Color of the link text
    textDecorationLine: "underline", // Underline the link text
    // alignSelf: "center",
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
export default LoginScreen;
