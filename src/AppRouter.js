import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import Navbar from "./components/Navbar";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* {publicRoutes.map((item, i) => (
          <Route path={item.path} element={item.element} key={i} />
        ))} */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/test" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
}

export default AppRouter;
