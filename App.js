import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/views/screens/Home";
import Login from "./src/views/screens/Login";
import Signup from "./src/views/screens/Signup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "./src/views/components/Loader";
import { ThemeProvider } from "./src/views/customTheme/ThemeContext";
import FooterMenu from "./src/views/screens/FooterMenu";
import Dashboard from "./src/views/screens/Dashboard";
import { ToastProvider } from "react-native-toast-notifications";

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);
  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        userData = JSON.parse(userData);
        if (userData?.loggedIn) {
          setInitialRouteName("Home");
        } else {
          setInitialRouteName("Dashboard");
        }
      } else {
        setInitialRouteName("Signup");
      }
    } catch (error) {
      setInitialRouteName("Signup");
    }
  };
  return (
    <ThemeProvider>
      <ToastProvider>
        <NavigationContainer>
          {initialRouteName == "" ? (
            <Loader visible={true} />
          ) : (
            <>
              <Stack.Navigator
                initialRouteName={initialRouteName}
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Footer" component={FooterMenu} />
              </Stack.Navigator>
              <FooterMenu />
            </>
          )}
        </NavigationContainer>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
