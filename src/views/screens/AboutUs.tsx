import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import COLORS from "../../const/Colors";

interface AboutUsScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "AboutUs">;
}

const AboutUs = ({ navigation }: AboutUsScreenProp) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
      }}
    >
      <Text style={{ fontSize: 40, marginVertical: 20 }}>Rajtantra</Text>
      <Text style={{ fontSize: 20 }}>Version 3.0</Text>
      <Image
        source={require("../../../assets/abt.png")}
        style={{ width: 100, height: 100, marginVertical: 20 }}
      />
      <Text style={{ opacity: 0.5 }}>
        ©2023-2024. Adiflex Technologies Pvt.Ltd.
      </Text>
    </View>
  );
};

export default AboutUs;
