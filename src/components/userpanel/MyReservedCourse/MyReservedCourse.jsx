import React, { useState } from "react";
import Eye from "../../../assets/Icons/Eye";
import Receipt from "../../../assets/Icons/Receipt";
import { motion } from "framer-motion";
import { t } from "i18next";
import ReservedCoursesModal from "../ReservedCourseModal/ReservedCourseModal";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaymentModal from "../PaymentModal/PaymentModal";
import { PersianDateConverter } from "../../../utils/helper/dateConverter.js";
const textClass = "font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]";
import imgg from "../../../assets/Images/A/teachersDetail/3.png";
const MyReservedCourse = ({ item }) => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

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
  const handleClosePayment = (value) => {
    setOpenPaymentModal(value);
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
        <div className="flex flex-col md:flex-row items-center gap-4 w-64">
          <img
            src={item.image.slice(0, 4) === "http" ? item.image : imgg}
            className=" md:w-7 md:h-7 rounded-full object-cover"
          />
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
        <div className="flex justify-center w-56">
          <span className="font-regular text-base text-[#1E1E1E] truncate  dark:text-[#DDDDDD]">
            {PersianDateConverter(item.insertDate)}
          </span>
        </div>
        <div className="flex justify-center items-center gap-4 w-28">
          <span
            onClick={() => {
              handleToggleModal(true);
            }}
            className="cursor-pointer"
          >
            <Eye />
          </span>
          {item.accept && (
            <span
              onClick={() => setOpenPaymentModal(true)}
              className="cursor-pointer"
            >
              <AddCardIcon className="text-[#008C78]" />
            </span>
          )}
        </div>
      </motion.div>
      {isOpen && (
        <ReservedCoursesModal
          item={item}
          handleToggleModal={handleToggleModal}
        />
      )}
      {openPaymentModal && (
        <PaymentModal item={item} handleClosePayment={handleClosePayment} />
      )}
    </>
  );
};

export default MyReservedCourse;
