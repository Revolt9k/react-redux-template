import { AppInitialStateType } from "reducers/AppReducer/types";
import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import AppReducer from "./reducers/AppReducer";

const allReducers = combineReducers({
  app: AppReducer
});

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const fullState: RootState = JSON.parse(serializedState);

    return fullState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
const persistedState = loadState();
const store = createStore(
  allReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  saveState({
    app: store.getState().app
  });
});

export interface RootState {
  app: AppInitialStateType;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<unknown>
>;

export default store;
