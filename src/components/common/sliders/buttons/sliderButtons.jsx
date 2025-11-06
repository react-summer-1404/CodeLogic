import React from 'react';
import leftIcon from '../../../../assets/Icons/A/left.png';
import rightIcon from '../../../../assets/Icons/A/right.png';
const SliderButtons = ({ sliderRef }) => {
    const scroll = (direction = 'left' | 'right') => {
        if (sliderRef.current) {
            console.log(sliderRef);
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -150 : 150,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div
            className="flex justify-between gap-5 visible md:invisible mx-auto mt-10 md:m-0 w-full "
            style={{ direction: 'ltr' }}
        >
            <button
                onClick={() => scroll('left')}
                className='cursor-pointer shadow-lg text-center w-[45px] h-[45px] rounded-full
             bg-[#008C78]  dark:bg-[#ffff] dark:text-[#ffff] text-[#1E1E1E]"}  bg-[center_center]
              bg-no-repeat '
                style={{ backgroundImage: `url(${leftIcon})` }}
            ></button>
            <button
                onClick={() => scroll('right')}
                className='cursor-pointer shadow-lg text-center w-[45px] h-[45px] rounded-full  bg-[#008C78] dark:bg-[#ffff] 
             dark:text-[#ffff] text-[#1E1E1E]"} bg-[center_center] bg-no-repeat '
                style={{ backgroundImage: `url(${rightIcon})` }}
            ></button>
        </div>
    );
};

export default SliderButtons;
