import React, { useState } from "react";
import img1 from "../../assets/Images/userinfo.png";
import CreateIcon from "@mui/icons-material/Create";
import { Field, Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PanelUserInfo = () => {
  const [initialValues] = useState({
    name: "",
    lastname: "",
    nationalcode: "",
    gender: "",
    birthday: "",
    phonenumber: "",
    aboutme: "",
  });

  const [activeTab, setActiveTab] = useState("general");

  const containerVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className=" w-full bg-[#F3F4F6] h-[85%] flex items-center rounded-4xl p-5 dark:bg-[#333] "
    >
      <div className=" w-full h-full">
        <div className="w-full ">
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveTab("general")}
            className={` cursor-pointer text-[16px] transition-all duration-300 rounded-xl py-2 px-2 border-1  ${
              activeTab === "general"
                ? "text-[white] bg-[#008C78] border-none "
                : "text-[#848484] border-[#848484] "
            } `}
          >
            {t("userinfo.tabs.general")}
          </motion.button>
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveTab("location")}
            className={`  cursor-pointer text-[16px] transition-all duration-300  rounded-xl py-2 px-2 border-1   ${
              activeTab === "location"
                ? "text-[white] bg-[#008C78] border-none "
                : "border-[#848484] text-[#848484]"
            } ${isRtl ? "mr-5" : "ml-5"}   `}
          >
            {t("userinfo.tabs.location")}
          </motion.button>
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveTab("social")}
            className={` mr-5 cursor-pointer text-[16px] transition-all duration-300  rounded-xl py-2 px-2 border-1   ${
              activeTab === "social"
                ? "text-[white] bg-[#008C78] border-none "
                : "border-[#848484] text-[#848484]"
            } ${isRtl ? "mr-5" : "ml-5"} `}
          >
            {t("userinfo.tabs.social")}
          </motion.button>
        </div>
        <AnimatePresence mode="wait">
          {activeTab === "general" && (
            <Formik initialValues={initialValues}>
              {({ errors, touched }) => (
                <Form className="w-full h-[92%] ">
                  <div className="w-full h-full ">
                    <motion.div
                      variants={itemVariants}
                      className="w-full h-[20%]   flex items-center justify-center relative "
                    >
                      <img
                        className="h-full cursor-pointer rounded-full"
                        src={img1}
                      />
                      <div
                        className={` bg-[#EAEAEA] shadow-lg p-2 rounded-full  absolute top-17 cursor-pointer ${
                          isRtl ? " left-135" : "left-120"
                        }  `}
                      >
                        <CreateIcon className="text-[#848484]  !text-[20px] " />
                      </div>
                    </motion.div>
                    <div
                      className={` w-full h-[80%]  grid grid-cols-2 gap-x-8 gap-y-4  ${
                        isRtl ? "pr-13" : "pl-13"
                      } `}
                    >
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {" "}
                          {t("userinfo.fields.name")}
                        </p>
                        <Field
                          type="text"
                          name="name"
                          placeholder={t("userinfo.placeholders.name")}
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.lastname")}
                        </p>
                        <Field
                          type="text"
                          name="lastname"
                          placeholder={t("userinfo.placeholders.lastname")}
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.nationalcode")}
                        </p>
                        <Field
                          type="text"
                          name="nationalcode"
                          placeholder={t("userinfo.placeholders.nationalcode")}
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.gender")}
                        </p>
                        <Field
                          type="text"
                          name="gender"
                          placeholder={t("userinfo.placeholders.gender")}
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.birthday")}
                        </p>
                        <Field
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                          name="birthday"
                          type="date"
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.phonenumber")}
                        </p>
                        <Field
                          name="phonenumber"
                          type="text"
                          placeholder={t("userinfo.placeholders.phonenumber")}
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.aboutme")}
                        </p>
                        <Field
                          name="aboutme"
                          type="text"
                          placeholder={t("userinfo.placeholders.aboutme")}
                          className={` dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl  `}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <button
                          className={` bg-[#008C78] text-[white] rounded-3xl p-3  mt-8 cursor-pointer ${
                            isRtl ? "mr-78" : "ml-76"
                          } `}
                        >
                          {t("userinfo.buttons.edit")}
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PanelUserInfo;
