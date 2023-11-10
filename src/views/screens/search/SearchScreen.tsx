import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { RootDrawerParamList } from "../../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import COLORS from "../../../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RadioButton } from "react-native-paper";
import UserTable from "../../components/UserTable";

interface SearchScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "SearchScreen">;
}

export interface UserData {
  id: number;
  name: string;
  phone: number;
  image: any;
}

const SearchScreen = ({ navigation }: SearchScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const [checked, setChecked] = React.useState("first");

  const data: UserData[] = [
    {
      id: 1,
      name: "Apple",
      phone: 1234567890,
      image: require("../../../../assets/user.png"),
    },
    {
      id: 2,
      name: "Banana",
      phone: 1234567890,
      image: require("../../../../assets/user.png"),
    },
    {
      id: 3,
      name: "Cherry",
      phone: 1234567890,
      image: require("../../../../assets/user.png"),
    },
    {
      id: 4,
      name: "Date",
      phone: 123,
      image: require("../../../../assets/user.png"),
    },
    {
      id: 5,
      name: "Grapes",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
    },
    {
      id: 6,
      name: "Lemon",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
    },
    {
      id: 7,
      name: "Orange",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
    },
    {
      id: 8,
      name: "Peach",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
    },
    {
      id: 9,
      name: "Strawberry",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
    },
    {
      id: 10,
      name: "Watermelon",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
    },
  ];

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().startsWith(text.toLowerCase()) &&
        item.name !== text
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <View>
        <View style={styles.container1}>
          <View style={[styles.searchBar, { marginLeft: 20, marginRight: 20 }]}>
            <TextInput
              style={styles.input}
              placeholder="Full Name (Wild Search)"
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                handleSearch(text);
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={[styles.searchBar, { width: 110, marginLeft: 20 }]}>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
            <View style={[styles.searchBar, { width: 90 }]}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
            <View style={[styles.searchBar, { width: 130 }]}>
              <TextInput
                style={styles.input}
                placeholder="Middle Name"
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={[
                styles.searchBar,
                { width: 160, marginLeft: 20, marginRight: 10 },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Card No."
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
            <View style={[styles.searchBar, { width: 180 }]}>
              <TextInput
                style={styles.input}
                placeholder="Booth No."
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.button}>
              <Icon name="text-search" size={15} color="white" />
              <Text style={styles.searchBtn}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="rotate-left" size={15} color="white" />
              <Text style={styles.searchBtn}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="file-document-outline" size={15} color="white" />
              <Text style={styles.searchBtn}>Excel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer2}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.searchBtn}>General SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.searchBtn}>Festive SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.searchBtn}>Voter Slip</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 20,
                }}
              >
                <RadioButton.Item label="All" value="first" />
                <RadioButton.Item label="Survey" value="second" />
                <RadioButton.Item label="Non Survey" value="third" />
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.headerTopBar}>
          <Text style={styles.headerTopBarText}>Users</Text>
        </View>
        <View style={styles.header}>
          <Text style={[styles.heading, { width: 90 }]}>Photo</Text>
          <Text style={[styles.heading, { width: 90 }]}>Name</Text>
          <Text style={[styles.heading, { width: 110 }]}>Phone</Text>
        </View>
        <UserTable data={searchResults} />
      </View>
    </>
  );
};

// nameWiseList

const styles = StyleSheet.create({
  container1: {
    height: "50%",
  },
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7F7F7",
  },
  tableContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
  },
  headerTopBar: {
    backgroundColor: COLORS.darkBlue,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerTopBarText: {
    color: "white",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  heading: {
    fontSize: 15,
    marginLeft: 15,
  },
  searchBar: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 7,
    marginTop: 15,
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    borderColor: "red",
  },
  buttonContainer1: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 10,
  },
  buttonContainer2: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 5,
  },
  button: {
    backgroundColor: COLORS.darkBlue,
    width: 100,
    margin: 5,
    padding: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  searchBtn: {
    color: "white",
  },
  resultItem: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 8,
  },
  resultText: {
    fontSize: 18,
  },
});

export default SearchScreen;
