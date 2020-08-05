import { action } from "typesafe-actions";
import { PointsActionTypes, IPointRequestConfig, IPoint } from "./types";

export const getPoints = (config: IPointRequestConfig) =>
  action(PointsActionTypes.GET_POINTS_REQUEST, config);
export const getPointsSuccess = (points: IPoint[]) =>
  action(PointsActionTypes.GET_POINTS_SUCCESS, points);
export const getPointsFailed = (message: string) =>
  action(PointsActionTypes.GET_POINTS_FAILED, message);
