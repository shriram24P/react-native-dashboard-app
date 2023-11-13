import { View, Text } from "react-native";
import React from "react";
import ListButtons from "../components/ListButtons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";

interface NonVotersScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "NonVoters">;
}

const NonVoters = ({ navigation }: NonVotersScreenProp) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <ListButtons
        buttonText="Non Voters Entry"
        iconName=""
        onPress={() => {}}
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

export default NonVoters;
