import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../../pages/Landing/Landing";
import Layout from "../../components/layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Landing /> }],
  },
]);

export default router;
