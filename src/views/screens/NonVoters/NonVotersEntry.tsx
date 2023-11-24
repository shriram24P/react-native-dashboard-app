import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";
import ListButtons from "./../../components/ListButtons";
import { RadioButton } from "react-native-paper";
import { CheckBox, Icon } from "@rneui/themed";
import COLORS from "../../../const/Colors";
import { Dropdown } from "react-native-element-dropdown";
import { useTheme } from "../../../customTheme/ThemeContext";

interface NonVotersEntryScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "NonVotersEntry">;
}

interface FormData {
  lastName: string;
  name: string;
  middleName: string;
  age: string;
  sex: string;
  relation: string;
  mobile: string;
  birthDate: string;
  vibhag: string;
  houseNo: string;
  society: string;
  oldTown: string;
  migratedTo: string;
  serialNo: string;
  caste: string;
  education: string;
  occupation: string;
  partyWorker: string;
  partyWorkerMobile: string;
  problems: string;
}

const NonVotersEntry = ({ navigation }: NonVotersEntryScreenProp) => {
  const [checked, setChecked] = React.useState("first");
  const [check1, setCheck1] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    name: "",
    middleName: "",
    age: "",
    sex: "",
    relation: "",
    mobile: "",
    birthDate: "",
    vibhag: "",
    houseNo: "",
    society: "",
    oldTown: "",
    migratedTo: "",
    serialNo: "",
    caste: "",
    education: "",
    occupation: "",
    partyWorker: "",
    partyWorkerMobile: "",
    problems: "",
  });

  const data = [
    { label: "कुटुंब प्रमुख", value: "1" },
    { label: "मुलगा", value: "2" },
    { label: "आई", value: "3" },
    { label: "वडील", value: "4" },
    { label: "वडील", value: "5" },
    { label: "वडील", value: "6" },
    { label: "वडील", value: "7" },
  ];

  const saveData = () => {
    // Validation
    if (
      !formData.lastName ||
      !formData.name ||
      !formData.age ||
      !formData.sex ||
      !formData.relation ||
      !formData.mobile ||
      !formData.birthDate ||
      !formData.vibhag ||
      !formData.houseNo ||
      !formData.society ||
      !formData.oldTown ||
      !formData.migratedTo ||
      !formData.serialNo ||
      !formData.caste ||
      !formData.education ||
      !formData.occupation ||
      !formData.partyWorker ||
      !formData.partyWorkerMobile ||
      !formData.problems
    ) {
      // Show an alert for mandatory fields
      Alert.alert("Validation Error", "All fields are mandatory");
      return;
    }

    console.log("Form Data:", formData);

    Alert.alert("Success", "Data successfully saved!");
  };

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  return (
    <ScrollView style={[containerStyle, { flex: 1 }]}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text style={[textStyle, { fontSize: 24 }]}>New Entry...</Text>
        <ListButtons
          buttonText="Save"
          iconName="content-save-all"
          onPress={() => {
            saveData();
          }}
          buttonHeight={50}
          buttonWidth={100}
          borderRadi={10}
        />
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: -15 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setChecked(newValue)}
          value={checked}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 10,
            }}
          >
            <RadioButton.Item
              label="New Voter"
              value="first"
              labelStyle={[textStyle, { fontSize: 14 }]}
              color={isDarkMode ? "white" : COLORS.darkBlue}
            />
            <RadioButton.Item
              label="Closed"
              value="second"
              labelStyle={[textStyle, { fontSize: 14 }]}
              color={isDarkMode ? "white" : COLORS.darkBlue}
            />
            <CheckBox
              title="Rental"
              checked={check1}
              onPress={() => setCheck1(!check1)}
              checkedColor={COLORS.darkBlue}
              containerStyle={[containerStyle]}
            />
          </View>
        </RadioButton.Group>
      </View>
      <View
        style={{
          height: 3,
          backgroundColor: COLORS.darkBlue,
          width: "90%",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 40, marginRight: 10 }]}>
          Last Name
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Last Name"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 70, marginRight: 12 }]}>
          Name
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Name"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 20, marginRight: 12 }]}>
          Middle Name
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Middle Name"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 84, marginRight: 12 }]}>
          Age
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Age"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setChecked(newValue)}
          value={checked}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 45,
            }}
          >
            <Text style={[textStyle]}>Sex</Text>
            <RadioButton.Item
              label="Male"
              value="first"
              labelStyle={[textStyle, { fontSize: 14 }]}
              color={isDarkMode ? "white" : COLORS.darkBlue}
            />
            <RadioButton.Item
              label="Female"
              value="second"
              labelStyle={[textStyle, { fontSize: 14 }]}
              color={isDarkMode ? "white" : COLORS.darkBlue}
            />
          </View>
        </RadioButton.Group>
      </View>
      <View style={[containerStyle, styles.container]}>
        <Text style={[textStyle, { marginRight: 10, marginLeft: 40 }]}>
          Relation
        </Text>
        <Dropdown
          style={[
            containerStyle,
            styles.dropdown,
            { borderColor: COLORS.darkBlue },
          ]}
          placeholderStyle={[textStyle, styles.placeholderStyle]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 65, marginRight: 12 }]}>
          Mobile
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Mobile"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 45, marginRight: 12 }]}>
          Birth Date
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="DD-MM-YY"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={[
          containerStyle,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 10,
            marginLeft: 20,
          },
        ]}
      >
        <CheckBox
          title="Form 6A Submitted"
          checked={check1}
          onPress={() => setCheck1(!check1)}
          checkedColor={COLORS.darkBlue}
          containerStyle={[containerStyle]}
          textStyle={[textStyle]}
        />
        <CheckBox
          title="Added to Voterlist"
          checked={check1}
          onPress={() => setCheck1(!check1)}
          containerStyle={[containerStyle]}
          textStyle={[textStyle]}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 65, marginRight: 12 }]}>
          Vibhag
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Vibhag"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 40, marginRight: 12 }]}>
          House No.
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="House No."
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 61, marginRight: 12 }]}>
          Society
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Society"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 48, marginRight: 10 }]}>
          Old Town
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Old Town"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 28, marginRight: 12 }]}>
          Migrated To
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Migrated To"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 43, marginRight: 12 }]}>
          Serial No.
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Serial No."
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text style={[textStyle, { marginLeft: 70, marginRight: 12 }]}>
          Caste
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Caste"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View style={[styles.container, { marginBottom: 15 }]}>
        <Text style={[textStyle, { marginRight: 10, marginLeft: 25 }]}>
          Education
        </Text>
        <Dropdown
          style={[
            containerStyle,
            styles.dropdown,
            { borderColor: COLORS.darkBlue },
          ]}
          placeholderStyle={[textStyle, styles.placeholderStyle]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={[styles.container]}>
        <Text style={[textStyle, { marginRight: 10, marginLeft: 15 }]}>
          Occupation
        </Text>
        <Dropdown
          style={[
            containerStyle,
            styles.dropdown,
            { borderColor: COLORS.darkBlue },
          ]}
          placeholderStyle={[textStyle, styles.placeholderStyle]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 20, marginRight: 12 }]}>
          Party Worker
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Party Worker"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle, { marginLeft: 10, marginRight: 15 }]}>
          PartyWorker Mob.
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,
              borderWidth: 0.5,
              width: "56%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="PartyWorker Mob."
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text style={[textStyle, { marginLeft: 45, marginRight: 12 }]}>
          Problems
        </Text>
        <TextInput
          style={[
            containerStyle,
            {
              borderColor: COLORS.darkBlue,
              height: 30,

              borderWidth: 0.5,
              width: "63%",
              paddingHorizontal: 10,
            },
          ]}
          placeholder="Problems"
          placeholderTextColor={isDarkMode ? "white" : "black"}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <ListButtons
          buttonText="Save"
          iconName="content-save-all"
          onPress={() => {
            saveData();
          }}
          buttonHeight={50}
          buttonWidth={170}
          borderRadi={10}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    height: 35,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: "64%",
    marginRight: 7,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },

  inputSearchStyle: {
    height: 30,
    fontSize: 14,
  },
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

export default NonVotersEntry;
