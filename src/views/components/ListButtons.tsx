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
  iconSize?: number;
  fontsize?: number;
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
  iconSize = 30,
  fontsize = 15,
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
      <Icon
        name={iconName}
        size={iconSize}
        color="white"
        style={{ marginLeft: 5 }}
      />
      <Text style={[styles.buttonText, { fontSize: fontsize }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.46,
    shadowRadius: 8.14,

    elevation: 7,
  },
  buttonText: {
    color: "white",

    textAlign: "center",
    padding: 5,
  },
});
export default ListButtons;
