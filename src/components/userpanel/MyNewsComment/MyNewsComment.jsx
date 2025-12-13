import React, { useState } from "react";
import Eye from "../../../assets/Icons/Eye";
import Garbage from "../../../assets/Icons/Garbage";
import { motion } from "framer-motion";
import { deleteNewsComments } from "../../../core/services/api/delete/deleteNewsComments";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import NewsComViewModal from "../NewsComViewModal/NewsComViewModal.jsx";
import { PersianDateConverter } from "../../../utils/helper/dateConverter.js";
import NewsComDeleteModal from "../NewsComDeleteModal/NewsComDeleteModal.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";



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

  
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const handleToggleViewModal = (value) => {
    setIsOpenViewModal(value);
  };
  

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const handleToggleDeleteModal = (value) => {
    setIsOpenDeleteModal(value)
  }
  const queryClient = useQueryClient()
  const deleteNewsCom = useMutation({
    mutationKey: ["DELETENEWSCOM"],
    mutationFn: () => deleteNewsComments(item.id),
    onSuccess: () => {
      toast.success(t("myNewsComment.successToast"));
      queryClient.invalidateQueries(['MYNEWSCOMMENTS'])
      handleToggleDeleteModal(false)
    }
  })


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
          md:w-30">
          <span className="font-regular text-base text-[#1E1E1E] truncate dark:text-[#DDDDDD]">
            {PersianDateConverter(item.inserDate)}
          </span>
        </div>
        <div
          className="flex justify-center gap-4 
          md:w-24">
          <span onClick={() => {handleToggleViewModal(true);}} className="cursor-pointer">
            <Eye/>
          </span>
          {/* <span onClick={() => {handleToggleDeleteModal(true)}} className="cursor-pointer">
            <Garbage />
          </span> */}
        </div>
      </motion.div>
      {isOpenViewModal && (
        <NewsComViewModal item={item} handleToggleViewModal={handleToggleViewModal} />
      )}
      {isOpenDeleteModal && (
       <NewsComDeleteModal handleToggleDeleteModal={handleToggleDeleteModal} deleteNewsCom={deleteNewsCom}/> 
      )}
    </>
  );
};

export default MyNewsComment;
