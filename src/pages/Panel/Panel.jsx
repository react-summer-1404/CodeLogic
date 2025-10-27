import React from "react";
import { Outlet } from "react-router-dom";
import PanelRight from "./PanelRight";
import PanelHeader from "./PanelHeader";

const Panel = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between  px-6 dark:bg-[#1e1e1e] ">
      <PanelRight />

      <div className="h-[93.75%] w-[74.04%]   flex flex-col justify-between ">
        <PanelHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;
