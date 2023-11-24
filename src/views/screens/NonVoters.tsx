import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListButtons from "../components/ListButtons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import { useTheme } from "../../customTheme/ThemeContext";

interface NonVotersScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "NonVoters">;
}

const NonVoters = ({ navigation }: NonVotersScreenProp) => {
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
        buttonText="Non Voters Entry"
        iconName=""
        onPress={() => {
          navigation.navigate("NonVotersEntry");
        }}
        borderRadi={20}
        buttonWidth={200}
        buttonHeight={100}
        fontsize={20}
      />
      <ListButtons
        buttonText="Namewise List"
        iconName=""
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
        buttonWidth={200}
        buttonHeight={100}
        borderRadi={20}
        fontsize={20}
      />
      <ListButtons
        buttonText="Nagar/Societywise List"
        iconName=""
        onPress={() => {
          navigation.navigate("NagarWiseList");
        }}
        buttonWidth={200}
        buttonHeight={100}
        borderRadi={20}
        fontsize={20}
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

export default NonVoters;
