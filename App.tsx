import { NativeBaseProvider, Box } from "native-base";
import { Routes } from "./src/main/routes";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@data/redux/store/";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { theme } from "@presentation/theme/theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <StatusBar style="light" />
          <Routes />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
