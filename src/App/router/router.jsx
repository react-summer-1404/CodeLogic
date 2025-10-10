import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../components/pages/auth/Login/LoginPage";
import LoginValidationPage from "../../components/pages/auth/Login/LoginValidationPage";


const router = createBrowserRouter([

    { path: "/login", element: <LoginPage /> },
    { path: "/loginValidation", element: <LoginValidationPage /> }
]);

export default router;
