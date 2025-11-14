import React, { useState } from "react";
import img1 from "../../../../assets/Images/HTML5Course.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useMutation } from "@tanstack/react-query";
import { NewsLike } from "../../../../core/services/api/post/NewsLike";
import { Newsdeslike } from "../../../../core/services/api/post/NewsDeslike";
import { toast } from "react-toastify";

const TitleImage = ({ newsDetail }) => {
  const [likeCount, setLikeCount] = useState(newsDetail?._count?.newsLike);
  const [dislikeCount, setDislikeCount] = useState(
    newsDetail?._count?.newsDissLike
  );
  const [userVote, setUserVote] = useState(
    newsDetail?.currentUserIsLike
      ? "like"
      : newsDetail?.currentUserIsDissLike
      ? "dislike"
      : null
  );

  const likeMutation = useMutation({
    mutationFn: (id) => NewsLike(id),
    onSuccess: () => {
      toast.success("لایک شما ثبت شد ");
      if (userVote === "dislike") {
        setDislikeCount((prev) => Math.max(prev - 1, 0));
      }
      if (userVote !== "like") {
        setLikeCount((prev) => prev + 1);
      }
      setUserVote("like");
    },
    onError: () => {
      toast.error("خطا در ثبت لایک ");
    },
  });

  const dislikeMutation = useMutation({
    mutationFn: (id) => Newsdeslike(id),
    onSuccess: () => {
      toast.success("دیسلایک شما ثبت شد ");
      if (userVote === "like") {
        setLikeCount((prev) => Math.max(prev - 1, 0));
      }
      if (userVote !== "dislike") {
        setDislikeCount((prev) => prev + 1);
      }
      setUserVote("dislike");
    },
    onError: () => {
      toast.error("خطا در ثبت دیسلایک ");
    },
  });

  const handleLike = () => {
    if (userVote === "like") {
      toast.error("شما  قبلا این خبر را لایک کرده‌اید ");
      return;
    }
    likeMutation.mutate(newsDetail?.id);
  };

  const handleDislike = () => {
    if (userVote === "dislike") {
      toast.error("شما  قبلا این خبر را دیسلایک کرده‌اید ");
      return;
    }
    dislikeMutation.mutate(newsDetail?.id);
  };

  return (
    <div className="w-full flex flex-wrap">
      <img
        className="w-full h-[425px]"
        src={
          newsDetail.currentImageAddress &&
          !newsDetail.currentImageAddress.includes("undefined")
            ? newsDetail.currentImageAddress
            : img1
        }
      />
      <div className="w-full flex items-center justify-between">
        <div className="px-4 py-3 flex justify-between gap-1">
          <p className="text-[#848484] font-[14px] rounded-3xl py-2 px-3 lg:border lg:border-[#848484]">
            {newsDetail?.newsCatregoryName}
          </p>
          <span className="text-[#848484] font-[16px] py-2 px-3">
            {newsDetail?.insertDate &&
              new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(newsDetail.insertDate))}
          </span>
          <div className="py-2 px-3">
            <VisibilityIcon className="text-[#848484] font-[16px]" />
            <span className="text-[#848484] font-[16px] mr-2 ">
              {newsDetail?.currentView}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <div
            onClick={handleDislike}
            className={`mr-3 flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              userVote === "dislike"
                ? "bg-[#008C78] text-white border-[#008C78]"
                : "text-[#848484] bg-[#EAEAEA] dark:border-[#555] dark:bg-[#333] dark:text-[white]"
            }`}
          >
            <span className="ml-2">{dislikeCount}</span>
            <ThumbDownAltIcon />
          </div>

          <div
            onClick={handleLike}
            className={`mr-3 flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              userVote === "like"
                ? "bg-[#008C78] text-white border-[#008C78]"
                : "text-[#848484] bg-[#EAEAEA] dark:border-[#555] dark:bg-[#333] dark:text-[white]"
            }`}
          >
            <span className="ml-2">{likeCount}</span>
            <ThumbUpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleImage;
