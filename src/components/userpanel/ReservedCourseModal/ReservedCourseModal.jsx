import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PersianDateConverter } from "../../../utils/helper/dateConverter";

const textClass = "font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]";

const ReservedCoursesModal = ({ item, handleToggleModal }) => {
  const { t } = useTranslation();

  const Animate = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.35 },
    },
  };

  return (
    <div
      onClick={() => handleToggleModal(false)}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    >
      <motion.div
        variants={Animate}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 w-[80%] shadow-2xl h-[50%] md:w-144 md:h-84 pt-8 bg-[#FFFFFF] border border-[#EAEAEA] rounded-xl fixed md:top-32 
        md:right-120 mx-auto mt-45 md:m-0 inset-0 z-48 dark:bg-[#333]"
      >
        <div className="flex flex-col items-center gap-4">
          <img src={item.image} className="w-7 h-7 rounded-[48px]" />
          <div>
            <span className={textClass}>{item.courseName}</span>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <span className="font-semibold text-base text-[#1E1E1E]">
            {t("reservedCourseModal.student")}
          </span>
          <span className={textClass}>{item.teacher}</span>
        </div>
        <div className="flex justify-center gap-2">
          <span className="font-semibold text-base text-[#1E1E1E]">
            {t("reservedCourseModal.status")}
          </span>
          <span
            className={`py-[2px] px-[10px] font-regular text-base rounded-[8px] 
          ${
            item.accept
              ? "text-[#008C78] bg-[#EEFFFC]"
              : "text-[#E7000B] bg-[#FFECEC]"
          }`}
          >
            {item.accept
              ? t("myReservedCourse.reserved")
              : t("myReservedCourse.await")}
          </span>
        </div>
        <div className="flex justify-center gap-2">
          <span className="font-semibold text-base text-[#1E1E1E]">
            {t("reservedCourseModal.reservationDate")}
          </span>
          <span className={textClass}>
            {PersianDateConverter(item.insertDate)}
          </span>
        </div>
        <button
          onClick={() => {
            handleToggleModal(false);
          }}
          className="py-1 px-2 border dark:border-[#EAEAEA] dark:text-[#EAEAEA] rounded-lg cursor-pointer"
        >
          {t("reservedCourseModal.backBtn")}
        </button>
      </motion.div>
    </div>
  );
};

export default ReservedCoursesModal;
