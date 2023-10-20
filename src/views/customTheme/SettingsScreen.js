import React from "react";
import { View, Text, Switch } from "react-native";
import { useTheme } from "./ThemeContext";

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <View>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

export default SettingsScreen;
