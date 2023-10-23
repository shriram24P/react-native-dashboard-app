import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import COLORS from "../../const/Colors";

import { useToast } from "react-native-toast-notifications";
import Loader from "../components/Loader";

import { useTheme } from "../customTheme/ThemeContext";
import SettingsScreen from "../customTheme/SettingsScreen";
import { useTranslation } from "react-i18next";

const Home = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    } else if (userData?.isLoggedIn) {
      setloggedIn(true);
    }
  };

  const toast = useToast();
  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    setLoading(true);
    setTimeout(() => {
      toast.show(t("successLogout"), {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
      });
      navigation.navigate("Dashboard");
      setLoading(false);
    }, 2000);
  };

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <>
      <View style={[containerStyle]}>
        <View style={{ marginTop: 20 }}>
          <SettingsScreen />
        </View>
        <Loader visible={loading} />
        <View style={{ height: "100%" }}>
          <Text
            style={[
              textStyle,
              {
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
                marginTop: 100,
                marginLeft: 100,
              },
            ]}
          >
            {t("wel")} {userDetails?.fullname}
          </Text>
          <View style={{ width: "70%", marginLeft: 60 }}>
            <Button title={t("logout")} onPress={logout} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#192734",
  },
  text: {
    fontSize: 24,
  },
  lightText: {
    color: "#192734",
  },
  darkText: {
    color: "white",
  },
});

export default Home;
