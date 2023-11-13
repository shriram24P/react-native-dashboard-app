import { View, Text, ScrollView } from "react-native";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../../../App";
import ListButtons from "../../components/ListButtons";
import COLORS from "../../../const/Colors";
import { useTranslation } from "react-i18next";

interface VoterListScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "VoterList">;
}

const VoterList = ({ navigation }: VoterListScreenProp) => {
  const { t } = useTranslation();
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginRight: 10,
        }}
      >
        <ListButtons
          iconName=""
          buttonText={t("NamewiseList")}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("bDaywise")}
          onPress={() => {
            navigation.navigate("BirthdayList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("boothwise")}
          onPress={() => {
            navigation.navigate("BoothList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("agewise")}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("mobilewise")}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("alphabetical")}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("lNamewise")}
          onPress={() => {
            navigation.navigate("LastNameList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("addresswise")}
          onPress={() => {
            navigation.navigate("AddressList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("duplicate")}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("problemwise")}
          onPress={() => {
            navigation.navigate("ProblemWiseList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("castewise")}
          onPress={() => {
            navigation.navigate("CasteList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("favourwise")}
          onPress={() => {
            navigation.navigate("FavourWiseList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("nagarwise")}
          onPress={() => {
            navigation.navigate("NagarWiseList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("societywise")}
          onPress={() => {
            navigation.navigate("SocietyWiseList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("postwise")}
          onPress={() => {
            navigation.navigate("PostWiseList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("karyakartawise")}
          onPress={() => {
            navigation.navigate("PartyWorkerList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("servicecode")}
          onPress={() => {
            navigation.navigate("ServiceCodeList");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("beneficiary")}
          onPress={() => {}}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("migrated")}
          onPress={() => {}}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
        <ListButtons
          iconName=""
          buttonText={t("deadvoterlist")}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
          buttonWidth={170}
          buttonHeight={80}
          bgColor={COLORS.purple}
        />
      </View>
    </ScrollView>
  );
};

export default VoterList;
