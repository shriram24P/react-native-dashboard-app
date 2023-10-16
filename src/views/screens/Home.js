import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import COLORS from "../../const/Colors";
import HomeScreen from "./HomeScreen";
import Loader from "../components/Loader";

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

  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );

    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 3000);
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
