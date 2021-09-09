import { ModalType } from "reducers/AppReducer/types";
import { SET_MODAL } from "store/constants/app";
import { ActionSetModalType } from "./types";

export const actionSetModal = (modal: ModalType): ActionSetModalType => ({
  type: SET_MODAL,
  modal
});
