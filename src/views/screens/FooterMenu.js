import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../customTheme/ThemeContext";

const FooterMenu = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <View style={[containerStyle, styles.container]}>
      <TouchableOpacity>
        <FontAwesome5 name="home" style={[textStyle, styles.iconStyle]} />
        <Text style={textStyle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="login" style={[textStyle, styles.iconStyle]} />
        <Text style={textStyle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5
          name="sign-in-alt"
          style={[textStyle, styles.iconStyle]}
        />
        <Text style={textStyle}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5
          name="info-circle"
          style={[textStyle, styles.iconStyle]}
        />
        <Text style={textStyle}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },

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
});

export default FooterMenu;
