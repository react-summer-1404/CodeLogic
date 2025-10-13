import React, { useState } from "react";
import regone from "../../../assets/Images/regone.svg";
import EastIcon from "@mui/icons-material/East";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterStepThree } from "../../../utils/Validations/RegisterVal/Register.validation";
import { Link } from "react-router-dom";

const StepThree = () => {
  const [initialValues, setinitialValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleEyepassword = () => setShowPassword(!showPassword);
  const toggleEyeconfirmpassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div
      className={`flex justify-center items-center min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-[#EAEAEA]"
      }`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterStepThree}
      >
        {() => (
          <Form className="w-full flex justify-center">
            <div
              className={`  flex flex-col lg:flex-row w-[90%] sm:w-[95%] md:w-[90%] h-[72.17%] lg:h-[72.17%]   rounded-4xl shadow-md overflow-hidden transition-colors duration-500  ${
                darkMode ? "bg-gray-800" : "bg-white"
              }  `}
            >
              <div className="w-full lg:w-[47.44%] flex justify-center items-center">
                <div
                  className={`w-[95%] sm:w-[90%] md:w-[95%] h-auto lg:h-[95.67%] rounded-xl flex flex-col justify-center items-center mb-6 lg:mb-0 mr-0 lg:mr-2 relative transition-colors duration-500 ${
                    darkMode ? "bg-gray-700" : "bg-[#EEFFFC]"
                  }`}
                >
                  <div
                    onClick={toggleDarkMode}
                    className={`cursor-pointer py-3 px-2 w-11 h-5 rounded-full absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-7 flex transition-colors duration-500 ${
                      darkMode
                        ? "bg-yellow-300/40 justify-end"
                        : "bg-blue-900/30 justify-start"
                    }`}
                  >
                    <div className="w-3 h-[90%] rounded-full transition-all duration-500 flex items-center">
                      <img
                        src={`${
                          darkMode ? "./icons/sun.png" : "./icons/moon.png"
                        }`}
                        alt="theme icon"
                      />
                    </div>
                  </div>

                  <img
                    className="w-[70%] sm:w-[75%] md:w-[70%] h-auto sm:h-[40%] md:h-[45%] lg:h-[52.63%] mb-6 sm:mb-8 lg:mb-10 transition-all duration-500"
                    src={regone}
                    alt="regone"
                  />
                  <span
                    className={`font-bold text-xl sm:text-2xl md:text-2xl mb-4 sm:mb-6 lg:mb-10 text-center transition-colors duration-500 ${
                      darkMode ? "text-white" : "text-[#005B77]"
                    }`}
                  >
                    مرحله پایانی ثبت‌نام پیش روی شماست.
                  </span>
                  <p
                    className={`w-[85%] sm:w-[80%] text-center transition-colors duration-500 ${
                      darkMode ? "text-gray-300" : "text-[#1E1E1E]"
                    }`}
                  >
                    همه‌چیز آماده است! حالا فقط کافیه اطلاعات تکمیلی‌ات رو وارد
                    کنی تا حساب کاربری‌ات کامل بشه.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[52.56%] flex flex-col justify-center px-4 sm:px-8 md:px-[5%] relative transition-colors duration-500">
                <div>
                  <Link to="/RegisterStepTwo">
                    <div className="mb-6 text-sm absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-8 lg:right-30 flex items-center">
                      <EastIcon
                        className={`cursor-pointer ml-2 transition-colors duration-500 ${
                          darkMode ? "text-gray-300" : "text-[#005B77]"
                        }`}
                      />
                      <span
                        className={`cursor-pointer font-bold transition-colors duration-500 ${
                          darkMode ? "text-gray-300" : "text-[#005B77]"
                        }`}
                      >
                        بازگشت
                      </span>
                    </div>
                  </Link>

                  <h2
                    className={`text-xl sm:text-2xl md:text-2xl text-center font-bold mb-2 sm:mb-3 transition-colors duration-500 ${
                      darkMode ? "text-white" : "text-[#008C78]"
                    }`}
                  >
                    ایجاد حساب کاربری
                  </h2>
                  <p
                    className={`mb-4 sm:mb-6 md:mb-8 text-center transition-colors duration-500 ${
                      darkMode ? "text-gray-300" : "text-[#333333]"
                    }`}
                  >
                    کامل کردن مشخصات
                  </p>

                  <div className="flex flex-col items-center relative">
                    <EmailIcon
                      className={`absolute top-3 right-4 sm:right-6 md:right-20 transition-colors duration-500 ${
                        darkMode ? "text-gray-400" : "text-[grey]"
                      }`}
                    />
                    <Field
                      type="text"
                      name="email"
                      placeholder="ایمیل خود را وارد کنید"
                      className={` !mb-10 rounded-4xl py-3 px-12 sm:px-16 mb-4 sm:mb-6 md:mb-6 w-[90%] sm:w-[80%] md:w-[80%] focus:outline-none focus:ring-2 transition-colors duration-500 ${
                        darkMode
                          ? "bg-gray-600 text-gray-200 focus:ring-yellow-400 placeholder-gray-300"
                          : "bg-[#F3F4F6] text-[#383838] focus:ring-[#008C78] placeholder-gray-500"
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm absolute right-20 top-14 font-semibold "
                    />

                    <LockIcon
                      className={`absolute top-25 right-4 sm:right-6 md:right-20 transition-colors duration-500 ${
                        darkMode ? "text-gray-400" : "text-[grey]"
                      }`}
                    />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="رمز عبور خود را وارد کنید"
                      className={`  !mb-10 rounded-4xl py-3 px-12 sm:px-16 mb-4 sm:mb-6 md:mb-6 w-[90%] sm:w-[80%] md:w-[80%] focus:outline-none focus:ring-2 transition-colors duration-500 ${
                        darkMode
                          ? "bg-gray-600 text-gray-200 focus:ring-yellow-400 placeholder-gray-300"
                          : "bg-[#F3F4F6] text-[#383838] focus:ring-[#008C78] placeholder-gray-500"
                      }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm absolute right-20 top-36 font-semibold "
                    />
                    <VisibilityOffIcon
                      onClick={toggleEyepassword}
                      className={` absolute top-25 left-4  sm:left-6 md:left-20 transition-colors duration-500 cursor-pointer  ${
                        darkMode ? "text-gray-400" : "text-[grey]"
                      }   `}
                    />
                    <LockIcon
                      className={`absolute top-47 right-4 sm:right-6 md:right-20 transition-colors duration-500 ${
                        darkMode ? "text-gray-400" : "text-[grey]"
                      }`}
                    />
                    <Field
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="تکرار رمز عبور"
                      className={`   rounded-4xl py-3 px-12 sm:px-16 mb-4 sm:mb-6 md:mb-6 w-[90%] sm:w-[80%] md:w-[80%] focus:outline-none focus:ring-2 transition-colors duration-500 ${
                        darkMode
                          ? "bg-gray-600 text-gray-200 focus:ring-yellow-400 placeholder-gray-300"
                          : "bg-[#F3F4F6] text-[#383838] focus:ring-[#008C78] placeholder-gray-500"
                      }`}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm absolute right-20 top-58 font-semibold "
                    />
                    <VisibilityOffIcon
                      onClick={toggleEyeconfirmpassword}
                      className={` absolute top-47 left-4  sm:left-6 md:left-20 transition-colors duration-500 cursor-pointer  ${
                        darkMode ? "text-gray-400" : "text-[grey]"
                      }   `}
                    />
                    <Link
                      className={` text-center  mt-4 font-semibold py-3 rounded-4xl w-[90%] sm:w-[80%] md:w-[80%] transition-colors duration-500 cursor-pointer ${
                        darkMode
                          ? "bg-yellow-400 text-gray-800 hover:bg-yellow-300"
                          : "bg-[#008C78] text-white hover:bg-[#007563]"
                      }`}
                    >
                      ثبت نام
                    </Link>
                  </div>

                  <p
                    className={`text-sm mt-4 sm:mt-6 text-center transition-colors duration-500 ${
                      darkMode ? "text-gray-300" : "text-[#333333]"
                    }`}
                  >
                    حساب کاربری دارید؟{" "}
                    <span
                      className={`font-semibold cursor-pointer hover:underline transition-colors duration-500 ${
                        darkMode ? "text-yellow-300" : "text-[#008C78]"
                      }`}
                    >
                      وارد شوید
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepThree;
