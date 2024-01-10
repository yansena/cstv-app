import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, ChevronLeftIcon, HStack, VStack } from "native-base";
import React from "react";
type HeadProps = {
  title: string;
  league: string;
  serie: string;
};
export function Head({ title, league, serie }: HeadProps) {
  const navigation = useNavigation();
  return (
    <HStack alignItems={"center"} px={"6"}>
      <Pressable onPress={() => navigation.goBack()} mr={"5"}>
        <ChevronLeftIcon />
      </Pressable>
      {/* <Text color={"white"}>{title}</Text> */}
      <VStack justifyContent={"center"} alignItems={"center"} flex={2}>
        <Text color={"white"} alignSelf={"center"}>
          {league}
        </Text>
        <Text color={"white"}>{serie}</Text>
      </VStack>
    </HStack>
  );
}
