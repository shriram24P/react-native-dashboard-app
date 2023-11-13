import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../../App";
import COLORS from "../../../../const/Colors";
import ListButtons from "../../../components/ListButtons";

interface MigratedListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "MigratedList">;
}

export interface UserData {
  id: number;
  migrated: string;
  total: number;
}

const MigratedList = ({ navigation }: MigratedListScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const data: UserData[] = [
    {
      id: 1,
      migrated: "not mentioned",
      total: 123,
    },
    {
      id: 2,
      migrated: "not mentioned",
      total: 123,
    },
    {
      id: 3,
      migrated: "not mentioned",
      total: 123,
    },
    {
      id: 4,
      migrated: "not mentioned",
      total: 123,
    },
    {
      id: 5,
      migrated: "not mentioned",
      total: 123,
    },
    {
      id: 6,
      migrated: "not mentioned",
      total: 123,
    },
  ];

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
      <Text>{item.id}</Text>
      <Text>{item.migrated}</Text>
      <Text>{item.total}</Text>
    </View>
  );

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.migrated.toLowerCase().startsWith(text.toLowerCase()) &&
        item.migrated !== text
    );
    setSearchResults(filteredResults);
  };
  return (
    <>
      <View>
        <View style={{ height: "25%" }}>
          <View
            style={[
              styles.searchBar,
              { marginTop: 20, height: 40, width: "92%" },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Migrated"
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
      <View style={styles.tableContainer}>
        <View style={styles.headerTopBar}>
          <Text style={styles.headerTopBarText}>Details</Text>
        </View>
        <View style={styles.header}>
          <Text style={[styles.heading]}>Sr.No.</Text>
          <Text style={[styles.heading, { marginRight: 15 }]}>Migrated</Text>
          <Text style={[styles.heading, {}]}>Total</Text>
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
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 7,
    marginTop: 15,
    marginRight: 10,
    width: "50%",
    marginLeft: 15,
    marginBottom: 10,
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
    marginHorizontal: 10,
  },
});

export default MigratedList;
