import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/views/screens/Home";
import Register from "./src/views/screens/Register";
import Loader from "./src/views/components/Loader";
import Dashboard from "./src/views/screens/Dashboard";
import COLORS from "./src/const/Colors";
import SearchScreen from "./src/views/screens/search/SearchScreen";
import VoterList from "./src/views/screens/VoterList/VoterList";

export type RootDrawerParamList = {
  Home: undefined;
  Register: undefined;
  Dashboard: undefined;
  SearchScreen: undefined;
  VoterList: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App: React.FC = () => {
  // const [initialRoute, setInitialRoute] = React.useState<
  //   keyof RootDrawerParamList | undefined
  // >(undefined);

  // function handleInitialRoute() {
  //   setInitialRoute("Home");
  // }

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     handleInitialRoute();
  //   }, 2000);
  // });

  return (
    <NavigationContainer>
      <>
        <Drawer.Navigator
          initialRouteName={"Home"}
          screenOptions={{
            drawerStyle: { backgroundColor: COLORS.darkBlue },
            headerStyle: {
              backgroundColor: COLORS.darkBlue,
            },
            headerTintColor: "#fff",
            drawerLabelStyle: {
              color: "white",
            },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="SearchScreen" component={SearchScreen} />
          <Drawer.Screen name="VoterList" component={VoterList} />
        </Drawer.Navigator>
      </>
    </NavigationContainer>
  );
};

export default App;

// options={() => ({
//   title: t("home"),
//   headerBackVisible: false,
//   headerTitleStyle: {
//     color: COLORS.white,
//   },
// })}
