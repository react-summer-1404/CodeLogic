import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from '../../pages/Landing/Landing'
import LoginPage from "../../pages/auth/Login/LoginPage";
import LoginValidationPage from "../../pages/auth/Login/LoginValidationPage";


const router = createBrowserRouter([
    {path: '/', element: <Landing/>},
    { path: "/login", element: <LoginPage /> },
    { path: "/loginValidation", element: <LoginValidationPage /> }
]);

export default router;
