import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PostFavoriteNews } from "../../../core/services/api/post/PostFavoriteNews";
import { useMutation } from "@tanstack/react-query";

const NewsCard = ({
  image,
  title,
  description,
  views,
  rating,
  category,
  date,
  viewType,
  id,
}) => {
  const { mutate: postFavoriteTop } = useMutation({
    mutationKey: ["Postfavorite"],
    mutationFn: (value) => PostFavoriteNews(value),
    onSettled: (data) => {
      if (data.success) {
        toast.success(data.message);
      } else if (!data.success) {
        toast.error(data.message);
      }
    },
  });

  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";
  const isList = viewType === "list";
  const [liked, setLiked] = useState();

  return (
    <div
      className={`bg-transparent rounded-2xl overflow-hidden shadow-[0px_0px_1px_1px_#ccc]  transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_0px_10px_1px_#008c78]
        ${
          isList
            ? "flex w-full h-[150px] md:h-[180px] lg:h-[200px]"
            : "w-full mt-3 mb-3"
        }
      `}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div
        className={`relative flex items-center justify-center bg-transparent dark:bg-[#282828]
          ${
            isList
              ? "w-2/5 md:w-[35%] lg:w-[30%] flex-shrink-0"
              : "w-full h-40 sm:h-52 md:h-60"
          }
        `}
      >
        <img
          src={image}
          alt={title}
          className={`${
            isList
              ? "w-[80%] h-[80%] rounded-xl object-fill"
              : "w-full h-full object-fill rounded-t-2xl"
          }`}
        />

        <div
          onClick={() => {
            setLiked(!liked);
            postFavoriteTop(id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full cursor-pointer  duration-200
    ${liked ? "bg-red-500" : "bg-black/45 backdrop-blur-sm"}
  `}
        >
          <FavoriteBorderIcon
            sx={{ color: liked ? "white" : "white", fontSize: 24 }}
          />
        </div>
      </div>
      <Link to={`/news/${id}`}>
        <div
          className={`bg-white dark:bg-[#333] rounded-2xl shadow-sm px-4 pt-4 pb-3 relative z-10 flex flex-col justify-between
          ${
            isList
              ? "w-3/5 md:w-[65%] lg:w-[70%]  rounded-l-none"
              : "-mt-4 min-h-[160px] "
          }
        `}
        >
          <div className={isRtl ? "text-right" : "text-left"}>
            <h3 className="text-sm sm:text-[15px] font-bold text-gray-800 leading-snug dark:text-white line-clamp-2">
              {title}
            </h3>

            <p
              className={`text-gray-600 text-xs sm:text-[13px] mt-1 leading-5 dark:text-[#ccc]
              ${isList ? "line-clamp-3 lg:line-clamp-4" : "line-clamp-2"}
            `}
            >
              {description}
            </p>
          </div>

          <div
            className={`flex justify-between items-center mt-3 text-gray-500 text-xs sm:text-[13px] border-t border-gray-100 dark:border-[#444] pt-2 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex items-center gap-1">
              <LayersIcon sx={{ fontSize: 16, color: "#777" }} />
              <span>{category}</span>
            </div>

            <div className="flex items-center gap-1">
              <VisibilityIcon sx={{ fontSize: 17, color: "#777" }} />
              <span>{views}</span>
            </div>
          </div>

          <div
            className={`flex justify-between items-center mt-2 text-[11px] sm:text-[12px] text-gray-500 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex items-center gap-1">
              <CalendarMonthIcon sx={{ fontSize: 16, color: "#777" }} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon sx={{ fontSize: 17, color: "#FBBF24" }} />
              <span className="text-gray-700 font-medium dark:text-[#ccc]">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
