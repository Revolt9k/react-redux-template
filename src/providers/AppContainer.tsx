import React from "react";
import store from "store/index";
import { instance } from "../api/instance";
import Routes from "../routing/Routes";

const AppContainer = (): React.ReactElement => {
  instance.interceptors.request.use((config) => {
    if (store.getState().app.baseURL) {
      config.baseURL = `${store.getState().app.baseURL}/api/`;
    }
    return config;
  });

  return (
    <>
      <Routes />
    </>
  );
};

export default AppContainer;
