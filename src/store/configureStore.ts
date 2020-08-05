import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { ApplicationState, createRootReducer, rootSaga } from ".";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
