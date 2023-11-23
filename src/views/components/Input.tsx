import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

import COLORS from "../../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../customTheme/ThemeContext";

interface InputProps {
  label: string;
  iconName: string;
  placeholder: string;
  error?: string;
  password?: boolean;
  onFocus?(): void;
  onChangeText?(text: string): void;
  value?: string;
  keyboardType: string;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  iconName,
  error,
  password,
  keyboardType,
  secureTextEntry = false,
  onFocus = () => {},
  placeholderTextColor,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          containerStyle,
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.blue,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: COLORS.darkBlue, marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholderTextColor={isDarkMode ? "white" : "black"}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
          style={[textStyle, { flex: 1 }]}
        />
      </View>
      {error && (
        <Text style={{ color: COLORS.red, fontSize: 12, marginTop: 4 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 45,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#14213d",
  },
  text: {
    fontSize: 24,
  },
  lightText: {
    color: "#38385b",
  },
  darkText: {
    color: "white",
  },
});

export default Input;
