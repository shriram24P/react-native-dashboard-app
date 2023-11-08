import { View, Text, ScrollView, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import { SafeAreaView } from "react-native";
import COLORS from "../../const/Colors";
import Button from "../components/Button";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";

interface RegisterScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Register">;
}

interface User {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;
}

const Register = ({ navigation }: RegisterScreenProp) => {
  const [inputs, setInputs] = useState<User>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState<User>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  });
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.firstName) {
      handleError(t("pFirstName"), "firstName");
      valid = false;
    }

    if (!inputs.lastName) {
      handleError(t("pLastName"), "lastName");
      valid = false;
    }
    if (!inputs.mobileNumber) {
      handleError(t("pPhone"), "mobileNumber");
      valid = false;
    }

    if (!inputs.password) {
      handleError(t("pPass"), "password");
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

  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 30,
          width: "auto",
          height: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          {t("register")}
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginBottom: 20 }}>
          {t("registerNew")}
        </Text>
        <View style={{ marginTop: 10 }}>
          <Input
            placeholder={t("enterFName")}
            iconName="account-outline"
            label={t("fName")}
            error={errors.firstName}
            onFocus={() => {
              handleError("", "firstName");
            }}
            onChangeText={(text) => handleOnChange(text, "firstName")}
            keyboardType="default"
          />
          <Input
            placeholder={t("enterLName")}
            iconName="account-outline"
            label={t("lName")}
            keyboardType="default"
            error={errors.lastName}
            onFocus={() => {
              handleError("", "lastName");
            }}
            onChangeText={(text) => handleOnChange(text, "lastName")}
          />
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

          <Button title={t("activate")} onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
