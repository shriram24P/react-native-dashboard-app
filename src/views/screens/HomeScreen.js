import { View, Text } from "react-native";
import React from "react";
import COLORS from "../../const/Colors";
import FooterMenu from "./Menus/FooterMenu";
import { StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{ display: "flex", alignItems: "center", marginVertical: "60%" }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
          Welcome !
        </Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{
            fontSize: 18,
            color: COLORS.darkBlue,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Login
        </Text>
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={{
            fontSize: 18,
            color: COLORS.darkBlue,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Signup
        </Text>
      </View>
      <View style={styles.container}>
        <FooterMenu />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 195,
    margin: 10,
  },
});

export default HomeScreen;
