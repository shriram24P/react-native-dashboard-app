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
      handleError("Please input email", "email");
      valid = false;
    }

    if (!inputs.password) {
      valid = false;
      handleError("Please input password", "password");
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
          toast.show("Logged in successfully", {
            type: "success",
            placement: "top",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
          });
          navigation.navigate("Home");
        } else {
          toast.show("Invalid Details", {
            type: "danger",
            placement: "top",
            duration: 2000,
            offset: 30,
            animationType: "zoom-in",
          });
        }
      } else {
        toast.show("User does not exist", {
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
          Login
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter your details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Email"
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
          />

          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
            onChangeText={(text) => handleOnChange(text, "password")}
            password
          />
          <Button title="Login" onPress={validate} />
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
            Don't have an account ? Signup
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
