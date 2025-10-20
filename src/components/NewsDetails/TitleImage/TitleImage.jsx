import React, { useState } from "react";
import img1 from "../../../assets/Images/Rectanglee.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";

const TitleImage = () => {
  const { t } = useTranslation();
  const [vote, setvote] = useState();

  const handleVote = () => {
    setvote(!vote);
  };

  return (
    <div className="w-full  flex flex-wrap">
      <img className="w-full h-[425px]" src={img1} />
      <div className="w-full flex items-center justify-between">
        <div className="px-4 py-3 flex justify-between  gap-1 ">
          <p className="text-[#848484] font-[14px] rounded-3xl py-2 px-3 lg:border lg:border-[#848484]">
            {t("titleImage.category")}
          </p>
          <span className="text-[#848484] font-[16px]  py-2 px-3">
            {t("titleImage.date")}
          </span>
          <div className="py-2 px-3">
            <VisibilityIcon className="text-[#848484] font-[16px]" />
            <span className="text-[#848484] font-[16px] mr-2 ">22</span>
          </div>
        </div>
        <div className=" flex items-center justify-between px-4 py-3 ">
          <div
            onClick={handleVote}
            className={`mr-3  flex items-center justify-center px-4 py-2  rounded-full  transition-all duration-300 cursor-pointer ${
              vote
                ? "bg-[#008C78] text-white border-[#008C78]"
                : "text-[#848484] bg-[#EAEAEA] dark:border-[#555] dark:bg-[#333] dark:text-[white]"
            }`}
          >
            <span className="ml-2">150</span>
            <ThumbDownAltIcon />
          </div>
          <div
            onClick={handleVote}
            className={`mr-3  flex items-center justify-center px-4 py-2  rounded-full  transition-all duration-300 cursor-pointer ${
              vote
                ? "bg-[#008C78] text-white border-[#008C78]"
                : "text-[#848484] bg-[#EAEAEA] dark:border-[#555] dark:bg-[#333] dark:text-[white]"
            }`}
          >
            <span className="ml-2">200</span>
            <ThumbUpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleImage;
