import { NativeBaseProvider, Box } from "native-base";
import { Routes } from "./src/main/routes";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
