import { Reducer } from "redux";
import { IPointsState, PointsActionTypes } from "./types";

export const initialState: IPointsState = {
  errors: "",
  loading: false,
  points: [],
};

export const pointsReducer: Reducer<IPointsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PointsActionTypes.GET_POINTS_REQUEST: {
      return { ...state, loading: true };
    }
    case PointsActionTypes.GET_POINTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        points: action.payload,
      };
    }
    case PointsActionTypes.GET_POINTS_FAILED: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
