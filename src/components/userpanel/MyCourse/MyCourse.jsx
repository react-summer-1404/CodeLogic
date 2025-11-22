import React from "react";
import Eye from "../../../assets/Icons/Eye";
import Receipt from "../../../assets/Icons/Receipt";
import ReactCourseImg from "../../../assets/Images/A/courses/2.png";
import { motion } from "framer-motion";
import AddCardIcon from "@mui/icons-material/AddCard";

const textClass =
  "font-regular text-base text-[#1E1E1E] truncate  dark:text-[#DDDDDD]";

const MyCourse = ({ item }) => {
  const Animate = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.35 },
    },
  };

  return (
    <motion.div
      variants={Animate}
      initial="hidden"
      animate="visible"
      className="flex items-center py-[14px] border-t border-b border-[#EAEAEA]"
    >
      <div className="flex items-center gap-4 w-64">
        <img
          className="w-[28px] h-[28px] rounded-full object-cover"
          src={item.tumbImageAddress}
        />
        <div>
          <span className={textClass}>{item.course.title}</span>
        </div>
      </div>
      <div className="flex justify-center w-50">
        <span
          className={textClass}
        >{`${item.course.teacher.fName}  ${item.course.teacher.lName}`}</span>
      </div>
      <div className="flex justify-center w-30">
        <span
          className={`py-[2px] px-[10px] font-regular text-base 
          ${
            item.paymentStatus === "پرداخت شده"
              ? " text-[#008C78] bg-[#EEFFFC]"
              : "bg-[#FFECEC] text-[#E7000B] "
          } rounded-[8px]`}
        >
          {item.paymentStatus}
        </span>
      </div>
      <div className="flex justify-center w-36">
        <span className={textClass}>{item.cost.toLocaleString()}</span>
      </div>
      <div className="flex justify-center w-34 ">
        <span className={textClass}>{item.lastUpdate}</span>
      </div>
      <div className="flex justify-center items-center gap-4 w-32 ">
        <div>
          <Eye />
        </div>
        {item.paymentStatus === "پرداخت نشده" ? (
          <div>
            <AddCardIcon className="text-[#008C78] cursor-pointer" />
          </div>
        ) : (
          <div>
            <Receipt />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyCourse;
