import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/views/screens/Home";
import Login from "./src/views/screens/Login";
import Signup from "./src/views/screens/Signup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "./src/views/components/Loader";
import HomeScreen from "./src/views/screens/HomeScreen";
import { ThemeProvider } from "./src/views/customTheme/ThemeContext";
import FooterMenu from "./src/views/screens/FooterMenu";

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
          setInitialRouteName("HomeScreen");
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
      <NavigationContainer>
        {initialRouteName == "" ? (
          <Loader visible={true} />
        ) : (
          <>
            <Stack.Navigator
              initialRouteName={initialRouteName}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
            <FooterMenu />
          </>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
