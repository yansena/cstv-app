import React from "react";
import { PlayerProps } from "@data/redux/slices/teams-slice";
import { Avatar, HStack, Image, Text, VStack, View } from "native-base";
import { ImageAvatar } from "@presentation/components/atoms/ImageAvatar";
import { Platform } from "react-native";

type PlayerCardProps = {
  player: PlayerProps;
};

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <View
      rounded={"lg"}
      backgroundColor={"blue.600"}
      ml={Platform.OS === "ios" ? "-48" : "-32"}
      m={"2"}
      p={"2"}
    >
      <HStack justifyContent={"flex-end"}>
        <VStack>
          <Text fontWeight={"bold"} fontSize={"lg"}>
            {player.slug?.substring(0, 10)}
          </Text>
          <Text alignSelf={"flex-end"}>{player.name}</Text>
        </VStack>
        <Avatar
          rounded={"xl"}
          size={"lg"}
          ml={"4"}
          mt={"-3"}
          source={{ uri: player.image_url }}
          _image={{
            borderRadius: "xl",
          }}
        />
      </HStack>
    </View>
  );
}
