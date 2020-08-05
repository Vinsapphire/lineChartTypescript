import { combineReducers, AnyAction, Reducer } from "redux";
import { pointsReducer, pointsSaga } from "./points";
import { IPointsState } from "./points/types";
import { all, fork } from "redux-saga/effects";

export interface ApplicationState {
  points: IPointsState;
}

export const createRootReducer = (): Reducer<ApplicationState, AnyAction> => {
  return combineReducers<ApplicationState>({
    points: pointsReducer,
  });
};

export function* rootSaga() {
  yield all([fork(pointsSaga)]);
}
