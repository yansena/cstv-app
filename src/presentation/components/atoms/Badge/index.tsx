import { Text, View } from "native-base";
import React from "react";
import { isToday, format, isSameWeek } from "date-fns";
import { ptBR } from "date-fns/locale";

type BadgeProps = {
  status: string;
  date: string;
};

export function Badge({ status, date }: BadgeProps) {
  return (
    <View
      backgroundColor={status === "running" ? "red.500" : "gray.500"}
      borderBottomLeftRadius={"full"}
      borderTopRightRadius={"full"}
      px={"4"}
      py={"1"}
      alignSelf={"flex-end"}
    >
      {status === "running" ? (
        <Text color={"white"} fontWeight={"bold"}>
          AGORA
        </Text>
      ) : (
        <Text color={"white"} fontWeight={"medium"}>
          {isToday(new Date(date))
            ? `Hoje, ${format(new Date(date), "kk:mm")}`
            : `${
                !isSameWeek(new Date(date), new Date(), { weekStartsOn: 1 })
                  ? format(new Date(date), "dd/MM/yyyy")
                  : `${format(new Date(date), "iii ,kk:mm", {
                      locale: ptBR,
                    })}`
              }`}
        </Text>
      )}
    </View>
  );
}
