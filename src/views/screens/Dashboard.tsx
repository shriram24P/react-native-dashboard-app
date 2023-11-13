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

interface DashboardScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Dashboard">;
}

interface ButtonItem {
  id: string;
  label: string;
  iconName: string;
}

const Dashboard = ({ navigation }: DashboardScreenProp) => {
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

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SearchScreen");
              }}
            >
              <Icon
                name="search"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.buttonText}>{t("search")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("VoterList");
              }}
            >
              <Icon
                name="list"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.buttonText}>{t("vList")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("NonVoters");
              }}
            >
              <Icon
                name="file"
                size={30}
                color="white"
                style={{ marginRight: 5, marginLeft: 5 }}
              />
              <Text style={{ fontSize: 14, color: "white" }}>
                {t("nVoters")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("BoothManagement");
              }}
            >
              <Icon
                name="group"
                size={20}
                color="white"
                style={{ marginRight: 10, marginLeft: 5 }}
              />
              <Text style={{ fontSize: 13, color: "white" }}>{t("bMgt")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SurveyScreen");
              }}
            >
              <Icon
                name="clipboard"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.buttonText}>{t("survey")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon
                name="gear"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.buttonText}>{t("settings")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Sync");
              }}
            >
              <Icon
                name="spinner"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.buttonText}>{t("sync")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("AboutUs");
              }}
            >
              <Icon
                name="info"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
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
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: COLORS.darkBlue,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 200,
    marginLeft: 35,
    width: 130,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  image: {
    width: 390,
    height: 230,
  },
});
export default Dashboard;
