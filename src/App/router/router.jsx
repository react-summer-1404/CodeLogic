import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import LoginPage from "../../pages/auth/Login/LoginPage";
import LoginValidationPage from "../../pages/auth/Login/LoginValidationPage";
import Landing from "../../pages/Landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, element: <Landing /> },
      { path: "login", element: <LoginPage /> },
      { path: "loginValidation", element: <LoginValidationPage /> },
    ],
  },
]);

export default router;
