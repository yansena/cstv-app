import { Image, Text, View, Avatar } from "native-base";
import React from "react";

type AvatarProps = {
  uri?: string;
  teamName?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

export function ImageAvatar({ uri, teamName, size }: AvatarProps) {
  return (
    <>
      {!uri ? (
        <Avatar bg="gray.500" size={size ? size : "lg"} />
      ) : (
        <Image
          source={{
            uri: uri,
          }}
          alt="Alternate Text"
          size={size ? size : "md"}
          resizeMode="contain"
          maxW={"70px"}
        />
      )}
    </>
  );
}
