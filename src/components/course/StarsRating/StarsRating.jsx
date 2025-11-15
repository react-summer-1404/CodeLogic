import React, { useState, useEffect } from "react";
import StarRating from '../../../assets/Icons/StarRating'
import { courseRate } from "../../../core/services/api/post/courseRate";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";



const StarsRating = ({ course, totalStars = 5 }) => {

  const {t} = useTranslation()

  const courseId = course.courseId;
  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem(`rate_${courseId}`);
    return saved;
  });
  const [hover, setHover] = useState(0);
  const [hasRated, setHasRated] = useState(() => {
    return localStorage.getItem(`rated_${courseId}`) === "true";
  });


  useEffect(() => {
    localStorage.setItem(`rate_${courseId}`, rating);
    localStorage.setItem(`rated_${courseId}`, hasRated);
  }, [rating, hasRated, courseId]);



  const onSetRating = async (starValue) => {
    if (hasRated) {
      toast.info(t('userSatisfaction.infoToast')); 
      return;
    }
    setRating(starValue);
    setHasRated(true);
    try {
      await courseRate(courseId, starValue);
      toast.success(t('userSatisfaction.successToast'));
    } catch (error) {
      setHasRated(false);
      toast.info(t('userSatisfaction.infoToast'));
    }
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
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <StarRating />
          </span>
        );
      })}
    </div>
  );
};

export default StarsRating;
