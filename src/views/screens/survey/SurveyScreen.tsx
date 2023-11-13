import { View, Text } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";
import ListButtons from "../../components/ListButtons";

interface SurveyScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "SurveyScreen">;
}

const SurveyScreen = ({ navigation }: SurveyScreenProp) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 180,
      }}
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

export default SurveyScreen;
