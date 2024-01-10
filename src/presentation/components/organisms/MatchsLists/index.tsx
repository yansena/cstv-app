import React from "react";
import { FlatList } from "native-base";

import { MatchProps } from "@data/redux/slices/matchs-slice";
import { Card } from "@presentation/components/molecules/MatchCard";

type MatchsListsProps = {
  matchs: MatchProps[];
};

export function MatchsLists({ matchs }: MatchsListsProps) {
  return (
    <FlatList data={matchs} renderItem={({ item }) => <Card match={item} />} />
  );
}
