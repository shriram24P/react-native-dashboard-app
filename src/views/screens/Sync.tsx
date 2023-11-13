import { View, Text } from "react-native";
import React from "react";
import ListButtons from "../components/ListButtons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";

interface SyncScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Sync">;
}

const Sync = ({ navigation }: SyncScreenProp) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
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
      <Text style={{ marginHorizontal: 50, marginTop: 20, opacity: 0.5 }}>
        *Upload survey data to server uploads survey data to server from which
        the desktop software collects this data. This button is also given
        in Survey module.
      </Text>
    </View>
  );
};

export default Sync;
