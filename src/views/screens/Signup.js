import {
  View,
  Text,
  ScrollView,
  Keyboard,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import COLORS from "../../const/Colors";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../customTheme/ThemeContext";
import SettingsScreen from "../customTheme/SettingsScreen";
import { useToast } from "react-native-toast-notifications";
import { useTranslation } from "react-i18next";

const Signup = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError(t("pEmail"), "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError(t("validEmail"), "email");
    }

    if (!inputs.fullname) {
      handleError(t("pFullName"), "fullname");
      valid = false;
    }

    if (!inputs.phone) {
      handleError(t("pPhone"), "phone");
      valid = false;
    }

    if (!inputs.password) {
      handleError(t("pPass"), "password");
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError(t("minPass"), "password");
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  const toast = useToast();

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        toast.show(t("successAdded"), {
          type: "success",
          placement: "top",
          duration: 2000,
          offset: 30,
          animationType: "slide-in",
        });
        navigation.navigate("Login");
      } catch (error) {
        toast.show(t("wentWrong"), {
          type: "warning",
          placement: "top",
          duration: 2000,
          offset: 30,
          animationType: "slide-in",
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

  return (
    <SafeAreaView style={[containerStyle, { height: "100%" }]}>
      <View style={{ alignItems: "flex-end", marginTop: 10, marginRight: 20 }}>
        <SettingsScreen />
      </View>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 30,
          width: "auto",
          height: "auto",
        }}
      >
        <Text style={[textStyle, { fontSize: 40, fontWeight: "bold" }]}>
          {t("register")}
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18 }}>
          {t("registerNew")}
        </Text>
        <View style={{ marginTop: 10 }}>
          <Input
            placeholder={t("enterFname")}
            iconName="account-outline"
            label={t("fname")}
            error={errors.fullname}
            onFocus={() => {
              handleError(null, "fullname");
            }}
            onChangeText={(text) => handleOnChange(text, "fullname")}
          />
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
            keyboardType="numeric"
            placeholder={t("enterPhone")}
            iconName="phone-outline"
            label={t("phone")}
            error={errors.phone}
            onFocus={() => {
              handleError(null, "phone");
            }}
            onChangeText={(text) => handleOnChange(text, "phone")}
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
          <Button title={t("register")} onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Login")}
            style={[
              textStyle,
              {
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                marginVertical: 3,
              },
            ]}
          >
            {`${t("alreadyAC")} ${t("login")}`}
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
    backgroundColor: "#38385b",
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

export default Signup;
