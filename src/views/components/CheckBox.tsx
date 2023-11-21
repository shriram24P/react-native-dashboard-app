import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CheckboxProps {
  label: string;
  isCheckedBox: boolean;
  onToggle: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  isCheckedBox,
  onToggle,
}) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "black",
          marginRight: 10,
          backgroundColor: isCheckedBox ? "green" : "white",
        }}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
