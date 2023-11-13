import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../../App";
import COLORS from "../../../../const/Colors";
import ListButtons from "../../../components/ListButtons";

interface NagarWiseListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "NagarWiseList">;
}

export interface UserData {
  id: number;
  vibhag: string;
  total: number;
}

const NagarWiseList = ({ navigation }: NagarWiseListScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const data: UserData[] = [
    {
      id: 1,
      vibhag: "not mentioned",
      total: 123,
    },
    {
      id: 2,
      vibhag: "not mentioned",
      total: 123,
    },
    {
      id: 3,
      vibhag: "not mentioned",
      total: 123,
    },
    {
      id: 4,
      vibhag: "not mentioned",
      total: 123,
    },
    {
      id: 5,
      vibhag: "not mentioned",
      total: 123,
    },
    {
      id: 6,
      vibhag: "not mentioned",
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
      <Text>{item.vibhag}</Text>
      <Text>{item.total}</Text>
    </View>
  );

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.vibhag.toLowerCase().startsWith(text.toLowerCase()) &&
        item.vibhag !== text
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
              placeholder="Vibhag"
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
          <Text style={[styles.heading, { marginRight: 15 }]}>Vibhag</Text>
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

export default NagarWiseList;
