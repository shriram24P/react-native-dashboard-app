import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import React, { useState } from "react";
import COLORS from "../../const/Colors";
import { StyleSheet } from "react-native";
import { useTheme } from "../customTheme/ThemeContext";
import SettingsScreen from "../customTheme/SettingsScreen";
import { useTranslation } from "react-i18next";
import i18next, { languageResources } from "../../../services/i18next";
import allLang from "../../../services/allLang.json";

const Dashboard = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  const { t } = useTranslation();

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  return (
    <>
      <View style={[containerStyle, styles.container]}>
        <View style={styles.darkBtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.buttonText}>{t("change-language")}</Text>
          </TouchableOpacity>
          <SettingsScreen />
        </View>
        <View
          style={[
            containerStyle,
            styles.container,
            { display: "flex", alignItems: "center", marginVertical: "60%" },
          ]}
        >
          <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={styles.languageList}>
              <FlatList
                data={Object.keys(languageResources)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => changeLng(item)}
                  >
                    <Text style={styles.lngName}>
                      {allLang[item].nativeName}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Modal>
          <Text
            style={[
              textStyle,
              styles.text,
              { fontSize: 30, fontWeight: "bold", marginBottom: 10 },
            ]}
          >
            {t("welcome")}
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
            {t("login")}
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
            {t("signup")}
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    backgroundColor: COLORS.darkBlue,
    padding: 10,
    borderRadius: 3,
    marginLeft: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  languageList: {
    height: "50%",
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLORS.darkBlue,
    margin: 20,
    marginTop: "50%",
    borderRadius: 10,
  },
  languageButton: {
    padding: 10,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: "white",
  },
});

export default Dashboard;
