import React, { useState } from "react";
import Eye from "../../../assets/Icons/Eye";
import Receipt from "../../../assets/Icons/Receipt";
import { motion } from "framer-motion";
import { t } from "i18next";
import ReservedCoursesModal from "../ReservedCourseModal/ReservedCourseModal";

const textClass = "font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]";

const MyReservedCourse = ({ item }) => {
  const [isAccept, setIsAccept] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const Animate = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.35 },
    },
  };

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        variants={Animate}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center py-[14px] border-t border-b border-[#EAEAEA]
      md:flex md:flex-row"
      >
        <div className="flex items-center gap-4 w-64">
          <img src={item.image} className="w-7 h-7 rounded-full object-cover" />
          <div>
            <span className={textClass}>{item.courseName}</span>
          </div>
        </div>
        <div className="flex justify-center w-62">
          <span className={textClass}>{item.teacher}</span>
        </div>
        <div className="flex justify-center w-40">
          <span
            className={`py-[2px] px-[10px] font-regular text-base rounded-[8px] 
          ${
            isAccept
              ? "text-[#008C78] bg-[#EEFFFC]"
              : "text-[#E7000B] bg-[#FFECEC]"
          }`}
          >
            {isAccept
              ? t("myReservedCourse.reserved")
              : t("myReservedCourse.await")}
          </span>
        </div>
        <div className="flex justify-center w-56">
          <span className={textClass}>{item.insertDate.slice(0, 10)}</span>
        </div>
        <div className="flex justify-center gap-4 w-28">
          <span
            onClick={() => {
              handleToggleModal(true);
            }}
            className="cursor-pointer"
          >
            <Eye />
          </span>
          <span className="cursor-pointer">
            <Receipt />
          </span>
        </div>
      </motion.div>
      {isOpen && (
        <ReservedCoursesModal
          item={item}
          handleToggleModal={handleToggleModal}
        />
      )}
    </>
  );
};

export default MyReservedCourse;
