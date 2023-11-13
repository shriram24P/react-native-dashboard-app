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
import ListButtons from "../../components/ListButtons";
import COLORS from "../../../const/Colors";
import { RootDrawerParamList } from "../../../../App";

interface SurveyDateWiseListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "SurveyDateWiseList">;
}

export interface UserData {
  id: number;
  surveyDate: string;
  total: number;
}

const SurveyDateWiseList = ({ navigation }: SurveyDateWiseListScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");

  const data: UserData[] = [
    {
      id: 1,
      surveyDate: "10-05",
      total: 123,
    },
    {
      id: 2,
      surveyDate: "10-03",
      total: 123,
    },
    {
      id: 3,
      surveyDate: "09-05",
      total: 123,
    },
    {
      id: 4,
      surveyDate: "10-05",
      total: 123,
    },
    {
      id: 5,
      surveyDate: "02-13",
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
      }}
    >
      <Text>{item.id}</Text>
      <Text>{item.surveyDate}</Text>
      <Text>{item.total}</Text>
    </View>
  );

  const showTodaysBirthdays = () => {
    const today = new Date();
    const formattedToday = `${today.getMonth() + 1}-${today.getDate()}`;
    setSearchText(formattedToday);
  };

  const filteredData = data.filter((item) =>
    item.surveyDate.includes(searchText)
  );
  return (
    <>
      <View style={{ height: 70, marginTop: 10 }}>
        <View style={[styles.searchBar, { width: "90%", marginLeft: 20 }]}>
          <TextInput
            style={styles.input}
            placeholder="Survey Date"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <ListButtons
          iconName="clipboard-search-outline"
          buttonText="Search"
          onPress={() => {}}
          buttonWidth={110}
          buttonHeight={60}
          bgColor={COLORS.darkBlue}
          borderRadi={10}
          iconSize={30}
        />
        <ListButtons
          iconName="rotate-left"
          buttonText="Reset"
          onPress={() => {}}
          buttonWidth={110}
          buttonHeight={60}
          bgColor={COLORS.darkBlue}
          borderRadi={10}
          iconSize={30}
        />
        <ListButtons
          iconName="file-document-outline"
          buttonText="Excel"
          onPress={() => {}}
          buttonWidth={110}
          buttonHeight={60}
          bgColor={COLORS.darkBlue}
          borderRadi={10}
          iconSize={30}
        />
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.headerTopBar}>
          <Text style={styles.headerTopBarText}>Users</Text>
        </View>
        <View style={styles.header}>
          <Text style={[styles.heading]}>Sr.No.</Text>
          <Text style={[styles.heading]}>Survey Date</Text>
          <Text style={[styles.heading]}>Total</Text>
        </View>
        <FlatList
          data={filteredData}
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
    width: "35%",
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
    width: "100%",
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

  calendarOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    zIndex: 1,
    marginTop: 60,
    marginRight: 20,
  },
});

export default SurveyDateWiseList;
