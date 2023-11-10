import { View, Text, ScrollView } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";
import ListButtons from "../../components/ListButtons";
import COLORS from "../../../const/Colors";

interface VoterListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "VoterList">;
}

const VoterList = ({ navigation }: VoterListScreenProp) => {
  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ListButtons
          iconName=""
          buttonText="Namewise List"
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Birthdaywise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Boothwise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Agewise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Mobile No. List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Alphabetical List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Last Namewise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Addresswise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Duplicate Voters"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Problemwise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Castewise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Favourwise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Nagarwise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Societywise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Postwise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Karyakartawise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Service Code Wise List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Beneficiary List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Migrated List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText="Dead Voter List"
          onPress={() => {}}
          buttonWidth={140}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
      </View>
    </ScrollView>
  );
};

export default VoterList;
