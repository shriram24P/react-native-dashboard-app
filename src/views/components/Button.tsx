import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import COLORS from "../../const/Colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 55,
        width: "100%",
        backgroundColor: COLORS.darkBlue,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
