import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastProvider } from "react-native-toast-notifications";

import { ThemeProvider } from "./src/views/customTheme/ThemeContext";
import COLORS from "./src/const/Colors";
import { useTranslation } from "react-i18next";

import Login from "./src/views/screens/Login";
import Signup from "./src/views/screens/Signup";
import Loader from "./src/views/components/Loader";
import FooterMenu from "./src/views/screens/FooterMenu";
import Dashboard from "./src/views/screens/Dashboard";
import Profile from "./src/views/screens/Profile";

const Drawer = createDrawerNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = React.useState("");

  const { t } = useTranslation();

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData.loggedIn) {
          setInitialRoute("Profile");
        } else {
          setInitialRoute("Dashboard");
        }
      } else {
        setInitialRoute("Signup");
      }
    } catch (error) {
      setInitialRoute("Signup");
    }
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <NavigationContainer>
          {!initialRoute ? (
            <Loader visible={true} />
          ) : (
            <>
              <Drawer.Navigator
                initialRouteName={initialRoute}
                screenOptions={{
                  drawerStyle: { backgroundColor: "#7978B5" },
                  headerStyle: {
                    backgroundColor: COLORS.darkBlue,
                  },
                  headerTintColor: "#fff",
                  drawerLabelStyle: {
                    color: "white",
                  },
                }}
              >
                <Drawer.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={() => ({
                    title: t("home"),
                    headerBackVisible: false,
                    headerTitleStyle: {
                      color: COLORS.white,
                    },
                  })}
                />
                <Drawer.Screen
                  name="Signup"
                  component={Signup}
                  options={() => ({
                    title: t("signup"),
                    headerBackVisible: false,
                    headerTitleStyle: {
                      color: COLORS.white,
                    },
                  })}
                />

                <Drawer.Screen
                  name="Login"
                  component={Login}
                  options={() => ({
                    title: t("login"),
                    headerBackVisible: false,
                    headerTitleStyle: {
                      color: COLORS.white,
                    },
                  })}
                />
                <Drawer.Screen
                  name="Profile"
                  component={Profile}
                  options={() => ({
                    drawerItemStyle: { height: 0 },
                  })}
                />
              </Drawer.Navigator>
              <FooterMenu />
            </>
          )}
        </NavigationContainer>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
