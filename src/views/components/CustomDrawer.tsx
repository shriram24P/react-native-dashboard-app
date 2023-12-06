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

  const menuItems = [
    { name: "Home", icon: "home" },
    { name: "Login", icon: "enter-outline" },
    { name: "Register", icon: "people-outline" },
    { name: "Dashboard", icon: "browsers-sharp" },
    { name: "AboutUs", icon: "information-outline" },
    { name: "MyComponent", icon: "information-outline" },
  ];

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
          marginTop: -180,
          marginLeft: 5,
          borderTopLeftRadius: 40,
        }}
      >
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.name)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
              width: "95%",
              marginLeft: 5,
              backgroundColor:
                state.index === index ? "rgba(0, 0, 0, 0.1)" : "transparent",
            }}
          >
            <Icon name={item.icon} size={20} color={"white"} />
            <Text style={{ marginLeft: 10, color: "white", fontSize: 16 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 320,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 30,
          }}
        >
          <Icon name="log-out-outline" size={20} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 5,
              paddingHorizontal: 5,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 1.5,
            width: "90%",
            backgroundColor: "grey",
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
            marginLeft: -12,
            paddingVertical: 5,
          }}
        >
          <Icon
            name="language"
            size={20}
            color="white"
            style={{ marginLeft: 40 }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              paddingHorizontal: 5,
              marginRight: 62,
              marginLeft: 10,
            }}
          >
            {t("lng")}
          </Text>
          <View style={{}}>
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
            marginLeft: -12,
            marginTop: 10,
            paddingVertical: 5,
          }}
        >
          <Icon
            name="moon"
            size={20}
            color="white"
            style={{ marginLeft: 40 }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontSize: 16,
              marginRight: 32,
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
