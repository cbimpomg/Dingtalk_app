import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Welcome from "./Screen/Welcome";
import LoginScreen from "./Screen/LoginScreen";
import CreateNewAccount from "./Screen/CreateNewAccount";
import VerifyScreen from "./Screen/VerifyScreen";
import SetPassword from "./Screen/SetPassword";
import GetStarted from "./Screen/GetStarted";
import ForgetPassword from "./Screen/ForgetPassword";
import HomeScreen from "./Screen/HomeScreen";
import Startchart from "./Screen/Startchart";

const Stack = createStackNavigator();

const screens = [
  { name: "Welcome", component: Welcome },
  { name: "Login", component: LoginScreen },
  { name: "CreateNewAccount", component: CreateNewAccount },
  { name: "VerifyScreen", component: VerifyScreen },
  { name: "SetPassword", component: SetPassword },
  { name: "GetStarted", component: GetStarted },
  { name: "ForgetPassword", component: ForgetPassword },
  { name: "Home", component: HomeScreen },
  { name: "Startchart", component: Startchart },
];

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#101223" },
          ...TransitionPresets.SlideFromRightIOS, // Use a smoother transition preset
        }}
      >
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
