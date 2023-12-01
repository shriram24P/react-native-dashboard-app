// CustomDrawer.tsx

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { initReactI18next, useTranslation } from "react-i18next";
import i18next from "i18next";
import { languageResources } from "../../../services/i18next";
import SettingsScreen from "../../customTheme/SettingScreen";
import { Switch } from "react-native-switch";
import Icon from "react-native-vector-icons/Ionicons";
interface CustomDrawerProps extends DrawerContentComponentProps {}

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "eng",
  resources: languageResources,
});

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const { navigation, state, descriptors, ...rest } = props;
  const [isDarkMode, setDarkMode] = React.useState(false);

  const { t } = useTranslation();

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const changeLng = () => {
    const handleLanguage = i18next.language === "en" ? "ma" : "en";
    i18next.changeLanguage(handleLanguage);
  };

  return (
    <DrawerContentScrollView {...rest}>
      {/* Your custom drawer header */}

      {/* Drawer items */}
      <DrawerItemList {...{ navigation, state, descriptors }} />

      {/* Custom drawer content */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: -210,
          marginLeft: 15,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            {t("home")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="enter-outline" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            {t("login")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Icon name="people-outline" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            {t("register")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Icon name="browsers-sharp" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <Icon name="information-outline" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            About Us
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 410,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 20,
          }}
        >
          <Icon name="log-out-outline" size={22} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 2,
            width: "90%",
            backgroundColor: "white",
            marginLeft: 20,
            marginBottom: 20,
            elevation: 5,
          }}
        ></View>
        <View
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            paddingVertical: 5,
          }}
        >
          <Icon name="language" size={22} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              paddingHorizontal: 5,
              marginRight: 60,
              marginLeft: -10,
            }}
          >
            {t("lng")}
          </Text>
          <View style={{ marginRight: -20 }}>
            <Switch
              value={i18next.language === "ma"}
              onValueChange={changeLng}
              backgroundActive={"white"}
              backgroundInactive={"white"}
              innerCircleStyle={{
                alignItems: "center",
                justifyContent: "center",
                elevation: 3,
              }}
              switchLeftPx={2.5}
              switchRightPx={2.5}
              activeText={""}
              inActiveText={""}
              circleSize={22}
              barHeight={28}
              switchWidthMultiplier={2.4}
              circleActiveColor={"white"}
              circleInActiveColor={"white"}
            />
          </View>
        </View>
        <View
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginTop: 10,
            paddingVertical: 5,
          }}
        >
          <Icon name="moon" size={22} color="white" />
          <Text
            style={{
              color: "white",
              marginLeft: 15,
              fontSize: 18,
              marginRight: 50,
              paddingHorizontal: 5,
            }}
          >
            Dark Mode
          </Text>
          <SettingsScreen />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
