import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../const/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

interface ListButtonsProps {
  iconName: string;
  buttonText: string;
  onPress: () => void;
  buttonWidth?: number;
  buttonHeight?: number;
  bgColor?: any;
}

const ListButtons: React.FC<ListButtonsProps> = ({
  iconName,
  buttonText,
  onPress,
  buttonHeight = 200,
  buttonWidth = 150,
  bgColor = COLORS.darkBlue,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: buttonWidth, height: buttonHeight, backgroundColor: bgColor },
      ]}
      onPress={onPress}
    >
      <Icon
        name={iconName}
        size={30}
        color="white"
        style={{ marginRight: 10 }}
      />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 200,
    marginLeft: 30,
    width: 130,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
export default ListButtons;
