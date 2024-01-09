import {
  configureStore,
  combineReducers,
  ThunkDispatch,
  AnyAction,
} from "@reduxjs/toolkit";
import { matchReducer } from "../slices/matchs-slice";

const rootReducer = combineReducers({
  match: matchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
