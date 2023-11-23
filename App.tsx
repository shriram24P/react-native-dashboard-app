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
import BirthdayList from "./src/views/screens/search/searchsubcomponents/BirthdayList";
import BoothList from "./src/views/screens/search/searchsubcomponents/BoothList";
import LastNameList from "./src/views/screens/search/searchsubcomponents/LastNameList";
import AddressList from "./src/views/screens/search/searchsubcomponents/AddressList";
import ProblemWiseList from "./src/views/screens/search/searchsubcomponents/ProblemWiseList";
import CasteList from "./src/views/screens/search/searchsubcomponents/CasteList";
import FavourWiseList from "./src/views/screens/search/searchsubcomponents/FavourWiseList";
import NagarWiseList from "./src/views/screens/search/searchsubcomponents/NagarWiseList";
import SocietyWiseList from "./src/views/screens/search/searchsubcomponents/SocietyWiseList";
import PostWiseList from "./src/views/screens/search/searchsubcomponents/PostWiseList";
import PartyWorkerList from "./src/views/screens/search/searchsubcomponents/PartyWorker";
import ServiceCodeList from "./src/views/screens/search/searchsubcomponents/ServiceCodeList";
import BeneficiaryList from "./src/views/screens/search/searchsubcomponents/BeneficiaryList";
import MigratedList from "./src/views/screens/search/searchsubcomponents/MigratedList";
import SurveyScreen from "./src/views/screens/survey/SurveyScreen";
import SurveyDateWiseList from "./src/views/screens/survey/SurveyDateWiseList";
import BoothManagement from "./src/views/screens/boothmanagement/BoothManagement";
import AboutUs from "./src/views/screens/AboutUs";
import Sync from "./src/views/screens/Sync";
import NonVoters from "./src/views/screens/NonVoters";
import NonVotersEntry from "./src/views/screens/NonVoters/NonVotersEntry";
import CustomDrawer from "./src/views/components/CustomDrawer";
import { ThemeProvider, useTheme } from "./src/customTheme/ThemeContext";
import { StyleSheet } from "react-native";

export type RootDrawerParamList = {
  Home: undefined;
  Register: undefined;
  Dashboard: undefined;
  SearchScreen: undefined;
  VoterList: undefined;
  BirthdayList: undefined;
  BoothList: undefined;
  LastNameList: undefined;
  AddressList: undefined;
  ProblemWiseList: undefined;
  CasteList: undefined;
  FavourWiseList: undefined;
  NagarWiseList: undefined;
  SocietyWiseList: undefined;
  PostWiseList: undefined;
  PartyWorkerList: undefined;
  ServiceCodeList: undefined;
  BeneficiaryList: undefined;
  MigratedList: undefined;
  SurveyScreen: undefined;
  SurveyDateWiseList: undefined;
  BoothManagement: undefined;
  AboutUs: undefined;
  Sync: undefined;
  NonVoters: undefined;
  NonVotersEntry: undefined;
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
    <ThemeProvider>
      <NavigationContainer>
        <>
          <Drawer.Navigator
            initialRouteName={"Home"}
            screenOptions={{
              drawerStyle: { backgroundColor: "#0095b2" },
              headerStyle: {
                backgroundColor: "#0095b2",
              },
              headerTintColor: "#fff",
              drawerLabelStyle: {
                color: "white",
              },
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
            <Drawer.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="VoterList"
              component={VoterList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="BirthdayList"
              component={BirthdayList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="BoothList"
              component={BoothList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="LastNameList"
              component={LastNameList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="AddressList"
              component={AddressList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="ProblemWiseList"
              component={ProblemWiseList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="CasteList"
              component={CasteList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="FavourWiseList"
              component={FavourWiseList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="NagarWiseList"
              component={NagarWiseList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="SocietyWiseList"
              component={SocietyWiseList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="PostWiseList"
              component={PostWiseList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="PartyWorkerList"
              component={PartyWorkerList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="ServiceCodeList"
              component={ServiceCodeList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="BeneficiaryList"
              component={BeneficiaryList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="MigratedList"
              component={MigratedList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="SurveyScreen"
              component={SurveyScreen}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="BoothManagement"
              component={BoothManagement}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />

            <Drawer.Screen
              name="Sync"
              component={Sync}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="SurveyDateWiseList"
              component={SurveyDateWiseList}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="NonVoters"
              component={NonVoters}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
            <Drawer.Screen
              name="NonVotersEntry"
              component={NonVotersEntry}
              options={() => ({
                drawerItemStyle: { height: 0 },
              })}
            />
          </Drawer.Navigator>
        </>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#1d3557",
  },
  text: {
    fontSize: 24,
  },
  lightText: {
    color: "#38385b",
  },
  darkText: {
    color: "white",
  },
  footer: {
    margin: 10,
  },
});
export default App;
