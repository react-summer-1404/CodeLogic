import React, { useState, useEffect, useCallback } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CommentLikeDislike } from "../../../../core/services/api/post/CommentLikeDislike";
import { useTranslation } from "react-i18next";

const AnswerComment = ({
  commentId,
  image,
  date,
  text,
  title,
  name,
  initialLikeCount,
  initialDislikeCount,
  currentUserIsLike,
  currentUserIsDissLike,
  parentId,
}) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [currentLikeStatus, setCurrentLikeStatus] = useState(0);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [dislikeCount, setDislikeCount] = useState(initialDislikeCount);

  const isLiked = currentLikeStatus === 1;
  const isDisliked = currentLikeStatus === -1;

  useEffect(() => {
    let initialStatus = 0;
    if (currentUserIsLike) {
      initialStatus = 1;
    } else if (currentUserIsDissLike) {
      initialStatus = -1;
    }
    setCurrentLikeStatus(initialStatus);

    setLikeCount(initialLikeCount);
    setDislikeCount(initialDislikeCount);
  }, [
    currentUserIsLike,
    currentUserIsDissLike,
    initialLikeCount,
    initialDislikeCount,
  ]);

  const updateCounts = useCallback((prevStatus, nextStatus) => {
    let likeDelta = 0;
    let dislikeDelta = 0;

    if (prevStatus === 0 && nextStatus === 1) {
      likeDelta = 1;
    } else if (prevStatus === 1 && nextStatus === 0) {
      likeDelta = -1;
    } else if (prevStatus === 0 && nextStatus === -1) {
      dislikeDelta = 1;
    } else if (prevStatus === -1 && nextStatus === 0) {
      dislikeDelta = -1;
    } else if (prevStatus === -1 && nextStatus === 1) {
      dislikeDelta = -1;
      likeDelta = 1;
    } else if (prevStatus === 1 && nextStatus === -1) {
      likeDelta = -1;
      dislikeDelta = 1;
    }

    if (likeDelta !== 0) setLikeCount((prev) => prev + likeDelta);
    if (dislikeDelta !== 0) setDislikeCount((prev) => prev + dislikeDelta);
  }, []);

  const { mutate: toggleLikeDislike } = useMutation({
    mutationFn: ({ id, isLike }) => CommentLikeDislike(id, isLike),
    onSuccess: (data, variables) => {
      const action = variables.isLike ? "لایک" : "دیسلایک";
      toast.success(`پاسخ با موفقیت ${action} شد.`);

      setCurrentLikeStatus((prevStatus) => {
        const newActionStatus = variables.isLike ? 1 : -1;
        let nextStatus = newActionStatus;

        if (prevStatus === newActionStatus) {
          nextStatus = 0;
        }

        updateCounts(prevStatus, nextStatus);

        return nextStatus;
      });

      queryClient.invalidateQueries(["replyComments", parentId]);
    },
    onError: (error, variables) => {
      const action = variables.isLike ? "لایک" : "دیسلایک";
      toast.error(`شما قبلا این نظر را ${action} کرده اید`);
      console.error(error);
    },
  });

  const handleToggleLikeDislike = useCallback(
    (id, isLike) => {
      if (!id) return;
      toggleLikeDislike({ id, isLike });
    },
    [toggleLikeDislike]
  );

  return (
    <div className="w-[500px] max-w-3xl mx-auto bg-white shadow-2xl rounded-4xl p-5 mt-8 dark:bg-[#333] ">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={image}
            className="w-12 h-12 rounded-full object-cover"
            alt="avatar"
          />
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
        <div
          onClick={() => handleToggleLikeDislike(commentId, false)}
          className={`flex items-center gap-1 cursor-pointer ${
            isDisliked
              ? "text-[#008C78] dark:text-[#00BFA5]"
              : "text-[#1E1E1E] dark:text-[#848484]"
          }`}
        >
          <ThumbDownOffAltOutlinedIcon
            className={
              isDisliked ? "text-current" : "text-[#1E1E1E] dark:text-[#848484]"
            }
          />
          <span className={isDisliked ? "text-current" : "dark:text-[#848484]"}>
            {dislikeCount}
          </span>
        </div>

        <div
          onClick={() => handleToggleLikeDislike(commentId, true)}
          className={`flex items-center gap-1 cursor-pointer ${
            isLiked
              ? "text-[#008C78] dark:text-[#00BFA5]"
              : "text-[#1E1E1E] dark:text-[#848484]"
          }`}
        >
          <ThumbUpOutlinedIcon
            className={
              isLiked ? "text-current" : "text-[#1E1E1E] dark:text-[#848484]"
            }
          />
          <span className={isLiked ? "text-current" : "dark:text-[#848484]"}>
            {likeCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnswerComment;
