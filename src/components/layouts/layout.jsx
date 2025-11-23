import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";
import Chatbot from "../Chatbot/Chatbot";

const Layout = () => {
  const location = useLocation();

  const hiddenPathsscrollbar = [
    "/login",
    "/loginValidation",
    "/forgotPassOne",
    "/forgotPassTwo",
    "/registerStepOne",
    "/registerStepTwo",
    "/registerStepThree",
    "/userPanel",
  ];

  const hiddenPathschatbot = [
    "/login",
    "/loginValidation",
    "/forgotPassOne",
    "/forgotPassTwo",
    "/registerStepOne",
    "/registerStepTwo",
    "/registerStepThree",
  ];

  const hidescrolbar = hiddenPathsscrollbar.some((path) =>
    location.pathname.startsWith(path)
  );
  const hidechatbot = hiddenPathschatbot.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {!hidescrolbar && <ScrollProgressBar />}
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {!hidechatbot && <Chatbot />}
    </div>
  );
};

export default Layout;
