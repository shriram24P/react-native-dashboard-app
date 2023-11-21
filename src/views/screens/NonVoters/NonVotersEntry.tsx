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
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>New Entry...</Text>
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
            <RadioButton.Item label="New Voter" value="first" />
            <RadioButton.Item label="Closed" value="second" />
            <CheckBox
              title="Rental"
              checked={check1}
              onPress={() => setCheck1(!check1)}
              checkedColor={COLORS.darkBlue}
              containerStyle={{ backgroundColor: "#fff" }}
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
        <Text style={{ marginLeft: 40, marginRight: 10 }}>Last Name</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Last Name"
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
        <Text style={{ marginLeft: 70, marginRight: 12 }}>Name</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Name"
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
        <Text style={{ marginLeft: 20, marginRight: 12 }}>Middle Name</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Middle Name"
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
        <Text style={{ marginLeft: 84, marginRight: 12 }}>Age</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Age"
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
            <Text>Sex</Text>
            <RadioButton.Item label="Male" value="first" />
            <RadioButton.Item label="Female" value="second" />
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.container}>
        <Text style={{ marginRight: 10, marginLeft: 40 }}>Relation</Text>
        <Dropdown
          style={[
            styles.dropdown,
            { borderColor: COLORS.darkBlue, backgroundColor: COLORS.light },
          ]}
          placeholderStyle={styles.placeholderStyle}
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
        <Text style={{ marginLeft: 65, marginRight: 12 }}>Mobile</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Mobile"
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
        <Text style={{ marginLeft: 45, marginRight: 12 }}>Birth Date</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="DD-MM-YY"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginHorizontal: 10,
          marginLeft: 20,
        }}
      >
        <CheckBox
          title="Form 6A Submitted"
          checked={check1}
          onPress={() => setCheck1(!check1)}
          checkedColor={COLORS.darkBlue}
          containerStyle={{ backgroundColor: "#fff" }}
        />
        <CheckBox
          title="Added to Voterlist"
          checked={check1}
          onPress={() => setCheck1(!check1)}
          checkedColor={COLORS.darkBlue}
          containerStyle={{ backgroundColor: "#fff" }}
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
        <Text style={{ marginLeft: 65, marginRight: 12 }}>Vibhag</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Vibhag"
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
        <Text style={{ marginLeft: 40, marginRight: 12 }}>House No.</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="House No."
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
        <Text style={{ marginLeft: 61, marginRight: 12 }}>Society</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Society"
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
        <Text style={{ marginLeft: 48, marginRight: 10 }}>Old Town</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Old Town"
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
        <Text style={{ marginLeft: 28, marginRight: 12 }}>Migrated To</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Migrated To"
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
        <Text style={{ marginLeft: 43, marginRight: 12 }}>Serial No.</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Serial No."
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
        <Text style={{ marginLeft: 70, marginRight: 12 }}>Caste</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Caste"
        />
      </View>
      <View style={[styles.container, { marginBottom: 15 }]}>
        <Text style={{ marginRight: 10, marginLeft: 25 }}>Education</Text>
        <Dropdown
          style={[
            styles.dropdown,
            { borderColor: COLORS.darkBlue, backgroundColor: COLORS.light },
          ]}
          placeholderStyle={styles.placeholderStyle}
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
      <View style={[styles.container, {}]}>
        <Text style={{ marginRight: 10, marginLeft: 15 }}>Occupation</Text>
        <Dropdown
          style={[
            styles.dropdown,
            { borderColor: COLORS.darkBlue, backgroundColor: COLORS.light },
          ]}
          placeholderStyle={styles.placeholderStyle}
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
        <Text style={{ marginLeft: 20, marginRight: 12 }}>Party Worker</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Party Worker"
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
        <Text style={{ marginLeft: 10, marginRight: 15 }}>
          PartyWorker Mob.
        </Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "56%",
            paddingHorizontal: 10,
          }}
          placeholder="PartyWorker Mob."
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
        <Text style={{ marginLeft: 45, marginRight: 12 }}>Problems</Text>
        <TextInput
          style={{
            borderColor: isFocused ? COLORS.darkBlue : COLORS.blue,
            height: 30,
            backgroundColor: COLORS.light,
            borderWidth: 0.5,
            width: "63%",
            paddingHorizontal: 10,
          }}
          placeholder="Problems"
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
    backgroundColor: "white",
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
});

export default NonVotersEntry;
