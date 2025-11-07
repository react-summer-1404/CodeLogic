import { motion } from "framer-motion";
import React from "react";
import greenEye from "../../../../assets/Icons/A/greenEye.png";
import greenBasket from "../../../../assets/Icons/A/greenBasket.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteFavCourses } from "../../../../core/services/api/delete/deleteFavCourses";
const FavoriteCourse = ({ items, deleteItem, getOverViewData }) => {
  /// fake data ///
  const mode = ["انلاین", "حضوری"];
  const meetingMode = mode[Math.floor(Math.random() * mode.length)];
  const Animate = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.35 },
    },
  };
  const handleDelete = () => {
    deleteItem(items.favoriteId);
  };
  const handleOverView = () => {
    getOverViewData(items);
  };
  return (
    <>
      <motion.div
        variants={Animate}
        initial="hidden"
        animate="visible"
        className=" dark:bg-[#454545] dark:text-[#ffff] w-full text-[16px] text-center font-semibold bg-[#ffff] 
      rounded-t-4xl hidden md:flex items-center py-5 border-b border-[#EAEAEA] "
        style={{ direction: "rtl" }}
      >
        <div className="ps-8 flex items-center justify-start gap-4 flex-[1.5] text-right">
          <img
            className="w-[28px] h-[28px] rounded-full object-cover"
            src="http://sepehracademy.liara.run/files/Image-1761935008550.jpg"
            alt=""
          />
          {items.courseTitle}
        </div>
        <div className="ps-3 flex-[1.2] text-right overflow-ellipsis truncate ">{`این دوره توسط استاد ${items.teacheName} برگزار میشود`}</div>
        <div className="px-4 flex-1">{meetingMode}</div>
        <div className="px-4 flex-1 truncate">{items.lastUpdate}</div>
        <div className="pe-8 w-[100px] text-left flex items-center justify-end gap-4">
          <div
            onClick={handleOverView}
            style={{ backgroundImage: `url(${greenEye})` }}
            className="w-6 h-4 cursor-pointer bg-no-repeat bg-[center_center] "
          ></div>
          <div
            onClick={handleDelete}
            style={{ backgroundImage: `url(${greenBasket})` }}
            className="w-4 cursor-pointer h-4 bg-no-repeat bg-[center_center] "
          ></div>
        </div>
      </motion.div>
      <div
        className="flex md:hidden flex-col items-center gap-4 dark:text-white dark:bg-[#333]
          w-[60%] bg-[#eee] rounded-3xl mx-auto mt-4 py-4
          "
      >
        <h2 className="text-[19px] text-[#008C78] dark:text-[#008C78] mx-auto font-bold">
          {items.courseTitle}
        </h2>
        <img
          className="rounded-4xl shadow-md w-[55%] mx-auto"
          src="http://sepehracademy.liara.run/files/Image-1761935008550.jpg"
          alt=""
        />
        <p className=" text-center text-[14px] text-[#848484] dark:text-[#848484]">
          {`این دوره توسط استاد ${items.teacheName} برگزار میشود`}
        </p>
        <div className="flex flex-col items-center text-[14px] text-[#848484] dark:text-[#848484]">
          <span>{items.lastUpdate}</span>
          <span>{meetingMode}</span>
        </div>
        <div className="  flex items-center  gap-4">
          <div
            onClick={handleOverView}
            style={{ backgroundImage: `url(${greenEye})` }}
            className="w-6 h-4 cursor-pointer bg-no-repeat bg-[center_center] "
          ></div>
          <div
            onClick={handleDelete}
            style={{ backgroundImage: `url(${greenBasket})` }}
            className="w-4 h-4 cursor-pointer bg-[url(/icons/greenBasket.png)] bg-no-repeat bg-[center_center] "
          ></div>
        </div>
      </div>
    </>
  );
};

export default FavoriteCourse;
