import React from "react";
import { Outlet } from "react-router-dom";
import PanelRight from "./PanelRight";

const Panel = () => {
  return (
    <div className="flex items-center justify-between">
      <PanelRight />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;
