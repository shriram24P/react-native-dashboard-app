import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";
import ListButtons from "../../components/ListButtons";
import COLORS from "../../../const/Colors";
import { useTheme } from "../../../customTheme/ThemeContext";

interface BoothManagementScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "BoothManagement">;
}

export interface UserData {
  id: number;
  booth: string;
  total: number;
}

const BoothManagement = ({ navigation }: BoothManagementScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const data: UserData[] = [
    {
      id: 1,
      booth: "booth 1",
      total: 123,
    },
    {
      id: 2,
      booth: "booth 1",
      total: 123,
    },
    {
      id: 3,
      booth: "booth 1",
      total: 123,
    },
    {
      id: 4,
      booth: "booth 1",
      total: 123,
    },
    {
      id: 5,
      booth: "booth 1",
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
      }}
    >
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.id}</Text>
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.booth}</Text>
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.total}</Text>
    </View>
  );

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.booth.toLowerCase().startsWith(text.toLowerCase()) &&
        item.booth !== text
    );
    setSearchResults(filteredResults);
  };
  return (
    <>
      <View style={containerStyle}>
        <View style={[containerStyle, { height: "25%" }]}>
          <View
            style={[
              containerStyle,
              styles.searchBar,
              {
                marginTop: 30,
                height: 40,
                width: "92%",
              },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Booth"
              placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                handleSearch(text);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginRight: 5,
            }}
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
      <View
        style={[
          containerStyle,
          {
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: -20,
            paddingBottom: 10,
          },
        ]}
      >
        <ListButtons
          buttonText="Refresh Polling Status"
          iconName="wifi"
          onPress={() => {}}
          buttonHeight={50}
          buttonWidth={360}
          borderRadi={10}
        />
      </View>
      <View style={[containerStyle, styles.tableContainer]}>
        <View style={styles.headerTopBar}>
          <Text style={[textStyle, styles.headerTopBarText]}>
            Booth Details
          </Text>
        </View>
        <View style={styles.header}>
          <Text style={[textStyle, styles.heading]}>Sr.No.</Text>
          <Text style={[textStyle, styles.heading]}>Booth</Text>
          <Text style={[textStyle, styles.heading]}>Total</Text>
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
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: COLORS.darkBlue,
  },
  input: {
    fontSize: 16,
    borderColor: "red",
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

export default BoothManagement;
