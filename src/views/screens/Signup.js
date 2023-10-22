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

const Signup = ({ navigation }) => {
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
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input valid email", "email");
    }

    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      valid = false;
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      valid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
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
        toast.show("new user added successfully", {
          type: "success",
          placement: "top",
          duration: 2000,
          offset: 30,
          animationType: "slide-in",
        });
        navigation.navigate("Login");
      } catch (error) {
        toast.show("Something went wrong", {
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
    <SafeAreaView style={[containerStyle, { flex: 1 }]}>
      <View style={{ marginTop: 20, marginRight: 10 }}>
        <SettingsScreen />
      </View>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ marginTop: 30, paddingHorizontal: 20 }}
      >
        <Text style={[textStyle, { fontSize: 40, fontWeight: "bold" }]}>
          Register
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter your details to Register
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Enter your fullname"
            iconName="account-outline"
            label="Full Name"
            error={errors.fullname}
            onFocus={() => {
              handleError(null, "fullname");
            }}
            onChangeText={(text) => handleOnChange(text, "fullname")}
          />
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
            keyboardType="numeric"
            placeholder="Enter your phone number"
            iconName="phone-outline"
            label="Phone Number"
            error={errors.phone}
            onFocus={() => {
              handleError(null, "phone");
            }}
            onChangeText={(text) => handleOnChange(text, "phone")}
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
          <Button title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Login")}
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
            Already have account ? Login
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

export default Signup;
