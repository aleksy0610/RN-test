import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../routes";
import {
  FirstScreen,
  SecondScreen,
  ThirdScreen,
  FourthScreen
} from "../screens";
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.FirstScreen}
    >
      <Stack.Screen
        name={Routes.FirstScreen}
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SecondScreen}
        component={SecondScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.ThirdScreen}
        component={ThirdScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FourthScreen}
        component={FourthScreen}
        options={{ headerShown: false }}
      />
      { /*<Stack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{
          title: "",
          headerBackTitle: "",
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name={Routes.EnableLocationScreen}
        component={EnableLocationScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigation;
