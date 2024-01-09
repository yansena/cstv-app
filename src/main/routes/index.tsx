import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./navigation/Stack";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
