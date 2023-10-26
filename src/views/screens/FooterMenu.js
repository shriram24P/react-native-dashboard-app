import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import COLORS from "../../const/Colors";

const FooterMenu = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <FontAwesome5 name="home" style={styles.iconStyle} />
        <Text style={{ color: "white" }}>{t("home")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <MaterialIcons name="login" style={styles.iconStyle} />
        <Text style={{ color: "white" }}>{t("login")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <FontAwesome5 name="sign-in-alt" style={styles.iconStyle} />
        <Text style={{ color: "white" }}>{t("signup")}</Text>
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
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: COLORS.darkBlue,
    borderRadius: 15,
    height: 80,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
    color: "white",
  },
});

export default FooterMenu;
