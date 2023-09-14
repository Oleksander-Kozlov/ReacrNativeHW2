import { ImageBackground, Keyboard, TouchableWithoutFeedback, View } from "react-native";


const ImgBackground = () => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/img/BG.jpg")}
          resizeMode="cover"
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "flex-end",
          }}
        >
        
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}; 


export default ImgBackground