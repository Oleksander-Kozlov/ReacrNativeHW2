import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
const CreatePostsScreen = () => {
  //  const [isButtonDisabled, SetIsButtonDisabled] = useState(true);
  const handlePostPress = () => {
    //    SetIsButtonDisabled (false)
    Alert.alert("you touch disabled btn");
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
      // contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.loadPhoto}>
          <View
            style={{
              backgroundColor: "white",
              padding: 18,
              borderRadius: "50%",
              width: 60,
              height: 60,
              alignSelf: "center",
            }}
          >
            <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
          </View>
        </View>
        <View style={styles.uploadPhotoBox}>
          <Text style={styles.text}>Завантажте фото</Text>
        </View>
        <View>
          <View style={styles.uploadPhotoBox}>
            <TextInput style={styles.text}>Назва...</TextInput>
          </View>
        </View>
        <View>
          <View style={styles.uploadPhotoBox}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              paddingHorizontal={4}
            />
            <Text style={styles.text}>Місцевість...</Text>
          </View>
        </View>

        <View style={styles.container1}>
          
          <TouchableOpacity
            disabled
            style={styles.regButton}
            onPress={handlePostPress}
          >
            <Text style={styles.regButtonText}>Опубліковати</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled
            style={styles.trashButton}
            // onPress={handlePostPress}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
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
    // paddingVertical: 32,
  },
  loadPhoto: {
    backgroundColor: "#F6F6F6",
    border: "1 solid #E8E8E8",
    width: 343,
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    //   marginHorizontal:16,

    alignSelf: "center",
    justifyContent: "center",
  },
  uploadPhotoBox: {
    marginBottom: 32,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
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
    height: 240,
  },
  regButton: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    width: "100%",

    padding: 10,
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },

  regButtonText: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    alignContent: "center",
    color: "#BDBDBD",
  },
  trashButton: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    alignContent: "center",
    backgroundColor: "#F6F6F6",
  

      width: 70,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18.75,
  },
});
export default CreatePostsScreen;
