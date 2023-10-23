import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../customTheme/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const FooterMenu = () => {
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <View style={[containerStyle, styles.container]}>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <FontAwesome5 name="home" style={[textStyle, styles.iconStyle]} />
        <Text style={textStyle}>{t("home")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <MaterialIcons name="login" style={[textStyle, styles.iconStyle]} />
        <Text style={textStyle}>{t("login")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <FontAwesome5
          name="sign-in-alt"
          style={[textStyle, styles.iconStyle]}
        />
        <Text style={textStyle}>{t("signup")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
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
});

export default FooterMenu;
