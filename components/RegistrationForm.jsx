// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   KeyboardAvoidingView,
//   TextInput,
//   TouchableOpacity,
//   Button,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
// import Svg, { Image as SvgImage, Circle, Rect } from "react-native-svg";
// import SvgAdd from "../components/SvgAdd";
// import { Formik } from "formik";

// const RegistationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   password: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

//  const handleLogin = () => {
//    Alert.alert("Route to LogIn page");
// };
 
// const RegistrationForm = () => {
//       const [userName, setUserName] = useState("");
//       const [userMail, setUserMail] = useState("");
//       const [password, setPassword] = useState("");
//        const [showPassword, setShowPassword] = useState(false);
//       const [isShowKeybord, setIsShowKeybord] = useState(false);

//     const svg = require("../assets/svg/add.svg");
//     const handleSignInPress = () => {
//       // Implement your sign-in navigation logic here
//       // For example, you can use React Navigation to navigate to the sign-in screen
//       navigation.navigate("SignIn");
//   };
  
//   const initValues = {
//     name: "",
//     password: "",
//     email: "",
//   };
//      return (
//        <KeyboardAvoidingView
//          behavior={Platform.OS === "ios" ? "padding" : "height"}
//        >
//          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//            <Formik
//              initialValues={initValues}
//              validationSchema={RegistationSchema}
//              onSubmit={
//                (values) => console.log(values)
//                //  Alert.alert(
//                //       "Credentials",
//                //       Name:${values.name}, User email: ${values.email}, Password: ${values.password}
//                //  )
//              }
//            >
//              {({
//                handleChange,
//                handleSubmit,
//                // handleBlur,
//                values,
//                errors,
//                touched,
//              }) => (
//                <View style={styles.container}>
//                  <TextInput
//                    style={styles.input}
//                    placeholder="Логiн"
//                    value={values.name}
//                    onChangeText={handleChange("name")}
//                    onBlur={() => {
//                      setIsShowKeyboard(false);
//                    }}
//                    onFocus={() => {
//                      setIsShowKeyboard(true);
//                    }}
//                  />
//                  {errors.name && touched.name ? (
//                    <Text>{errors.name}</Text>
//                  ) : null}
//                  <TextInput
//                    style={styles.input}
//                    placeholder="Адреса електронної пошти"
//                    onChangeText={handleChange("email")}
//                    value={values.email}
//                    onFocus={() => {
//                      setIsShowKeyboard(true);
//                    }}
//                    onBlur={() => {
//                      setIsShowKeyboard(false);
//                    }}
//                  />
//                  {errors.email && touched.email ? (
//                    <Text>{errors.email}</Text>
//                  ) : null}
//                  <View style={styles.passwordInputContainer}>
//                    <TextInput
//                      style={styles.passwordInput}
//                      placeholder="Пароль"
//                      onChangeText={handleChange("password")}
//                      secureTextEntry={!showPassword}
//                      value={values.password}
//                      onFocus={() => {
//                        setIsShowKeyboard(true);
//                      }}
//                      onBlur={() => {
//                        setIsShowKeyboard(false);
//                      }}
//                    />

//                    <TouchableOpacity
//                      onPress={() => setShowPassword(!showPassword)}
//                      style={styles.toggleButton}
//                    >
//                      <Text style={styles.toggleButtonText}>
//                        {showPassword ? "Сховати" : "Показати"}
//                      </Text>
//                    </TouchableOpacity>
//                    {errors.password && touched.password ? (
//                      <Text>{errors.password}</Text>
//                    ) : null}
//                  </View>
//                  <TouchableOpacity style={styles.regButton}>
//                    <Text style={styles.regButtonText}>Зареєстуватися</Text>
//                  </TouchableOpacity>
//                  <TouchableOpacity onPress={handleSignInPress}>
//                    <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
//                  </TouchableOpacity>
//                </View>
//              )}
//            </Formik>
//          </TouchableWithoutFeedback>
//        </KeyboardAvoidingView>
//      );
// };
// const styles = StyleSheet.create({
//   container: {
//     //   flex:1,
//     // flexDirection: "column",
//     alignItems: "center",
//     padding: 24,
//     justifyContent: "center",
//     textAlign: "center",
//     backgroundColor: "#ffffff",
//         paddingHorizontal: 16,
    
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     backgroundColor: "#rgba(246, 246, 246, 1)",
//     position: "relative",
//     alignSelf: "center",
//     borderRadius: 16,
//     marginBottom: 32,
//   },
//   svgAdd: {
//     position: "absolute",
//     bottom: 14,
//     right: -12.5,
//   },
//   registrationTitle: {
//     marginBottom: 32,
//     fontFamily: "Roboto",
//     fontSize: 30,
//     fontWeight: "500",
//     lineHeight: 35,
//     letterSpacing: 0.01,
//     textAlign: "center",
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     color: "#212121",
//     fontFamily: "Roboto",
//     fontSize: 30,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "white",
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#e8e8e8",
//     padding: 16,
//     textAlignVertical: "center",
//     marginVertical: 20,
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   passwordInputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   passwordInput: {
//     flex: 1,
//     width: "100%",
//     height: 50,
//     backgroundColor: "#e8e8e8",
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   toggleButton: {
//     padding: 10,
//   },
//   toggleButtonText: {
//     color: "#1B4371",
//   },
//   regContainer: {
//     backgroundColor: "pink",
//   },
  
// });
// export default RegistrationForm;
