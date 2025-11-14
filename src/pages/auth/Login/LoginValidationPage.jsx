import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { motion } from "framer-motion";
import TranslateButton from "../../../components/TranslateButton/TranslateButton";
import { useTranslation } from "react-i18next";
import loginData from "../../../components/common/Form/initialData/loginData";
import back from "../../../assets/Icons/A/back.png";
import moon from "../../../assets/Icons/A/moon.png";
import sun from "../../../assets/Icons/A/sun.png";
import login2 from "../../../assets/Images/A/login2.png";
import { useTheme } from "../../../utils/hooks/useTheme/useTheme";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import sendOtp from "../../../core/services/api/post/PostLoginValidationCode";
import { toast } from "react-toastify";
import { setItem } from "../../../utils/helper/storage.services";

const validationSchema = Yup.object({
  otp: Yup.array().of(
    Yup.string()
      .matches(/^[0-9]$/, "فقط عدد مجاز است")
      .required("نمتواند خالی باشد")
  ),
});
const initialValues = { otp: ["", "", "", "", "", ""] };

const LoginValidationPage = () => {
  const navigate = useNavigate();
  ///// redux /////
  const phoneGmail = useSelector((state) => state.phoneGmailred.phoneOrGmail);
  console.log("phone :", phoneGmail);
  const { t } = useTranslation();
  const inputsRef = useRef([]);

  const handleChange = (e, index, values, setFieldValue) => {
    const value = e.target.value.replace(/\D/, "");
    const newotp = [...values.otp];
    newotp[index] = value;
    setFieldValue("otp", newotp);
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index, values, setFieldValue) => {
    if (e.key === "Backspace") {
      const newotp = [...values.otp];
      newotp[index] = "";
      setFieldValue("otp", newotp);
    }
  };
  const handleSubmit = (values) => {
    const code = values.otp.join("");
    const finalCode = {
      phoneOrGmail: phoneGmail,
      code: Number(code),
    };
    console.log(finalCode);
    postCode(finalCode);
  };
  const { mutate: postCode } = useMutation({
    mutationKey: ["POSTLOGINVAL"],
    mutationFn: (values) => sendOtp(values),
    onSettled: (data) => {
      if (data.success) {
        toast(data.message);
        setItem("token", data.token);
        navigate("/userPanel");
      } else if (!data.success) {
        toast.error(data.message);
      }
    },
  });
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="bg-[#EAEAEA] dark:bg-[#1E1E1E] min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col  overflow-hidden  bg-[#ffff] dark:bg-[#333] dark:text-white shadow-lg lg:flex-row w-[90%] sm:w-[95%] md:w-[90%] h-[72.17%] lg:h-[72.17%] rounded-[60px] p-2 "
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            delay: 0.5,
          }}
          className=" flex flex-1 flex-col  p-17  gap-10 "
        >
          <div className="flex justify-between items-center">
            <Link
              to={"/login"}
              className=" pr-8 bg-no-repeat  bg-[right_1px_center]
                         text-[14px] hover:text-blue-400 transition duration-300"
              style={{ backgroundImage: `url(${back})` }}
            >
              {t("login.Back")}
            </Link>
            <TranslateButton />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 p-5 ">
            <div className="flex flex-col justify-center items-center gap-2  ">
              <h2 className="text-[24px] font-bold text-[#008C78] mb-2 ">
                {t("login.LoginToUserAccount")}
              </h2>
              <h3 className="text-[13px]">
                {t("login.EnterTheOneTimePasswordSent")}
              </h3>
            </div>
            <div className="w-full mt-7 px-7">
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
              >
                {({ setFieldValue, touched, values }) => (
                  <Form>
                    <div className=" flex flex-col gap-4 px-3 ">
                      <div className="flex justify-between  ">
                        {values.otp.map((digit, index) => (
                          <div key={index} className=" flex flex-col gap-5">
                            <Field
                              innerRef={(el) => (inputsRef.current[index] = el)}
                              name={`otp[${index}]`}
                              type="text"
                              maxLength={1}
                              inputMode="numeric"
                              value={digit}
                              onChange={(e) =>
                                handleChange(e, index, values, setFieldValue)
                              }
                              onKeyDown={(e) =>
                                handleKeyDown(e, index, values, setFieldValue)
                              }
                              className={`w-12 h-12 text-center rounded-xl text-lg bg-[#F3F4F6] dark:bg-[#454545]  shadow-md outline-none transition-colors duration-200 ${
                                digit
                                  ? "border-2 border-[#008C78]"
                                  : touched.otp?.[index]
                                  ? "border-2 border-red-500"
                                  : "border-2 border-transparent focus:border-[#008C78]"
                              } `}
                            />
                          </div>
                        ))}
                      </div>
                      {touched.otp &&
                        values.otp.some((v, i) => touched.otp[i] && !v) && (
                          <div className=" text-red-500 text-sm mt-1 font-semibold">
                            {t("login.Required")}
                          </div>
                        )}

                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 300,
                        }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className=" mt-8  w-full bg-[#008C78] text-white text-[16px] rounded-full px-5 py-3  "
                      >
                        {t("login.OneTimePasswordVerification")}
                      </motion.button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            delay: 0.5,
          }}
          className="flex flex-1 flex-col items-center justify-center  p-9  bg-[#EEFFFC] dark:bg-[#454545]
           rounded-[60px] relative"
        >
          <div
            onClick={toggleTheme}
            className={` cursor-pointer py-3 px-2  w-12 h-6   rounded-full  absolute top-14 left-7 flex  ${
              isDark
                ? "bg-yellow-300/40 justify-end "
                : "bg-blue-900/30  justify-start"
            } `}
          >
            <div className="w-3 h-[90%] rounded-full transition-all duration-500 flex items-center ">
              <img src={isDark ? sun : moon} alt="" />
            </div>
          </div>
          <div className=" mt-5 flex flex-col  items-center justify-center gap-6">
            <div className=" flex flex-col justify-center items-center  ">
              <img className=" w-95 h-95  " src={login2} alt="" />
            </div>
            <div className=" flex flex-col justify-center items-center  gap-4">
              <h2 className="text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold ">
                {t("login.Title2")}
              </h2>
              <p className="text-[16px] text-center">{t("login.caption2")}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default LoginValidationPage;
