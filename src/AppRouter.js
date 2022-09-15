import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function AppRouter() {
  const user = false;
  return (
    <Routes>
      {publicRoutes.map((item, i) => (
        <Route path={item.path} element={item.element} key={i} />
      ))}
    </Routes>
  );
}

export default AppRouter;
