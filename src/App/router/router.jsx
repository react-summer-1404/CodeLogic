import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../components/pages/auth/Login/LoginPage";


const router = createBrowserRouter([

    { path: "/login", element: <LoginPage /> }
]);

export default router;
