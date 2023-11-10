// UserTable.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { UserData } from "../screens/search/SearchScreen"; // Assuming UserData interface is in the same file

interface UserTableProps {
  data: UserData[];
}

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  const keyExtractor = (item: UserData) => item.id.toString();

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }: { item: UserData }) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
            marginLeft: 10,
          }}
        >
          {typeof item.image === "number" ? (
            <Image
              source={item.image}
              style={{ width: 50, height: 50, marginRight: 40 }}
            />
          ) : (
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, marginRight: 40 }}
            />
          )}
          <Text style={{ width: 90 }}>{item.name}</Text>
          <Text style={{ width: 110 }}>{item.phone}</Text>
        </View>
      )}
    />
  );
};

export default UserTable;
