import {
  View,
  Text,
  ScrollView,
  Keyboard,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import { SafeAreaView } from "react-native";
import COLORS from "../../const/Colors";
import Button from "../components/Button";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../customTheme/ThemeContext";
import { useToast } from "react-native-toast-notifications";

interface LoginScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Login">;
}

interface User {
  mobileNumber: string;
  password: string;
}

const Login = ({ navigation }: LoginScreenProp) => {
  const [inputs, setInputs] = useState<User>({
    mobileNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState<User>({
    mobileNumber: "",
    password: "",
  });

  const { t } = useTranslation();

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.mobileNumber) {
      handleError(t("pPhone"), "mobileNumber");
      valid = false;
    } else if (inputs.mobileNumber.length !== 10) {
      handleError(t("minPhone"), "mobileNumber");
      valid = false;
    }

    if (!inputs.password) {
      handleError(t("pPass"), "password");
      valid = false;
    } else if (!(inputs.password.length >= 6)) {
      handleError(t("minPass"), "password");
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  function register() {
    Alert.alert(t("successAdded"));
  }

  const handleOnChange = (text: string, input: keyof User) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage: string, input: keyof User) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  return (
    <SafeAreaView style={[containerStyle, { height: "100%" }]}>
      <View
        style={{
          marginTop: 150,
          display: "flex",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Text
          style={[
            textStyle,
            {
              fontSize: 40,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 30,
            },
          ]}
        >
          {t("Login")}
        </Text>
        <Input
          keyboardType="numeric"
          placeholder={t("enterPhone")}
          iconName="phone-outline"
          label={t("phone")}
          error={errors.mobileNumber}
          onFocus={() => {
            handleError("", "mobileNumber");
          }}
          onChangeText={(text) => handleOnChange(text, "mobileNumber")}
        />
        <Input
          secureTextEntry={true}
          placeholder={t("enterPassword")}
          iconName="lock-outline"
          label={t("password")}
          keyboardType="default"
          error={errors.password}
          onFocus={() => {
            handleError("", "password");
          }}
          onChangeText={(text) => handleOnChange(text, "password")}
        />
        <View style={{ marginTop: 20 }}>
          <Button title={t("login")} onPress={validate} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default Login;
