import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";
import ListButtons from "../../components/ListButtons";
import { useTheme } from "../../../customTheme/ThemeContext";

interface SurveyScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "SurveyScreen">;
}

const SurveyScreen = ({ navigation }: SurveyScreenProp) => {
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
        buttonText="View Voter Survey"
        iconName="account-search-outline"
        onPress={() => {
          navigation.navigate("SurveyDateWiseList");
        }}
        borderRadi={20}
        buttonWidth={280}
        buttonHeight={120}
        iconSize={40}
      />
      <ListButtons
        buttonText="Other Services Management"
        iconName="rotate-right-variant"
        onPress={() => {}}
        borderRadi={20}
        buttonWidth={280}
        buttonHeight={120}
        iconSize={40}
      />
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

export default SurveyScreen;
