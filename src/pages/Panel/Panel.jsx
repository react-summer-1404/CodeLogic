import React from "react";
import { Outlet } from "react-router-dom";
import PanelRightK from "./PanelRight";

const Panel = () => {
  return (
    <div className="flex items-center justify-between">
      <PanelRightK />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;
