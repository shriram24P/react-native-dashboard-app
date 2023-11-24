import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../../App";
import COLORS from "../../../../const/Colors";
import { Calendar } from "react-native-calendars";
import ListButtons from "../../../components/ListButtons";
import { useTheme } from "../../../../customTheme/ThemeContext";

interface AddressListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "AddressList">;
}

export interface UserData {
  id: number;
  address: string;
  total: number;
}

const AddressList = ({ navigation }: AddressListScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const data: UserData[] = [
    {
      id: 1,
      address: "laxmi chowk",
      total: 123,
    },
    {
      id: 2,
      address: "laxmi chowk",
      total: 123,
    },
    {
      id: 3,
      address: "wipro chowk",
      total: 123,
    },
    {
      id: 4,
      address: "laxmi chowk",
      total: 123,
    },
    {
      id: 5,
      address: "laxmi chowk",
      total: 123,
    },
    {
      id: 6,
      address: "bhumkar chowk",
      total: 123,
    },
  ];
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  const renderItem = ({ item }: { item: UserData }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        padding: 10,
      }}
    >
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.id}</Text>
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.address}</Text>
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.total}</Text>
    </View>
  );

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.address.toLowerCase().startsWith(text.toLowerCase()) &&
        item.address !== text
    );
    setSearchResults(filteredResults);
  };
  return (
    <>
      <View>
        <View style={[containerStyle, { height: "30%" }]}>
          <View
            style={[
              containerStyle,
              styles.searchBar,
              {
                marginTop: 20,
                height: 40,
                width: "92%",
                borderWidth: 0.5,
                borderColor: COLORS.darkBlue,
              },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                handleSearch(text);
              }}
              placeholderTextColor={isDarkMode ? "white" : "black"}
            />
          </View>
          <View
            style={[
              containerStyle,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginRight: 5,
                width: "100%",
                marginTop: 10,
                height: 150,
              },
            ]}
          >
            <ListButtons
              iconName="clipboard-search-outline"
              buttonText="Search"
              onPress={() => {}}
              buttonWidth={120}
              buttonHeight={60}
              bgColor={COLORS.darkBlue}
              borderRadi={10}
            />
            <ListButtons
              iconName="rotate-left"
              buttonText="Reset"
              onPress={() => {}}
              buttonWidth={120}
              buttonHeight={60}
              bgColor={COLORS.darkBlue}
              borderRadi={10}
            />
            <ListButtons
              iconName="file-document-outline"
              buttonText="Excel"
              onPress={() => {}}
              buttonWidth={120}
              buttonHeight={60}
              bgColor={COLORS.darkBlue}
              borderRadi={10}
            />
          </View>
        </View>
      </View>
      <View style={[containerStyle, styles.tableContainer]}>
        <View style={styles.headerTopBar}>
          <Text style={[textStyle, styles.headerTopBarText]}>
            Booth Details
          </Text>
        </View>
        <View style={styles.header}>
          <Text style={[textStyle, styles.heading]}>Sr.No.</Text>
          <Text style={[textStyle, styles.heading, { marginRight: 15 }]}>
            Address
          </Text>
          <Text style={[textStyle, styles.heading, {}]}>Total</Text>
        </View>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 5,
    padding: 7,
    marginTop: 15,
    marginRight: 10,
    width: "50%",
    marginLeft: 15,
    marginBottom: -5,
  },
  input: {
    fontSize: 16,
  },
  calendarButton: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },

  tableContainer: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: -20,
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

export default AddressList;
