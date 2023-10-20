import { View, Text } from "react-native";
import React from "react";
import COLORS from "../../const/Colors";

import { StyleSheet } from "react-native";
import { useTheme } from "../customTheme/ThemeContext";
import SettingsScreen from "../customTheme/SettingsScreen";

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  return (
    <>
      <View style={[containerStyle, styles.container]}>
        <View style={styles.darkBtn}>
          <SettingsScreen />
        </View>
        <View
          style={[
            containerStyle,
            styles.container,
            { display: "flex", alignItems: "center", marginVertical: "60%" },
          ]}
        >
          <Text
            style={[
              textStyle,
              styles.text,
              { fontSize: 30, fontWeight: "bold", marginBottom: 10 },
            ]}
          >
            Welcome !
          </Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              fontSize: 18,
              color: COLORS.darkBlue,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Login
          </Text>
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{
              fontSize: 18,
              color: COLORS.darkBlue,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Signup
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#192734",
  },
  text: {
    fontSize: 24,
  },
  lightText: {
    color: "#192734",
  },
  darkText: {
    color: "white",
  },
  footer: {
    margin: 10,
  },
  darkBtn: {
    marginTop: 30,
  },
});

export default HomeScreen;
