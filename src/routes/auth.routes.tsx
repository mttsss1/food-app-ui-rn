import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";

const {Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Screen
      name="Home"
      component={Home}
      />
      <Screen
      name="Details"
      component={Details}
      />
    </Navigator>
  )
}