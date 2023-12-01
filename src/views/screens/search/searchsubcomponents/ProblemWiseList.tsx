import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../../App";
import COLORS from "../../../../const/Colors";
import ListButtons from "../../../components/ListButtons";
import { useTheme } from "../../../../customTheme/ThemeContext";
import { useTranslation } from "react-i18next";

interface ProblemWiseListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "ProblemWiseList">;
}

export interface UserData {
  id: number;
  problem: string;
  total: number;
}

const ProblemWiseList = ({ navigation }: ProblemWiseListScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const data: UserData[] = [
    {
      id: 1,
      problem: "no last name",
      total: 123,
    },
    {
      id: 2,
      problem: "no last name",
      total: 123,
    },
    {
      id: 3,
      problem: "no last name",
      total: 123,
    },
    {
      id: 4,
      problem: "no last name",
      total: 123,
    },
    {
      id: 5,
      problem: "no last name",
      total: 123,
    },
    {
      id: 6,
      problem: "no mobile number",
      total: 123,
    },
  ];

  const { t } = useTranslation();
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
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.problem}</Text>
      <Text style={[textStyle, { paddingVertical: 10 }]}>{item.total}</Text>
    </View>
  );

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.problem.toLowerCase().startsWith(text.toLowerCase()) &&
        item.problem !== text
    );
    setSearchResults(filteredResults);
  };
  return (
    <>
      <View style={containerStyle}>
        <View style={{ height: "25%" }}>
          <View
            style={[
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
              style={[textStyle, styles.input]}
              placeholder={t("problem")}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                handleSearch(text);
              }}
              placeholderTextColor={isDarkMode ? "white" : "black"}
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
              buttonText={t("search")}
              onPress={() => {}}
              buttonWidth={120}
              buttonHeight={60}
              bgColor={COLORS.darkBlue}
              borderRadi={10}
            />
            <ListButtons
              iconName="rotate-left"
              buttonText={t("reset")}
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
          <Text style={styles.headerTopBarText}>Details</Text>
        </View>
        <View style={styles.header}>
          <Text style={[textStyle, styles.heading]}>{t("srno")}</Text>
          <Text style={[textStyle, styles.heading, { marginRight: 15 }]}>
            {t("problem")}
          </Text>
          <Text style={[textStyle, styles.heading, {}]}>{t("total")}</Text>
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
    marginHorizontal: 10,
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

export default ProblemWiseList;
