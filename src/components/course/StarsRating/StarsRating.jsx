import React, { useState } from "react";
import StarRating from '../../assets/Icons/StarRating'

const StarsRating = ({ totalStars = 5 }) => {
  
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);   

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
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <StarRating/>
          </span>
        );
      })}
    </div>
  );
};

export default StarsRating;
