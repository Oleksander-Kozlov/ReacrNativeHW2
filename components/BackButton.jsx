import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const BackButton = () => {
      const navigator = useNavigation();
      const handleComeBack = () => {
        navigator.goBack();
      };
  return (
    <TouchableOpacity onPress={handleComeBack} style={{ marginLeft: 16 }}>
      <Feather name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );
};

