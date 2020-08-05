import { ApplicationState } from "..";
import { IPoint } from "./types";

export const selectPoints = (state: ApplicationState): IPoint[] =>
  state.points.points;

export const getLoadingState = (state: ApplicationState): boolean =>
  state.points.loading;
