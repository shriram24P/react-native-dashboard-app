// import { View, Text } from "react-native";
// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// // add all screens
// import Dashboard from "../screens/Dashboard";
// import Login from "../screens/Login";
// import Signup from "../screens/Signup";

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const MainDrawer = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="MainDashboard">
//           {() => (
//             <Drawer.Navigator>
//               <Drawer.Screen name="Dashboard" component={Dashboard} />
//               <Drawer.Screen name="Login" component={Login} />
//               <Drawer.Screen name="Signup" component={Signup} />
//             </Drawer.Navigator>
//           )}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MainDrawer;
