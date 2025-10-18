import React from "react";
import { useTranslation } from "react-i18next";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const NewsCard = ({
  image,
  titleKey,
  descriptionKey,
  viewsKey,
  ratingKey,
  categoryKey,
  dateKey,
  viewType,
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";
  const isList = viewType === "list";

  return (
    <div
      className={`bg-transparent rounded-2xl overflow-hidden shadow-[0px_0px_1px_1px_#ccc] cursor-pointer transition-all duration-300 hover:scale-101 hover:shadow-[0px_0px_10px_1px_#008c78]
        ${isList ? "flex w-full h-[180px]" : "w-[32.3%] mt-5 mb-5"}
      `}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div
        className={`relative flex items-center justify-center
          ${isList ? "w-[35%]" : ""}
        `}
      >
        <img
          src={image}
          alt={t(titleKey)}
          className={`${
            isList
              ? "w-[80%] h-[80%] rounded-l-2xl object-fill"
              : "w-[80%] h-60 rounded-t-2xl object-cover"
          }`}
        />
        <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-1 rounded-full">
          <FavoriteBorderIcon sx={{ color: "#555", fontSize: 22 }} />
        </div>
      </div>

      <div
        className={`bg-white dark:bg-[#333] rounded-2xl shadow-sm px-4 pt-5 pb-3 relative z-10 flex flex-col justify-between 
          ${isList ? "w-[65%] rounded-l-none" : "-mt-4 min-h-[160px]"}
        `}
      >
        <div className={isRtl ? "text-right" : "text-left"}>
          <h3 className="text-[15px] font-bold text-gray-800 leading-snug dark:text-white">
            {t(titleKey)}
          </h3>
          <p
            className={`text-gray-600 text-[13px] mt-1 leading-5 dark:text-[#ccc] ${
              isList ? "" : "line-clamp-2"
            }`}
          >
            {t(descriptionKey)}
          </p>
        </div>

        <div
          className={`flex justify-between items-center mt-3 text-gray-500 text-[13px] ${
            isRtl ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex items-center gap-1">
            <LayersIcon sx={{ fontSize: 16, color: "#777" }} />
            <span>{t(categoryKey)}</span>
          </div>

          <div className="flex items-center gap-1">
            <VisibilityIcon sx={{ fontSize: 17, color: "#777" }} />
            <span>{t(viewsKey)}</span>
          </div>
        </div>

        <div
          className={`flex justify-between items-center mt-3 text-[12px] text-gray-500 ${
            isRtl ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex items-center gap-1">
            <CalendarMonthIcon sx={{ fontSize: 16, color: "#777" }} />
            <span>{t(dateKey)}</span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon sx={{ fontSize: 17, color: "#FBBF24" }} />
            <span className="text-gray-700 font-medium dark:text-[#ccc]">
              {t(ratingKey)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
