import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../App";
import Input from "../components/Input";
import { CheckBox } from "@rneui/themed";
import COLORS from "../../const/Colors";
import { RadioButton } from "react-native-paper";
import ListButtons from "../components/ListButtons";
import { useTheme } from "../../customTheme/ThemeContext";

interface SettingsScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "Settings">;
}

const Settings = ({ navigation }: SettingsScreenProp) => {
  const [check1, setCheck1] = React.useState(false);
  const [checked, setChecked] = React.useState("first");

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  return (
    <View
      style={[
        containerStyle,
        {
          height: "100%",
        },
      ]}
    >
      <TextInput
        placeholder="BMACT"
        placeholderTextColor={isDarkMode ? "lightgrey" : "grey"}
        style={{
          borderWidth: 0.5,
          borderColor: COLORS.darkBlue,
          width: "90%",
          padding: 5,
          alignSelf: "center",
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 20,
          marginTop: 20,
        }}
      />
      <TextInput
        placeholder="BMACT"
        placeholderTextColor={isDarkMode ? "lightgrey" : "grey"}
        style={{
          borderWidth: 0.5,
          borderColor: COLORS.darkBlue,
          width: "90%",
          padding: 5,
          alignSelf: "center",
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          width: "60%",
          alignSelf: "flex-start",
          marginBottom: 10,
          marginLeft: 20,
        }}
      >
        <CheckBox
          title="Slip Without Header"
          checked={check1}
          onPress={() => setCheck1(!check1)}
          checkedColor={COLORS.darkBlue}
          containerStyle={containerStyle}
          textStyle={textStyle}
        />
      </View>
      <TextInput
        placeholder="BMACT"
        placeholderTextColor={isDarkMode ? "lightgrey" : "grey"}
        style={{
          borderWidth: 0.5,
          borderColor: COLORS.darkBlue,
          width: "90%",
          padding: 5,
          alignSelf: "center",
          borderRadius: 5,
          paddingHorizontal: 10,
          height: 200,
        }}
      />
      <RadioButton.Group
        onValueChange={(newValue) => setChecked(newValue)}
        value={checked}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={textStyle}>Language</Text>
          <RadioButton.Item
            label="Marathi"
            value="first"
            labelStyle={[textStyle, { fontSize: 14 }]}
            color={COLORS.darkBlue}
          />
          <RadioButton.Item
            label="English"
            value="second"
            labelStyle={[textStyle, { fontSize: 14 }]}
            color={COLORS.darkBlue}
          />
        </View>
      </RadioButton.Group>
      <RadioButton.Group
        onValueChange={(newValue) => setChecked(newValue)}
        value={checked}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <RadioButton.Item
            label="Slip SMS using SIM"
            value="first"
            labelStyle={[textStyle, { fontSize: 14 }]}
            color={COLORS.darkBlue}
          />
          <RadioButton.Item
            label="Slip SMS using API"
            value="second"
            labelStyle={[textStyle, { fontSize: 14 }]}
            color={COLORS.darkBlue}
          />
        </View>
      </RadioButton.Group>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <ListButtons
          buttonText="Ok"
          iconName="lock-open-outline"
          onPress={() => {}}
          buttonHeight={45}
          buttonWidth={130}
          borderRadi={10}
        />
        <ListButtons
          buttonText="Admin Panel"
          iconName="account-group-outline"
          onPress={() => {}}
          buttonHeight={45}
          buttonWidth={200}
          borderRadi={10}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text style={textStyle}>Booth No.</Text>
        <TextInput
          placeholder="From"
          placeholderTextColor={isDarkMode ? "lightgrey" : "grey"}
          style={{
            borderWidth: 0.5,
            borderColor: COLORS.darkBlue,
            width: "25%",
            padding: 5,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
        />
        <TextInput
          placeholder="To"
          placeholderTextColor={isDarkMode ? "lightgrey" : "grey"}
          style={{
            borderWidth: 0.5,
            borderColor: COLORS.darkBlue,
            width: "25%",
            padding: 5,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <ListButtons
          buttonText="Transfer Mobile No. to Contacts"
          iconName=""
          onPress={() => {}}
          buttonHeight={55}
          buttonWidth={180}
          borderRadi={10}
        />
        <ListButtons
          buttonText="Delete Mobile No. From Contacts"
          iconName=""
          onPress={() => {}}
          buttonHeight={55}
          buttonWidth={180}
          borderRadi={10}
        />
      </View>
    </View>
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

export default Settings;
