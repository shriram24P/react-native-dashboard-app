import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { RootDrawerParamList } from "../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import COLORS from "../../const/Colors";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../customTheme/ThemeContext";

interface DashboardScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Dashboard">;
}

interface ButtonItem {
  id: string;
  label: string;
  iconName: string;
}

const Dashboard = ({ navigation }: DashboardScreenProp) => {
  const { isDarkMode } = useTheme();

  const { t } = useTranslation();
  const buttons: ButtonItem[] = [
    { id: "1", label: t("search"), iconName: "search" },
    { id: "2", label: t("vList"), iconName: "list" },
    { id: "3", label: t("nVoters"), iconName: "file" },
    { id: "4", label: t("bMgt"), iconName: "group" },
    { id: "5", label: t("survey"), iconName: "clipboard" },
    { id: "6", label: t("settings"), iconName: "gear" },
    { id: "7", label: t("sync"), iconName: "spinner" },
    { id: "8", label: t("abtUs"), iconName: "info" },
  ];

  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <>
      <View style={[containerStyle, styles.container]}>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 7,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "rgb(255, 189, 127)",
                  shadowColor: isDarkMode ? "#fff" : "#000",
                },
              ]}
              onPress={() => {
                navigation.navigate("SearchScreen");
              }}
            >
              <Icon
                name="search"
                size={30}
                color="#ff7f50"
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.buttonText}>{t("search")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(174, 228, 239)" }]}
              onPress={() => {
                navigation.navigate("VoterList");
              }}
            >
              <Icon
                name="list"
                size={30}
                color="rgba(13, 171, 203, 0.904)"
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.buttonText}>{t("vList")}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 7,
            }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(185, 163, 244)" }]}
              onPress={() => {
                navigation.navigate("NonVoters");
              }}
            >
              <Icon
                name="file"
                size={30}
                color="rgb(104, 55, 240)"
                style={{ marginBottom: 10 }}
              />
              <Text style={{ fontSize: 14, color: "black" }}>
                {t("nVoters")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(255, 189, 127)" }]}
              onPress={() => {
                navigation.navigate("BoothManagement");
              }}
            >
              <Icon
                name="group"
                size={30}
                color="#ff7f50"
                style={{ marginBottom: 10 }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  alignContent: "center",
                }}
              >
                {t("bMgt")}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 7,
            }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(174, 228, 239)" }]}
              onPress={() => {
                navigation.navigate("SurveyScreen");
              }}
            >
              <Icon
                name="clipboard"
                size={30}
                color="rgba(13, 171, 203, 0.904)"
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.buttonText}>{t("survey")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(185, 163, 244)" }]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Icon
                name="gear"
                size={30}
                color="rgb(104, 55, 240)"
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.buttonText}>{t("settings")}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 7,
            }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(255, 189, 127)" }]}
              onPress={() => {
                navigation.navigate("Sync");
              }}
            >
              <Icon
                name="spinner"
                size={30}
                color="#ff7f50"
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.buttonText}>{t("sync")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "rgb(174, 228, 239)" }]}
              onPress={() => {
                navigation.navigate("AboutUs");
              }}
            >
              <Icon
                name="info"
                size={30}
                color="rgba(13, 171, 203,0.904)"
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.buttonText}>{t("abtUs")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Image
          source={require("../../../assets/homewb.jpg")}
          style={styles.image}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "column",
  },
  button: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 170,
    width: 170,

    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    marginHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
  },
  image: {
    width: 390,
    height: 230,
  },
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
export default Dashboard;
