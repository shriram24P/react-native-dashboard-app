import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Switch,
} from "react-native";
import React, { useEffect } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import * as Animatable from "react-native-animatable";

import COLORS from "./../../const/Colors";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../customTheme/ThemeContext";
import Loader from "../components/Loader";

interface HomeScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Home">;
}

const Home = ({ navigation }: HomeScreenProp) => {
  const [loading, setLoading] = React.useState(false);
  const [loginBtn, setLoginBtn] = React.useState(false);
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      navigation.navigate("Login");
    }, 2000);
  }, []);
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
          {!loginBtn ? (
            <Loader visible={loading} marginT={600} marginL={100} />
          ) : (
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
          )}
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
