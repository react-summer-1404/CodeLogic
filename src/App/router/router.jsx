import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Landing from "../../pages/Landing/Landing";
import CourseList from "../../pages/CourseList/CourseList";
import StepOne from "../../pages/auth/Register/StepOne";
import StepTwo from "../../pages/auth/Register/StepTwo";
import StepThree from "../../pages/auth/Register/StepThree";
import NewsDetails from "../../pages/NewsDetails/NewsDetails";
import LoginPage from "../../pages/auth/Login/LoginPage";
import LoginValidationPage from "../../pages/auth/Login/LoginValidationPage";
import ForgotPasswordStepOne from "../../pages/auth/forgotPassword/forgotPasswordStepOne";
import ForgotPasswordStepTwo from "../../pages/auth/forgotPassword/ForgotPasswordStepTwo";
import CourseDetail from "../../pages/CourseDetail/CourseDetail";
import TeachersPage from "../../pages/Teachers/TeachersPage/TeachersPage";
import TeachersDetail from "../../pages/Teachers/TeachersDetail/TeachersDetail";
import PanelUserInfo from "../../pages/Panel/PanelUserInfo";
import PanelDashboard from "../../pages/Panel/PanelDashboard";
import Panel from "../../pages/Panel/Panel";
import CoursesPayment from "../../pages/CoursesPayment/CoursesPayment";
import FavoriteNews from "../../pages/Favorites/FavoriteNews/FavoriteNews";
import FavoriteCourses from "../../pages/Favorites/FavoriteCourses/FavoriteCourses";
import SecuritySettings from "../../pages/securitySettings/SecuritySettings";
import NewsPage from "../../pages/NewsPage/NewsPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/courselist", element: <CourseList /> },
      { path: "/coursedetail/:id", element: <CourseDetail />,},
      { path: "/news", element: <NewsPage/> },
      { path: "/Teachers", element: <TeachersPage /> },
      { path: "/Teacher/:id", element: <TeachersDetail /> },
      { path: "/news/:id", element: <NewsDetails /> },
    ],
  },

  {
    path: "/Panel",
    element: <Panel />,
    children: [
      { index: true, element: <PanelDashboard /> },
      { path: "UserInfo", element: <PanelUserInfo /> },
      { path: "coursesPayments", element: <CoursesPayment /> },
      { path: "favoriteNews", element: <FavoriteNews /> },
      { path: "favoriteCourses", element: <FavoriteCourses /> },
      { path: "securitySettings", element: <SecuritySettings /> },
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
