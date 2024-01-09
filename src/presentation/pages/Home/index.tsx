import { View, Text } from "react-native";
import React from "react";
import { Box } from "native-base";
import { useAppDispatch, useAppSelector } from "@domain/hooks/redux-hooks";
import { fetchMatchs } from "@data/redux/slices/matchs-slice";
// import {  } from '@env';

export function Home() {
  const token = process.env.EXPO_PUBLIC_ACCESS_TOKEN;
  const dispatch = useAppDispatch();
  const { matchs } = useAppSelector((state) => state.match);
  console.log("🚀 ~ Home ~ matchs:", matchs);

  const fetchIniitalMatchs = React.useCallback(async () => {
    try {
      if (token) {
        dispatch(fetchMatchs({ access_token: token })).then((res) => {});
      }
    } catch (error) {
      console.log("🚀 ~ fetchIniitalMatchs ~ error", error);
    }
  }, []);

  React.useEffect(() => {
    fetchIniitalMatchs();
  }, []);

  return (
    <Box backgroundColor={"amber.500"}>
      <Text>This is my HOME component!</Text>
    </Box>
  );
}
