import { View, Text } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";

interface FamilyScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "FamilyScreen">;
}

const FamilyScreen = ({ navigation }: FamilyScreenProp) => {
  return <View></View>;
};

export default FamilyScreen;
