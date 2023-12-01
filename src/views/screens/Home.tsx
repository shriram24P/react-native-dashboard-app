import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Switch,
} from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import * as Animatable from "react-native-animatable";

import COLORS from "./../../const/Colors";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../customTheme/ThemeContext";

interface HomeScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Home">;
}

const Home = ({ navigation }: HomeScreenProp) => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  return (
    <>
      <View style={[containerStyle, { height: "100%" }]}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <View
            style={[
              containerStyle,
              {
                width: "100%",
                height: 300,
                borderRadius: 10,
              },
            ]}
          >
            <Image
              source={require("../../../assets/abt.png")}
              style={{
                width: 200,
                height: 200,
                alignSelf: "center",
                marginTop: 40,
              }}
            />
          </View>
          <Text
            style={[
              textStyle,
              {
                fontSize: 20,
                padding: 10,
                marginBottom: 30,
                fontWeight: "900",
                marginTop: 20,
              },
            ]}
          >
            {t("welcome")}
          </Text>
          <Animatable.Text
            animation="pulse"
            easing="ease-out-sine"
            iterationCount="infinite"
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
              fontWeight: "800",
              marginTop: 50,
              padding: 10,
              backgroundColor: COLORS.darkBlue,
              borderRadius: 10,
              width: "50%",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            {t("login")}
          </Animatable.Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 2,
                width: 80,
                backgroundColor: "grey",
                marginTop: 40,
              }}
            ></View>
            <Text style={{ marginTop: 40, marginLeft: 5, marginRight: 5 }}>
              Or
            </Text>
            <View
              style={{
                height: 2,
                width: 80,
                backgroundColor: "grey",
                marginTop: 40,
              }}
            ></View>
          </View>
          <Animatable.Text
            animation="pulse"
            easing="ease-out-sine"
            iterationCount="infinite"
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
              fontWeight: "800",
              marginTop: 40,
              padding: 10,
              backgroundColor: COLORS.darkBlue,
              borderRadius: 10,
              width: "50%",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            {t("tapRegi")}
          </Animatable.Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.darkBlue,
    padding: 5,
    borderRadius: 3,
    marginLeft: 20,
    width: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 7,
  },
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
  footer: {
    margin: 10,
  },
});

export default Home;
