import { NativeBaseProvider, Box } from "native-base";
import { Routes } from "./src/main/routes";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@data/redux/store/";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
}
