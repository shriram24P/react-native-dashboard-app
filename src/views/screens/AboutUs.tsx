import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import COLORS from "../../const/Colors";
import { useTheme } from "../../customTheme/ThemeContext";

interface AboutUsScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "AboutUs">;
}

const AboutUs = ({ navigation }: AboutUsScreenProp) => {
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  return (
    <View
      style={[
        containerStyle,
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          height: "100%",
        },
      ]}
    >
      <Text style={[textStyle, { fontSize: 40, marginVertical: 20 }]}>
        Rajtantra
      </Text>
      <Text style={[textStyle, { fontSize: 20 }]}>Version 3.0</Text>
      <Image
        source={require("../../../assets/abt.png")}
        style={{ width: 100, height: 100, marginVertical: 20 }}
      />
      <Text style={[textStyle, { opacity: 0.5 }]}>
        ©2023-2024. Adiflex Technologies Pvt.Ltd.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AboutUs;
