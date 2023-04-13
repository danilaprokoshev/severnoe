import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { type RootState } from ".";
import { fetchStats } from "../api";

export interface Stat {
  id: string;
  date: string;
  oil: number | string;
  liquid: number | string;
}

export interface CounterState {
  stats: Stat[];
  loadingStatus: "idle" | "loading" | "failed";
  error: string | undefined;
}

const defaultState: CounterState = {
  stats: [],
  loadingStatus: "idle",
  error: "",
};

const getDefaultState = () => {
  if (localStorage.getItem("stats") !== null) {
    return {
      ...defaultState,
      stats: JSON.parse(localStorage.getItem("stats") as string) as Stat[],
    };
  }

  return defaultState;
};

export const getStats = createAsyncThunk("stats/fetchStats", async () => {
  const response = await fetchStats();

  return response.data;
});

const counterSlice = createSlice({
  name: "data",
  initialState: getDefaultState(),
  reducers: {
    setStats: (state, action: PayloadAction<Stat[]>) => {
      state.stats = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(getStats.fulfilled, (state, { payload }) => {
        state.loadingStatus = "idle";
        state.stats = payload;
      })
      .addCase(getStats.rejected, (state, { error }) => {
        state.loadingStatus = "failed";
        state.error = error.message;
      });
  },
});

export const { setStats } = counterSlice.actions;

export const selectStats = (state: RootState): Stat[] => state.data.stats;
export const selectLoadingStatus = (state: RootState) =>
  state.data.loadingStatus;
export const selectErrorMessage = (state: RootState) => state.data.error;

export default counterSlice.reducer;
