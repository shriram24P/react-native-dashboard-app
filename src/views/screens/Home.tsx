import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import * as Animatable from "react-native-animatable";
import { initReactI18next, useTranslation } from "react-i18next";
import i18next from "i18next";
import { languageResources } from "../../../services/i18next";
import COLORS from "./../../const/Colors";

interface HomeScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Home">;
}

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "eng",
  resources: languageResources,
});

const languages = Object.keys(languageResources);

const Home = ({ navigation }: HomeScreenProp) => {
  const { t } = useTranslation();
  const changeLng = () => {
    const handleLanguage = i18next.language === "en" ? "ma" : "en";
    i18next.changeLanguage(handleLanguage);
  };

  return (
    <>
      <View style={{ marginTop: 10, padding: 10, width: 150 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={(): void => changeLng()} // Add a type annotation here
        >
          <Text style={styles.buttonText}>{t("lng")}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            marginBottom: 30,
            fontWeight: "900",
          }}
        >
          {t("welcome")}
        </Text>
        <Animatable.Text
          animation="pulse"
          easing="ease-out-sine"
          iterationCount="infinite"
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "#A51C30",
            fontWeight: "800",
          }}
          onPress={() => navigation.navigate("Register")}
        >
          {t("tapRegi")}
        </Animatable.Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.darkBlue,
    padding: 5,
    borderRadius: 3,
    marginLeft: 20,
    width: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 7,
  },
});

export default Home;
