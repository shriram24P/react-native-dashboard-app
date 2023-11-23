import React from "react";
import { View, Image } from "react-native";
import { useTheme } from "./ThemeContext";

import { Switch } from "react-native-switch";

const SettingsScreen: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <View>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        backgroundActive={"white"}
        backgroundInactive={"white"}
        innerCircleStyle={{
          alignItems: "center",
          justifyContent: "center",
          elevation: 3,
        }}
        switchLeftPx={2.5}
        switchRightPx={2.5}
        activeText={""}
        inActiveText={""}
        circleSize={22}
        barHeight={28}
        switchWidthMultiplier={2.4}
        circleBorderWidth={1}
        circleActiveColor={"black"}
        circleInActiveColor={"white"}
      />
    </View>
  );
};

export default SettingsScreen;
