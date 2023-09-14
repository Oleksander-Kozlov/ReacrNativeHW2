import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const LogOutButton = () => {
  const navigation = useNavigation();
  const handleLogOut = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <TouchableOpacity onPress={handleLogOut} style={{ marginRight: 16 }}>
      <Feather name="log-out" size={24} color="black" />
    </TouchableOpacity>
  );
};
