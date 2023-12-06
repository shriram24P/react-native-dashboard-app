import {
  View,
  Text,
  ScrollView,
  Keyboard,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import { SafeAreaView } from "react-native";
import COLORS from "../../const/Colors";
import Button from "../components/Button";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../customTheme/ThemeContext";
import { useToast } from "react-native-toast-notifications";

import axios from "axios";

interface LoginScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Login">;
}

interface User {
  userName: string;
  password: string;
}

const Login = ({ navigation }: LoginScreenProp) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<User>({
    userName: "",
    password: "",
  });

  const { t } = useTranslation();

  const handleError = (errorMessage: string, input: keyof User) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  const validate = async () => {
    Keyboard.dismiss();
    // let valid = true;

    // if (!userName) {
    //   handleError(t("pPhone"), "userName");
    //   valid = false;
    // }

    // if (!password) {
    //   handleError(t("pPass"), "password");
    //   valid = false;
    // }

    // try {
    //   const url = "http://localhost:4001/users/login";
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       userName,
    //       password,
    //     }),
    //   });

    //   let result = await response.json();
    //   console.log(result);
    //   if (result) {
    //     Alert.alert("Successfully Logged In");
    //   } else {
    //     console.log("invalid credentials");
    //   }
    // } catch (error) {
    //   console.log("Error Occured", error);
    // }

    debugger;
    axios
      .post("http://localhost:4001/users/login", {
        userName,
        password,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
          keyboardType=""
          placeholder={t("enterPhone")}
          value={userName}
          iconName="phone-outline"
          label={t("phone")}
          error={errors.userName}
          onFocus={() => {
            handleError("", "userName");
          }}
          onChangeText={(text) => setUserName(text)}
        />
        <Input
          secureTextEntry={true}
          placeholder={t("enterPassword")}
          value={password}
          iconName="lock-outline"
          label={t("password")}
          keyboardType="default"
          error={errors.password}
          onFocus={() => {
            handleError("", "password");
          }}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={{ marginTop: 20 }}>
          <Button title={t("login")} onPress={validate} />
        </View>

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
        <View style={{ marginTop: 20 }}>
          <Button
            title={t("tapRegi")}
            onPress={() => navigation.navigate("Register")}
          />
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
