import { api } from "@data/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type TournamentProps = {
  begin_at: string;
  detailed_stats: boolean;
  end_at: string;
  has_bracket: boolean;
  id: number;
  league_id: number;
  live_supported: boolean;
  modified_at: string;
  name: string;
  prizepool: string | null;
  serie_id: number;
  slug: string;
  tier: string;
  winner_id: string | null;
  winner_type: string;
};

type SerieProps = {
  begin_at: string;
  end_at: string;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: string;
  season: string;
  slug: string;
  winner_id: string | null;
  winner_type: string;
  year: number;
};

type WinnerProps = {
  id: string;
  type: string;
};

type GamesProps = {
  begin_at: string | string;
  complete: boolean;
  detailed_stats: boolean;
  end_at: string | null;
  finished: boolean;
  forfeit: boolean;
  id: number;
  length: null;
  match_id: number;
  position: number;
  status: string;
  winner: WinnerProps;
  winner_type: string;
};

type ResultsProps = {
  score: number;
  team_id: number;
};

type VideogameProps = {
  id: number;
  name: string;
  slug: string;
};

export type OpponentProps = {
  acronym: string;
  id: number;
  image_url: string;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
};

export type OpponentsProps = {
  opponent: OpponentProps;
  type: string;
};

export type VideogameTitleProps = {
  id: number;
  name: string;
  slug: string;
  videogame_id: number;
};

export type LeagueProps = {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
  slug: string;
  url: string | null;
};

type LiveProps = {
  opens_at: string | null;
  supported: boolean;
  url: string | null;
};

export type MatchProps = {
  draw: boolean;
  status: string;
  tournament: TournamentProps;
  forfeit: boolean;
  serie: SerieProps;
  original_scheduled_at: string;
  winner_type: string;
  results: Array<ResultsProps>;
  end_at: string | null;
  id: number;
  games: GamesProps[];
  videogame_version: null;
  tournament_id: number;
  videogame: VideogameProps;
  name: string;
  winner: WinnerProps | null;
  opponents: OpponentsProps[];
  slug: string;
  league_id: number;
  streams_list: Array<string>;
  live: LiveProps;
  game_advantage: string | null;
  begin_at: string;
  modified_at: string;
  scheduled_at: string;
  rescheduled: boolean;
  winner_id: string | null;
  detailed_stats: boolean;
  number_of_games: number;
  match_type: boolean;
  league: LeagueProps;
  serie_id: number;
  videogame_title: VideogameTitleProps;
};

type MatchState = {
  matchs: MatchProps[];
  match: MatchProps;
  loading: boolean;
};

const initialState: MatchState = {
  matchs: [],
  match: {} as MatchProps,
  loading: false,
};

type FetchMatchsPayloadProps = {
  access_token: string;
};

type FetchMatchByIdPayloadProps = {
  access_token: string;
  id: string;
};

export const fetchMatchs = createAsyncThunk(
  "matchs/fetchMatchs",
  async (payload: FetchMatchsPayloadProps) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${payload.access_token}`,
        },
        params: {
          sort: "scheduled_at",
          "filter[status]": "running,not_started",
        },
      };

      const response = await api.get("/csgo/matches", config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchMatchById = createAsyncThunk(
  "matchs/fetchMatchById",
  async (payload: FetchMatchByIdPayloadProps) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${payload.access_token}`,
        },
      };

      const response = await api.get(`/matches/${payload.id}`, config);
      console.log("🚀 ~ response:", response.data);
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

const matchSlice = createSlice({
  name: "matchs",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMatchs.fulfilled, (state, action) => {
      state.matchs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMatchs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMatchs.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchMatchById.fulfilled, (state, action) => {
      state.match = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMatchById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMatchById.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { actions, reducer } = matchSlice;
export const useMatchs = () => actions;
export const matchReducer = reducer;
