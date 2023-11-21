// UserTable.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { UserData } from "../screens/search/SearchScreen"; // Assuming UserData interface is in the same file

interface UserTableProps {
  data: UserData[];
  onEdit: (userData: UserData) => void;
}

const UserTable: React.FC<UserTableProps> = ({ data, onEdit }) => {
  const keyExtractor = (item: UserData) => item.id.toString();

  const renderItem = ({ item }: { item: UserData }) => (
    <TouchableOpacity onPress={() => onEdit(item)}>
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
    </TouchableOpacity>
  );

  return (
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};

export default UserTable;
