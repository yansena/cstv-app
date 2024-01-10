import React from "react";
import { format, isToday } from "date-fns";
import { useRoute } from "@react-navigation/native";

import { MatchProps } from "@data/redux/slices/matchs-slice";
import { useAppDispatch, useAppSelector } from "@domain/hooks/redux-hooks";
import { Head } from "@presentation/components/molecules/HeadDetail";
import { FlatList, HStack, Spinner, Text, VStack, View } from "native-base";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fetchMatchById } from "@data/redux/slices/matchs-slice";
import { fetchOpponentsByMatchId } from "@data/redux/slices/teams-slice";
import { PlayerCard } from "@presentation/components/molecules/PlayerCard/inde";
import { PlayerCardRight } from "@presentation/components/molecules/PlayerCardRight/inde";
import { Platform } from "react-native";

export function MatchDetail() {
  const token = process.env.EXPO_PUBLIC_ACCESS_TOKEN;
  const { match } = useRoute().params as { match: MatchProps };
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const { teams: actualMatch, loading } = useAppSelector(
    (state) => state.teams
  );

  // const matchSelected = params.match as MatchProps;
  const fetchSelectedMatchDetails = React.useCallback(async () => {
    try {
      if (token) {
        dispatch(
          fetchOpponentsByMatchId({ access_token: token, id: match.id })
        ).then((res) => {});
      }
    } catch (error) {}
  }, []);

  React.useEffect(() => {
    fetchSelectedMatchDetails();
  }, []);

  if (!actualMatch) {
    return <Spinner size={"md"} color={"white"} />;
  }

  return (
    <View
      flex={1}
      paddingTop={Platform.OS === "ios" ? insets.top : "10"}
      backgroundColor={"blue.900"}
      w={widthPercentageToDP("100%")}
    >
      <Head match={match} />

      <View w={"100%"} alignItems={"center"} my={"6"}>
        {isToday(new Date(match.scheduled_at)) ? (
          <Text fontSize={"lg"}>
            {`Hoje, ${format(new Date(match.scheduled_at), "kk:mm")}`}
          </Text>
        ) : (
          <Text fontSize={"lg"}>
            {`${format(new Date(match.scheduled_at), "EEEE")} ${format(
              new Date(match.scheduled_at),
              "dd/MM"
            )}`}
          </Text>
        )}
      </View>

      <HStack flex={1} justifyContent={"space-between"}>
        {!loading ? (
          <>
            {actualMatch.length > 1 ? (
              <>
                <FlatList
                  data={actualMatch[0].players}
                  renderItem={
                    ({ item }) => <PlayerCard player={item} />
                    // <Card match={item} />
                  }
                />
                <FlatList
                  data={actualMatch[1].players}
                  renderItem={({ item }) => {
                    return <PlayerCardRight player={item} />;
                  }}
                />
              </>
            ) : (
              <Text> Sem jogadores carregados</Text>
            )}
          </>
        ) : (
          <Spinner size={"md"} color={"white"} />
        )}
      </HStack>
    </View>
  );
}
