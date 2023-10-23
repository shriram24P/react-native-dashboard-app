import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import COLORS from "../../const/Colors";
import { View, Text, ScrollView, Keyboard, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { useTheme } from "../customTheme/ThemeContext";
import SettingsScreen from "../customTheme/SettingsScreen";
import { useToast } from "react-native-toast-notifications";
import { useTranslation } from "react-i18next";

const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError(t("pEmail"), "email");
      valid = false;
    }

    if (!inputs.password) {
      valid = false;
      handleError(t("pPass"), "password");
    }

    if (valid) {
      login();
    }
  };

  const toast = useToast();
  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          AsyncStorage.setItem(
            "user",
            JSON.stringify({ ...userData, loggedIn: true })
          );
          toast.show(t("successAdd"), {
            type: "success",
            placement: "top",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
          });
          navigation.navigate("Home");
        } else {
          toast.show(t("invDetails"), {
            type: "danger",
            placement: "top",
            duration: 2000,
            offset: 30,
            animationType: "zoom-in",
          });
        }
      } else {
        toast.show(t("notExist"), {
          type: "danger",
          placement: "top",
          duration: 2000,
          offset: 30,
          animationType: "zoom-in",
        });
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  const { t } = useTranslation();
  return (
    <SafeAreaView style={[containerStyle, { flex: 1 }]}>
      <View style={{ marginTop: 20, marginRight: 10 }}>
        <SettingsScreen />
      </View>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
          marginTop: 30,
        }}
      >
        <Text style={[textStyle, { fontSize: 40, fontWeight: "bold" }]}>
          {t("login")}
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          {t("enterLogin")}
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder={t("enterEmail")}
            iconName="email-outline"
            label={t("email")}
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
          />

          <Input
            placeholder={t("enterPassword")}
            iconName="lock-outline"
            label={t("password")}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
            onChangeText={(text) => handleOnChange(text, "password")}
            password
          />
          <Button title={t("login")} onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={[
              textStyle,
              {
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                marginVertical: 20,
              },
            ]}
          >
            {`${t("noAccount")} ${t("signup")}`}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  footer: {
    margin: 10,
  },
});

export default Login;
