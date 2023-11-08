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

  const renderItem = ({ item }: { item: ButtonItem }) => (
    <TouchableOpacity style={styles.button}>
      <Icon
        name={item.iconName}
        size={30}
        color="white"
        style={{ marginRight: 10 }}
      />
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={buttons}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.buttonContainer}
        />
        <Image
          source={require("../../../assets/vote.jpg")}
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
    flex: 1,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  image: {
    width: 400,
    height: 250,
  },
});
export default Dashboard;
