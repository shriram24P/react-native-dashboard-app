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

interface BirthdayListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "BirthdayList">;
}

export interface UserData {
  id: number;
  birthday: string;
  total: number;
}

const BirthdayList = ({ navigation }: BirthdayListScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  );
  const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false);

  const data: UserData[] = [
    {
      id: 1,
      birthday: "10-05",
      total: 123,
    },
    {
      id: 2,
      birthday: "10-03",
      total: 123,
    },
    {
      id: 3,
      birthday: "09-05",
      total: 123,
    },
    {
      id: 4,
      birthday: "10-05",
      total: 123,
    },
    {
      id: 5,
      birthday: "02-13",
      total: 123,
    },
  ];

  const onDayPress = (day: any) => {
    // Format the selected date to "MM-DD" format
    const formattedDate = `${day.month}-${day.day}`;
    setSelectedDate(formattedDate);
    setCalendarVisible(false);

    // Set the formatted date to the search bar
    setSearchText(formattedDate);
  };

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
      <Text>{item.birthday}</Text>
      <Text>{item.total}</Text>
    </View>
  );

  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const showTodaysBirthdays = () => {
    const today = new Date();
    const formattedToday = `${today.getMonth() + 1}-${today.getDate()}`;
    setSearchText(formattedToday);
    setSelectedDate(formattedToday);
  };

  const filteredData = data.filter((item) =>
    item.birthday.includes(searchText)
  );
  return (
    <>
      <View>
        <View style={{ height: 70, marginTop: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              height: 70,
            }}
          >
            <View style={[styles.searchBar, {}]}>
              <TextInput
                style={styles.input}
                placeholder="Birthday"
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                }}
              />
            </View>

            <ListButtons
              onPress={openCalendar}
              iconName="calendar-month"
              buttonText=""
              buttonHeight={40}
              buttonWidth={45}
              borderRadi={10}
              marginH={10}
            />
            <ListButtons
              buttonText="Todays's Birthday"
              iconName=""
              buttonHeight={40}
              buttonWidth={150}
              borderRadi={10}
              onPress={showTodaysBirthdays}
            />
          </View>
        </View>
        {isCalendarVisible && (
          <View style={styles.calendarOverlay}>
            <Calendar
              onDayPress={onDayPress}
              markedDates={
                selectedDate ? { [selectedDate]: { selected: true } } : {}
              }
              style={{
                width: "80%",
                alignSelf: "center",
                marginTop: 10,
                elevation: 5,
                borderRadius: 10,
              }}
            />
          </View>
        )}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
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
      <View style={styles.tableContainer}>
        <View style={styles.headerTopBar}>
          <Text style={styles.headerTopBarText}>Users</Text>
        </View>
        <View style={styles.header}>
          <Text style={[styles.heading]}>Sr.No.</Text>
          <Text style={[styles.heading]}>Birthday</Text>
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

export default BirthdayList;