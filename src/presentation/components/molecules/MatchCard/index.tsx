import { ImageAvatar } from "@presentation/components/atoms/ImageAvatar";
import { Badge } from "@presentation/components/atoms/Badge";
import {
  Avatar,
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import { MatchProps, OpponentsProps } from "@data/redux/slices/matchs-slice";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParamList } from "src/main/routes/navigation/Stack";

type CardProps = {
  match: MatchProps;
};

export function Card({ match }: CardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigatorParamList>>();

  return (
    <Pressable
      onPress={() => navigation.navigate("MatchDetail", { match: match })}
      backgroundColor={"blue.600"}
      rounded={"3xl"}
      mb={"4"}
    >
      <Badge status={match.status} date={match.scheduled_at} />
      <HStack
        width={wp("45%")}
        alignSelf={"center"}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={"5"}
      >
        <VStack alignItems={"center"} justifyContent={"center"}>
          <ImageAvatar uri={match.opponents[0]?.opponent.image_url} />
          <Text fontSize={"sm"} color={"gray.400"}>
            {match.opponents[0] && match.opponents[0].opponent
              ? match.opponents[0].opponent.name
              : ""}
          </Text>
        </VStack>
        <Text fontSize={"sm"} color={"gray.400"}>
          vs
        </Text>
        <VStack alignItems={"center"}>
          <ImageAvatar uri={match.opponents[1]?.opponent.image_url} />
          <Text fontSize={"sm"} color={"gray.400"}>
            {match.opponents[1] && match.opponents[1].opponent
              ? match.opponents[1].opponent.name
              : ""}
          </Text>
        </VStack>
      </HStack>

      <HStack
        borderTopWidth={"1"}
        borderColor={"gray.100"}
        pl={"2"}
        alignItems={"center"}
        p={"1"}
      >
        <Image
          source={{ uri: match.league.image_url }}
          alt="Alternate Text"
          size="8"
          resizeMode="cover"
        />
        <Text ml={"4"}>{match.league.name}</Text>
      </HStack>
    </Pressable>
  );
}
