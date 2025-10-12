import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/auth/Login/LoginPage";
import LoginValidationPage from "../../pages/auth/Login/LoginValidationPage";
import Landing from '../../pages/Landing/Landing'
import Layout from "../../components/layouts/layout";
import ForgotPasswordStepOne from "../../pages/auth/forgotPassword/forgotPasswordStepOne";
import ForgotPasswordStepTwo from "../../pages/auth/forgotPassword/ForgotPasswordStepTwo";
import NewsListSection from "../../components/NewsListSection/NewsListSection";
import TitleNewsSection from "../../components/NewsListSection/TitleNewsSection";





const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Landing /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/loginValidation", element: <LoginValidationPage /> },
            { path: "/forgotPassOne", element: <ForgotPasswordStepOne /> },
            { path: "/forgotPassTwo", element: <ForgotPasswordStepTwo /> },
        ]
    }
]);

export default router;
