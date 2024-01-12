import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
