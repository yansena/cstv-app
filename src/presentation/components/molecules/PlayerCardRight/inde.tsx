import React from "react";
import { PlayerProps } from "@data/redux/slices/teams-slice";
import { Avatar, HStack, Image, Text, VStack, View } from "native-base";

type PlayerCardProps = {
  player: PlayerProps;
};

export function PlayerCardRight({ player }: PlayerCardProps) {
  return (
    <View
      rounded={"lg"}
      backgroundColor={"blue.600"}
      mr={"-40"}
      m={"2"}
      p={"2"}
    >
      <HStack>
        <Avatar
          size={"lg"}
          mt={"-3"}
          mr={"4"}
          rounded={"xl"}
          _image={{
            borderRadius: "xl",
          }}
          source={{ uri: player.image_url }}
        />
        <VStack>
          <Text fontWeight={"bold"} fontSize={"lg"}>
            {player.slug?.substring(0, 10)}
          </Text>
          <Text alignSelf={"flex-start"}>{player.name}</Text>
        </VStack>
      </HStack>
    </View>
  );
}
