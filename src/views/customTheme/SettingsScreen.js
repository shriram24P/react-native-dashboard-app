import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "./ThemeContext";
import COLORS from "../../const/Colors";
import { Switch } from "react-native-switch";

// const OuterImage = () => {
//   return (
//     <View>

//     </View>
//   )
// };

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <View>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        backgroundActive={"black"}
        backgroundInactive={"grey"}
        circleBorderWidth={2}
        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
        switchLeftPx={5}
        switchRightPx={5}
        activeText={"dark"}
        inActiveText={"light"}
        renderInsideCircle={() =>
          isDarkMode == true ? (
            <Image
              source={require("../../../assets/moon.png")}
              style={{ width: 27, height: 27 }}
            />
          ) : (
            <Image
              source={require("../../../assets/sun.png")}
              style={{ width: 27, height: 27 }}
            />
          )
        }
      />
    </View>
  );
};

export default SettingsScreen;
