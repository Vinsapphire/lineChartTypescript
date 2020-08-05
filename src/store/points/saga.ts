import { callApiPost } from "../../api";
import { PayloadAction } from "typesafe-actions";
import { getPointsSuccess, getPointsFailed } from "./actions";
import { takeEvery, all, fork, call, put } from "redux-saga/effects";
import { PointsActionTypes, IPointRequestConfig } from "./types";

export function* handleFetch({
  payload,
}: PayloadAction<PointsActionTypes.GET_POINTS_REQUEST, IPointRequestConfig>) {
  try {
    const response = yield call<any>(callApiPost, {
      method: "GET",
      url: `/points?from=${payload.startingPoint}&to=${payload.endingPoint}&step=${payload.step}`,
    });
    if (response.status !== 200) {
      yield put(getPointsFailed(response.errorMessage));
    } else {
      yield put(getPointsSuccess(response.data));
    }
  } catch (error) {
    yield put(getPointsFailed(error));
  }
}

export function* watchGetPointsRequest() {
  yield takeEvery(PointsActionTypes.GET_POINTS_REQUEST, handleFetch);
}

function* pointsSaga() {
  yield all([fork(watchGetPointsRequest)]);
}

export default pointsSaga;
