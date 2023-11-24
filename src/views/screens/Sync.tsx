import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListButtons from "../components/ListButtons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import { useTheme } from "../../customTheme/ThemeContext";

interface SyncScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Sync">;
}

const Sync = ({ navigation }: SyncScreenProp) => {
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
      <ListButtons
        buttonText="Download Homescreen, Slip header, WhatsApp header images"
        iconName=""
        onPress={() => {}}
        buttonHeight={100}
        buttonWidth={250}
        borderRadi={20}
      />
      <ListButtons
        buttonText="Download Homescreen, Slip header, WhatsApp header images"
        iconName=""
        onPress={() => {}}
        buttonHeight={100}
        buttonWidth={250}
        borderRadi={20}
      />
      <ListButtons
        buttonText="Download Homescreen, Slip header, WhatsApp header images"
        iconName=""
        onPress={() => {}}
        buttonHeight={100}
        buttonWidth={250}
        borderRadi={20}
      />
      <ListButtons
        buttonText="Download Homescreen, Slip header, WhatsApp header images"
        iconName=""
        onPress={() => {}}
        buttonHeight={100}
        buttonWidth={250}
        borderRadi={20}
      />
      <Text
        style={[
          textStyle,
          { marginHorizontal: 50, marginTop: 20, opacity: 0.5 },
        ]}
      >
        *Upload survey data to server uploads survey data to server from which
        the desktop software collects this data. This button is also given
        in Survey module.
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

export default Sync;
