import React, { useState } from "react";
import Eye from "../../../assets/Icons/Eye";
import Garbage from "../../../assets/Icons/Garbage";
import { motion } from "framer-motion";
import { deleteNewsComments } from "../../../core/services/api/delete/deleteNewsComments";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import NewsCommentModal from "../NewsCommentModal/NewsCommentModal";
import { PersianDateConverter } from "../../../utils/helper/dateConverter.js";

const textClass = "font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]";

const MyNewsComment = ({ item }) => {
  const { t } = useTranslation();

  const Animate = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.35 },
    },
  };

  const onDelete = () => {
    deleteNewsComments(item.id);
    toast.success(t("myNewsComment.successToast"));
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        variants={Animate}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 py-[14px] bg-[#CCCCCC] border-t border-b border-[#EAEAEA] rounded-xl
        dark:bg-[#454545]
        md:flex-row md:bg-[#FFFFFF] md:rounded-none"
      >
        <div className="md:w-60">
          <span className={textClass}>آموزش ری اکت</span>
        </div>
        <div className="md:w-52">
          <span className={textClass}>{item.title}</span>
        </div>
        <div className="md:w-52">
          <span className={textClass}>{item.describe}</span>
        </div>
        <div
          className="flex justify-center 
            md:w-28"
        >
          <span className="py-[2px] px-[12px] font-regular text-base text-[#008C78] bg-[#EEFFFC] rounded-lg">
            تایید شده
          </span>
        </div>
        <div
          className="flex justify-center 
            md:w-30"
        >
          <span className="font-regular text-base text-[#1E1E1E] truncate dark:text-[#DDDDDD]">
            {PersianDateConverter(item.inserDate)}
          </span>
        </div>
        <div
          className="flex justify-center gap-4 
            md:w-24"
        >
          <span
            onClick={() => {
              handleToggleModal(true);
            }}
            className="cursor-pointer"
          >
            <Eye />
          </span>
          <span onClick={onDelete} className="cursor-pointer">
            <Garbage />
          </span>
        </div>
      </motion.div>
      {isOpen && (
        <NewsCommentModal item={item} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
};

export default MyNewsComment;
