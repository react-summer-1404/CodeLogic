import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/auth/Login/LoginPage";
import LoginValidationPage from "../../pages/auth/Login/LoginValidationPage";
import Landing from "../../pages/Landing/Landing";
import Layout from "../../components/layouts/layout";
import StepOne from "../../pages/auth/Register/StepOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/loginValidation", element: <LoginValidationPage /> },
      { path: "/RegisterStepOne", element: <StepOne /> },
    ],
  },
]);

export default router;
