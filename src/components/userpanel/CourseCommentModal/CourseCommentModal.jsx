import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PersianDateConverter } from "../../../utils/helper/dateConverter";

const textClass = "font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]";
const titleClass = "font-semibold text-base text-[#1E1E1E]";

const CourseCommentModal = ({ item, handleToggleModal }) => {
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
        className="flex flex-col items-center gap-6 w-144 h-84 pt-8 py-[14px] bg-[#FFFFFF] border border-[#EAEAEA] rounded-xl fixed top-32 
      right-120 inset-0 z-48"
      >
        <div className="flex gap-2">
          <span className={titleClass}>
            {t("courseCommentModal.courseTitle")}
          </span>
          <span className={textClass}>{item.course.title}</span>
        </div>
        <div className="flex gap-2">
          <span className={titleClass}>
            {t("courseCommentModal.commentTitle")}
          </span>
          <span className={textClass}>{item.title}</span>
        </div>
        <div className="flex gap-2">
          <span className={titleClass}>
            {t("courseCommentModal.commentText")}
          </span>
          <span className={textClass}>{item.describe}</span>
        </div>
        <div className="flex justify-center gap-2">
          <span className={titleClass}>{t("courseCommentModal.status")}</span>
          <span
            className={`py-[2px] px-[12px] font-regular text-base rounded-lg
          ${
            item.accept
              ? "text-[#008C78] bg-[#EEFFFC]"
              : "text-[#E7000B] bg-[#FFECEC]"
          }`}
          >
            {item.accept ? t("تایید شده") : t("تایید نشده")}
          </span>
        </div>
        <div className="flex justify-center gap-2">
          <span className={titleClass}>
            {t("courseCommentModal.commentDate")}
          </span>
          <span className={textClass}>
            {PersianDateConverter(item.insertDate)}
          </span>
        </div>
        <button
          onClick={() => {
            handleToggleModal(false);
          }}
          className="py-1 px-2 border rounded-lg cursor-pointer"
        >
          {t("reservedCourseModal.backBtn")}
        </button>
      </motion.div>
    </div>
  );
};

export default CourseCommentModal;
