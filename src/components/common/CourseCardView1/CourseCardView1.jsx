import React, { useState } from "react";
import Teacher from "../../../assets/Icons/Teacher";
import Level from "../../../assets/Icons/Level";
import Star from "../../../assets/Icons/Star";
import Heart from "../../../assets/Icons/Heart";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img2 from "../../../assets/Images/HTML5Course.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Tilt from "react-parallax-tilt";
import CompareIcon from "@mui/icons-material/Compare";

const CourseCardView1 = ({
  item,
  handleToggleFavorite,
  handleToggleCompare,
  isCompared,
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const [isFavorite, setIsFavorite] = useState();
  const onToggleFavorite = () => {
    handleToggleFavorite(item.courseId);
    setIsFavorite(!isFavorite);
  };

  const onToggleCompare = (e) => {
    e.preventDefault();
    handleToggleCompare(item.courseId);
  };

  const descripmion = t(`${item.describe}`);

  const descripmionslice =
    descripmion.length > 70 ? descripmion.slice(0, 70) + "..." : descripmion;

  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      scale={1.02}
      perspective={900}
      transitionSpeed={1500}
      tiltReverse={true}
      glareEnable={true}
      glareMaxOpacity={0.25}
      glareColor="white"
      glarePosition="all"
      reset={true}
    >
      <div
        dir={`${isRtl ? "rtl" : "ltr"}`}
        className="flex flex-col shadow-[0px_0px_1px_1px_#ccc]  flex-shrink-0 items-center w-[240px] rounded-xl duration-300 relative 
        
        sm:w-[350px] sm:rounded-[20px]"
      >
        <img
          src={
            item.imageAddress && !item.imageAddress.includes("undefined")
              ? item.imageAddress
              : img2
          }
          className="w-full h-[160px] rounded-t-xl
            sm:h-[259px] sm:rounded-t-[20px]"
        />
        <Link
          to={`/courseDetail/${item.courseId}`}
          className="flex flex-col justify-between w-full mb-[-16px] 
            p-4 bg-[#FFFFFF] rounded-xl transform -translate-y-4 cursor-pointer   dark:bg-[#606060]
            sm:h-[237px] sm:rounded-[20px]"
        >
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-base   dark:text-[#EEEEEE]">
              {t(`${item.title}`)}
            </h2>
            <p className="max-w-[317px] max-h-[40px] font-regular text-sm  mb-5 dark:text-[#DDDDDD]">
              {descripmionslice}
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-between gap-2 mt-4">
              <div className="flex justify-between gap-2 font-regular text-sm mb-5 dark:text-[#DDDDDD]">
                <div>
                  <span>{t("courseCard.technologies")}</span>
                  <span className="mr-1">
                    {item.technologyList.trim() !== ""
                      ? item.technologyList
                      : t("courseCard.withoutTechnology")}
                  </span>
                </div>

                <span style={{ fontSize: "14px" }}>
                  <CalendarMonthIcon sx={{ fontSize: 16, marginLeft: "3px" }} />
                  {new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(item.startTime))}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1   dark:text-[#DDDDDD]">
                  <Teacher className="text-[#848484]" />
                  <span className="font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]">
                    {t(`${item.teacherName}`)}
                  </span>
                </div>
                <div className="flex items-center gap-1   dark:text-[#DDDDDD]">
                  <Level className="text-[#848484]" />
                  <span className="font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]">
                    {t(`${item.levelName}`)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col justify-end gap-1">
                <span className="font-regular text-xs text-[#1E1E1E]   dark:text-[#EEEEEE]"></span>
                <div className="flex flex-col">
                  <span className="font-bold text-base text-[#008C78]">
                    {item.cost}

                    {t("courseCard.toman")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-regular text-sm text-[#F8BC24]">
                  {t(`${Math.floor(item.courseRate.avg)}`)}
                </span>
                <Star />
              </div>
            </div>
          </div>
        </Link>
        <button
          onClick={onToggleFavorite}
          className={`p-2 rounded-[50px] transition absolute top-[13px] right-[14px] cursor-pointer  text-[white] 
            ${isFavorite ? "bg-red-500" : "bg-black/45 backdrop-blur-sm"}`}
        >
          <Heart />
        </button>
        <button
          onClick={onToggleCompare}
          className={`p-2 rounded-[50px] transition absolute top-[13px] left-[14px] cursor-pointer  text-[white] 
            ${isCompared ? "bg-[#008C78]" : "bg-black/45 backdrop-blur-sm"}`}
        >
          <CompareIcon />
        </button>
      </div>
    </Tilt>
  );
};

export default CourseCardView1;
