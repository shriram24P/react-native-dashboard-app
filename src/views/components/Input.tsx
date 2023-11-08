import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

import COLORS from "../../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
}

const Input: React.FC<InputProps> = ({
  label,
  iconName,
  error,
  password,
  keyboardType,
  secureTextEntry = false,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
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
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
          style={{ color: COLORS.darkBlue, flex: 1 }}
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

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
  },
});

export default Input;
