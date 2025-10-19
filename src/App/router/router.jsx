import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Landing from "../../pages/Landing/Landing";
import CourseList from "../../pages/CourseList/CourseList";
import StepOne from "../../pages/auth/Register/StepOne";
import StepTwo from "../../pages/auth/Register/StepTwo";
import StepThree from "../../pages/auth/Register/StepThree";
import LoginPage from "../../pages/auth/Login/LoginPage";
import LoginValidationPage from "../../pages/auth/Login/LoginValidationPage";
import ForgotPasswordStepOne from "../../pages/auth/forgotPassword/forgotPasswordStepOne";
import ForgotPasswordStepTwo from "../../pages/auth/forgotPassword/ForgotPasswordStepTwo";
import NewsListSection from "../../components/NewsListSection/NewsListSection";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import TeachersPage from "../../pages/Teachers/TeachersPage/TeachersPage";
import TeachersDetail from "../../pages/Teachers/TeachersDetail/TeachersDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: '/courselist', element: <CourseList /> },
      { path: '/coursedetail', element: <CourseDetail /> },
      { index: true, element: <Landing /> },
      { path: "/RegisterStepOne", element: <StepOne /> },
      { path: "/RegisterStepTwo", element: <StepTwo /> },
      { path: "/RegisterStepThree", element: <StepThree /> },
      { path: "/Teachers", element: <TeachersPage /> },
      { path: '/Teacher/:id', element: <TeachersDetail /> }

    ],
  },
  { path: "/RegisterStepOne", element: <StepOne /> },
  { path: "/RegisterStepTwo", element: <StepTwo /> },
  { path: "/RegisterStepThree", element: <StepThree /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/loginValidation", element: <LoginValidationPage /> },
  { path: "/forgotPassOne", element: <ForgotPasswordStepOne /> },
  { path: "/forgotPassTwo", element: <ForgotPasswordStepTwo /> },
]);

export default router;
