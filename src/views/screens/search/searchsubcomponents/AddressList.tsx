import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  PermissionsAndroid,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../../App";
import COLORS from "../../../../const/Colors";
import { Calendar } from "react-native-calendars";
import ListButtons from "../../../components/ListButtons";
import { useTheme } from "../../../../customTheme/ThemeContext";
import { useTranslation } from "react-i18next";
import { writeFile, readFile, DownloadDirectoryPath } from "react-native-fs";
import XLSX from "xlsx";

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

  // const exportToExcel = () => {
  //   let wb = XLSX.utils.book_new();
  //   let ws = XLSX.utils.json_to_sheet(data);
  //   XLSX.utils.book_append_sheet(wb, ws, "Users");
  //   const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

  //   writeFile(DownloadDirectoryPath + "/sample.csv", wbout, "ascii")
  //     .then((res) => {
  //       alert("Export Data Successfully");
  //     })
  //     .catch((e) => {
  //       console.log("error", e);
  //     });
  // };

  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  const { t } = useTranslation();

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

  // const handleClick = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: "Storage Permission Needed",
  //         message: "This app needs storage permission to export data.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "Ok",
  //       }
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       exportToExcel();
  //       console.log("Permission Granted");
  //     } else {
  //       console.log("Permission Denied");
  //     }
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

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
              placeholder={t("address")}
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
          <Text style={[textStyle, styles.headerTopBarText]}>Details</Text>
        </View>
        <View style={styles.header}>
          <Text style={[textStyle, styles.heading]}>{t("srno")}</Text>
          <Text style={[textStyle, styles.heading, { marginRight: 15 }]}>
            {t("address")}
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
