import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(
  () => import(/* webpackChunkName: "Main", webpackPrefetch: true */ "scene/Main/Main")
);

const Secondary = React.lazy(
  () =>
    import(/* webpackChunkName: "Secondary", webpackPrefetch: true */ "scene/Secondary/Secondary")
);

const NotFound = React.lazy(
  () =>
    import(/* webpackChunkName: "NotFound", webpackPrefetch: true */ "components/NotFound/NotFound")
);

const RoutesContainer: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<div>loader</div>}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/secondary' element={<Secondary />} />
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesContainer;
