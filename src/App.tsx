import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

import DefaultLayout from "./layouts/DefaultLayout";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <React.Suspense fallback={<Loader />}>
                    <Component />
                  </React.Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
