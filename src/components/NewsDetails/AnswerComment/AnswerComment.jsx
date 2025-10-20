import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const AnswerComment = ({ image, date, text, title, name, like, dislike }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-2xl rounded-4xl p-5 mt-8 dark:bg-[#333]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img src={image} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold text-[#1E1E1E] text-[16px] dark:text-[white] ">
              {name}
            </p>
            <p className="text-[14px] text-[#848484] mt-1"> {date} </p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-700 text-sm leading-7">
        <p className="w-full text-[1E1E1E] text-[14px] mb-1 dark:text-[white] ">
          {title}
        </p>

        <p className=" text-[#848484] text-[14px]  "> {text}</p>
      </div>

      <div className="flex items-center gap-5 mt-4 text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          <ThumbDownOffAltOutlinedIcon className="text-[#1E1E1E] dark:text-[#848484]" />
          <span className="dark:text-[#848484]">{dislike}</span>
        </div>

        <div className="flex items-center gap-1">
          <ThumbUpOutlinedIcon className="text-[#1E1E1E] dark:text-[#848484]" />
          <span className="dark:text-[#848484]">{like}</span>
        </div>
      </div>
    </div>
  );
};

export default AnswerComment;
