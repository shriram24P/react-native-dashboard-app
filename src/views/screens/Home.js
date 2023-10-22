import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import COLORS from "../../const/Colors";

import Loader from "../components/Loader";
import { useToast } from "react-native-toast-notifications";

const Home = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState();

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

    setTimeout(() => {
      toast.show("Logged out successfully", {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
      });
      navigation.navigate("Dashboard");
    }, 2000);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 40,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Welcome {userDetails?.fullname}
        </Text>
        <Button title="Logout" onPress={logout} />
      </View>
    </>
  );
};

export default Home;
