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
import FamilyScreen from "./src/views/screens/search/FamilyScreen";

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
  FamilyScreen: undefined;
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
          <Drawer.Screen name="BirthdayList" component={BirthdayList} />
          <Drawer.Screen name="BoothList" component={BoothList} />
          <Drawer.Screen name="LastNameList" component={LastNameList} />
          <Drawer.Screen name="AddressList" component={AddressList} />
          <Drawer.Screen name="ProblemWiseList" component={ProblemWiseList} />
          <Drawer.Screen name="CasteList" component={CasteList} />
          <Drawer.Screen name="FavourWiseList" component={FavourWiseList} />
          <Drawer.Screen name="NagarWiseList" component={NagarWiseList} />
          <Drawer.Screen name="SocietyWiseList" component={SocietyWiseList} />
          <Drawer.Screen name="PostWiseList" component={PostWiseList} />
          <Drawer.Screen name="PartyWorkerList" component={PartyWorkerList} />
          <Drawer.Screen name="ServiceCodeList" component={ServiceCodeList} />
          <Drawer.Screen name="BeneficiaryList" component={BeneficiaryList} />
          <Drawer.Screen name="MigratedList" component={MigratedList} />
          <Drawer.Screen name="SurveyScreen" component={SurveyScreen} />
          <Drawer.Screen name="BoothManagement" component={BoothManagement} />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
          <Drawer.Screen name="Sync" component={Sync} />
          <Drawer.Screen
            name="SurveyDateWiseList"
            component={SurveyDateWiseList}
          />
          <Drawer.Screen name="NonVoters" component={NonVoters} />
          <Drawer.Screen name="NonVotersEntry" component={NonVotersEntry} />
          <Drawer.Screen name="FamilyScreen" component={FamilyScreen} />
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
