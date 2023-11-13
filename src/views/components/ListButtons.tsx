import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ListButtonsProps {
  iconName: string;
  buttonText: string;
  onPress: () => void;
  buttonWidth?: number;
  buttonHeight?: number;
  bgColor?: any;
  borderRadi?: number;
  marginH?: number;
}

const ListButtons: React.FC<ListButtonsProps> = ({
  iconName,
  buttonText,
  onPress,
  buttonHeight = 200,
  buttonWidth = 150,
  bgColor = COLORS.darkBlue,
  borderRadi,
  marginH,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: buttonWidth,
          height: buttonHeight,
          backgroundColor: bgColor,
          borderRadius: borderRadi,
          marginHorizontal: marginH,
        },
      ]}
      onPress={onPress}
    >
      <Icon name={iconName} size={30} color="white" />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});
export default ListButtons;
