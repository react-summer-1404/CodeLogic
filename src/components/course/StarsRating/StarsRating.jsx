import React, { useState } from "react";
import StarRating from '../../../assets/Icons/StarRating';
import { courseRate } from "../../../core/services/api/post/courseRate";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";



const StarsRating = ({ course, totalStars = 5 }) => {


  const { t } = useTranslation();
  const courseId = course.courseId;

  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem(`rate_${courseId}`);
    return saved ? Number(saved) : 0;
  });

  const [hover, setHover] = useState(0);
  const [hasRated, setHasRated] = useState(() => {
    return localStorage.getItem(`rated_${courseId}`) === "true";
  });

  const token = localStorage.getItem("token");


  const mutation = useMutation({
    mutationFn: ({ courseId, starValue, token }) => courseRate(courseId, starValue, token),
    onSuccess: () => {
      toast.success(t('userSatisfaction.successToast'));
      localStorage.setItem(`rate_${courseId}`, rating);
      localStorage.setItem(`rated_${courseId}`, "true");
    },
    onError: () => {
      setHasRated(false);
    }
  });
  const onSetRating = (starValue) => {
    if (!token) {
      toast.error(t('login.loginToast'));
      return;
    }
    if (hasRated) {
      toast.info(t('userSatisfaction.infoToast'));
      return;
    }
    setRating(starValue);
    setHasRated(true);
    mutation.mutate({ courseId, starValue, token });
  };



  return (
    <div className='flex gap-2'>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            style={{
              cursor: "pointer",
              color: starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              fontSize: "2rem",
              transition: "color 0.2s",
            }}
            onClick={() => onSetRating(starValue)}
            onMouseEnter={() => token && setHover(starValue)}
            onMouseLeave={() => token && setHover(0)}
          >
            <StarRating />
          </span>
        );
      })}
    </div>
  );
};

export default StarsRating;
