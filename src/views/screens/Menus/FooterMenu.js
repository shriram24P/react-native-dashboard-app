import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const FooterMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="home" style={styles.iconStyle} />
        <Text onPress={() => navigation.navigate("HomeScreen")}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="login" style={styles.iconStyle} />
        <Text onPress={() => navigation.navigate("Login")}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="sign-in-alt" style={styles.iconStyle} />
        <Text onPress={() => navigation.navigate("Signup")}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="info-circle" style={styles.iconStyle} />
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
});

export default FooterMenu;
