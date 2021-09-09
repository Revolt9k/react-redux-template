import { AppActionTypes } from "store/actions/app/types";
import { SET_MODAL } from "../../constants/app";
import { AppInitialStateType } from "./types";

const initialState: AppInitialStateType = {
  modal: "disabled",
  baseURL: ""
};

const AppReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
  switch (action.type) {
    case SET_MODAL: {
      return {
        ...state,
        modal: action.modal
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
