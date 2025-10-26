import React from "react";
import { Link } from "react-router-dom";

const PanelRight = () => {
  return (
    <div>
      <Link to="/Panel">
        <p>dashboard</p>
      </Link>
      <Link to="/Panel/UserInfo">
        <p>user</p>
      </Link>
    </div>
  );
};

export default PanelRight;
