import React, { memo } from "react";
import { Platform, RefreshControl } from "react-native";
import { Box, View, Text, Heading, FlatList, Spinner } from "native-base";
import { useAppDispatch, useAppSelector } from "@domain/hooks/redux-hooks";
import { fetchMatchs } from "@data/redux/slices/matchs-slice";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "@presentation/components/molecules/MatchCard";

export const Home = memo(() => {
  const token = process.env.EXPO_PUBLIC_ACCESS_TOKEN;
  const dispatch = useAppDispatch();
  const { matchs, loading } = useAppSelector((state) => state.match);

  const insets = useSafeAreaInsets();

  const memoizedMatchs = React.useMemo(() => matchs, [matchs]);

  const fetchInitialMatchs = React.useCallback(async () => {
    try {
      if (token) {
        dispatch(fetchMatchs({ access_token: token })).then((res) => {});
      }
    } catch (error) {
      console.log("🚀 ~ fetchIniitalMatchs ~ error", error);
    }
  }, []);

  React.useEffect(() => {
    fetchInitialMatchs();
  }, []);

  return (
    <View
      paddingTop={Platform.OS === "ios" ? insets.top : "6"}
      backgroundColor={"blue.900"}
      flex={"1"}
      p={"5"}
    >
      <Heading color={"white"} my={"3"} fontSize={"3xl"}>
        Partidas
      </Heading>
      {loading ? (
        <View flex={1} alignItems={"center"} justifyContent={"center"}>
          <Spinner color={"white"} size={"lg"} />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={memoizedMatchs}
          renderItem={({ item }) => <Card match={item} />}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={fetchInitialMatchs}
            />
          }
        />
      )}
    </View>
  );
});
