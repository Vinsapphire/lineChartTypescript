export enum PointsActionTypes {
  GET_POINTS_REQUEST = "@points/GET_POINTS_REQUEST",
  GET_POINTS_SUCCESS = "@points/GET_POINTS_SUCCESS",
  GET_POINTS_FAILED = "@points/GET_POINTS_FAILED",
}

export interface IPointRequestConfig {
  startingPoint: number;
  endingPoint: number;
  step: number;
}

export interface IPoint {
  name: string;
  x: number[];
  y: number[];
}

export interface IPointsState {
  loading: boolean;
  errors?: string;
  points: IPoint[];
}
