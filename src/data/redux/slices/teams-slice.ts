import { api } from "@data/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideogameTitleProps } from "./matchs-slice";

export type PlayerProps = {
  age?: number;
  birthday?: string;
  first_name?: string;
  id: number;
  image_url?: string;
  last_name?: string;
  modified_at?: string;
  name: string;
  nationality?: string;
  role?: string;
  slug?: string;
};

type TeamOpponentsProps = {
  acronym?: string;
  current_videogame: VideogameTitleProps[];
  id: number;
  image_url?: string;
  location: string | null;
  modified_at: string;
  name: string;
  players: PlayerProps[];
  slug: string;
};

type TeamsProps = {
  opponent_type: string;
  opponents: [];
};

type fetchOpponentsByMatchIdProps = {
  id: number;
  access_token: string;
};

export const fetchOpponentsByMatchId = createAsyncThunk(
  "teams/fetchOpponentsByMatchId",
  async (payload: fetchOpponentsByMatchIdProps) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${payload.access_token}`,
        },
      };

      const response = await api.get(
        `/matches/${payload.id}/opponents`,
        config
      );
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

type TeamsInitProps = {
  teams: TeamOpponentsProps[];
  loading: boolean;
};

const initialState: TeamsInitProps = {
  teams: [],
  loading: false,
};

const teamsSlice = createSlice({
  name: "matchs",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOpponentsByMatchId.fulfilled, (state, action) => {
      state.teams = action.payload.opponents;
      state.loading = false;
    });
    builder.addCase(fetchOpponentsByMatchId.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchOpponentsByMatchId.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { actions, reducer } = teamsSlice;
export const useMatchs = () => actions;
export const teamsReducer = reducer;
