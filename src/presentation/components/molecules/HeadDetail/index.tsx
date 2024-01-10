import React from "react";
import { Avatar, HStack, Text, VStack, View } from "native-base";
import { widthPercentageToDP } from "react-native-responsive-screen";

import { MatchProps, OpponentsProps } from "@data/redux/slices/matchs-slice";
import { ImageAvatar } from "@presentation/components/atoms/ImageAvatar";
import { Head as TitleHead } from "@presentation/components/molecules/Head";

type HeadProps = {
  match: MatchProps;
};

export function Head({ match }: HeadProps) {
  return (
    <>
      <TitleHead
        title={`${match.league.name}+${match.serie.name}`}
        league={match.league.name}
        serie={match.serie.name}
      />
      <View mt={"6"}>
        {match.opponents && match.opponents.length > 1 ? (
          <HStack
            alignItems={"center"}
            alignSelf={"center"}
            justifyContent={"space-between"}
          >
            <VStack alignItems={"center"}>
              <ImageAvatar
                uri={match.opponents[0].opponent.image_url}
                teamName={match.opponents[0].opponent.name}
                size="lg"
              />
              <Text color={"gray.100"}>{match.opponents[0].opponent.name}</Text>
            </VStack>
            <Text color={"gray.100"} px={"4"}>
              vs
            </Text>
            <VStack alignItems={"center"}>
              <ImageAvatar
                uri={match.opponents[1].opponent.image_url}
                teamName={match.opponents[1].opponent.name}
                size="lg"
              />
              <Text color={"gray.100"}>{match.opponents[1].opponent.name}</Text>
            </VStack>
          </HStack>
        ) : (
          <HStack
            alignItems={"center"}
            alignSelf={"center"}
            justifyContent={"space-between"}
          >
            <VStack alignItems={"center"}>
              <ImageAvatar
                uri={match.opponents[0].opponent.image_url}
                teamName={match.opponents[0].opponent.name}
                size="lg"
              />
              <Text color={"gray.100"}>{match.opponents[0].opponent.name}</Text>
            </VStack>
            <Text color={"gray.100"} px={"4"}>
              vs
            </Text>
            <VStack alignItems={"center"}>
              <Avatar rounded={"xl"} backgroundColor={"blue.600"} size="lg" />
              {/* <Text color={"gray.100"}>{match.opponents[1].opponent.name}</Text>  */}
            </VStack>
          </HStack>
        )}
      </View>
    </>
  );
}
