export type AppInitialStateType = {
  modal: ModalType;
  baseURL: string;
};

export type ModalType = "disabled" | "main" | "secondary";
