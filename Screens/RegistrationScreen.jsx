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
  Alert,
  ImageBackground,
} from "react-native";
import * as RootNavigation from "../midleware/RootNavigation.js";
import { useNavigation } from "@react-navigation/native";
import SvgAdd from "../components/SvgAdd";
import { Formik } from "formik";
import * as Yup from "yup";


const RegistationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const handleLogin = () => {
  Alert.alert("Route to LogIn page");
};

const RegistrationScreen = () => {
  // const [userName, setUserName] = useState("");
  // const [userMail, setUserMail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();
  const svg = require("../assets/svg/add.svg");
  const handleSignInPress = ({resetForm}) => {
    navigation.navigate("Home");
    // Implement your sign-in navigation logic here
    // For example, you can use React Navigation to navigate to the sign-in screen
    // navigation.navigate("LoginScreen");
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
              paddingBottom: isShowKeyboard ? 0 : 42,
            }}
          >
            <View style={styles.avatar}>
              <SvgAdd style={styles.svgAdd}></SvgAdd>
            </View>
            <Text style={styles.formTitle}>Реєстрація</Text>
            <Formik
              initialValues={{
                name: "",
                password: "",
                email: "",
                showPassword: false,
              }}
              validationSchema={RegistationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                // alert(
                //   ` Name:${values.name}, User email: ${values.email}, Password: ${values.password}`
                // );
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
                    marginBottom: isShowKeyboard ? -100 : 42,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Логiн"
                    placeholderTextColor="#BDBDBD"
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onBlur={() => {
                      setIsShowKeyboard(false);
                    }}
                  />
                  {errors.name && touched.name ? (
                    <Text>{errors.name}</Text>
                  ) : null}
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
                    <Text style={styles.regButtonText}>Зареєстуватися</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <TouchableOpacity
              onPress={
                () => RootNavigation.navigate("LoginScreen")
                // handleSignInPress
              }
            >
              <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
            {/* </View> */}
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});

export default RegistrationScreen;
